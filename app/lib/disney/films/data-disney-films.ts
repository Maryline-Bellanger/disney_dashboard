import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from "next/cache";
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredDisneyFilms(
    query: string,
    currentPage: number,
){
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const films = await sql<Data>`
        SELECT
            *
        FROM disney_films
        WHERE
            disney_films.title ILIKE ${`%${query}%`} 
        ORDER BY disney_films.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return films.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney Films.');
    }
}

export async function fetchDisneyFilmsPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
        FROM disney_films
        WHERE
        disney_films.title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Disney films.');
    }
}

export async function fetchFilmDisneyById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM disney_films
        WHERE disney_films.id = ${id};
        `;

        const film = data.rows.map((film) => ({
        ...film,
        }));

        return film[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney films.');
    }
}