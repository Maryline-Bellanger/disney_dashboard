import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from "next/cache";
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredStarwarsFilms(
    query: string,
    currentPage: number,
){
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const films = await sql<Data>`
        SELECT
            *
        FROM starwars_films
        WHERE
            title ILIKE ${`%${query}%`} 
        ORDER BY date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return films.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Starwars Films.');
    }
}

export async function fetchStarwarsFilmsPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
        FROM starwars_films
        WHERE
        title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Starwars films.');
    }
}

export async function fetchFilmStarwarsById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM starwars_films
        WHERE starwars_films.id = ${id};
        `;

        const film = data.rows.map((film) => ({
        ...film,
        }));

        return film[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Starwars films.');
    }
}