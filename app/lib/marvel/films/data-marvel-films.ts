import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from "next/cache";
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredMarvelFilms(
    query: string,
    currentPage: number,
){
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const films = await sql<Data>`
        SELECT
            *
        FROM marvel_films
        WHERE
            marvel_films.title ILIKE ${`%${query}%`} 
        ORDER BY marvel_films.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return films.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Marvel Films.');
    }
}

export async function fetchMarvelFilmsPages(query: string) {
    noStore();
    try {
        const count = await sql`SELECT COUNT(*)
        FROM marvel_films
        WHERE
        marvel_films.title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Marvel films.');
    }
}

export async function fetchFilmMarvelById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM marvel_films
        WHERE marvel_films.id = ${id};
        `;

        const film = data.rows.map((film) => ({
        ...film,
        }));

        return film[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Marvel films.');
    }
}