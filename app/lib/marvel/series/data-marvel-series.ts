import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredMarvelSeries(
    query: string,
    currentPage: number,
){
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const films = await sql<Data>`
        SELECT
            *
        FROM marvel_series
        WHERE
        marvel_series.title ILIKE ${`%${query}%`} 
        ORDER BY marvel_series.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return films.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney series.');
    }
}

export async function fetchMarvelSeriesPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM marvel_series
        WHERE
        marvel_series.title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Disney series.');
    }
}

export async function fetchSerieMarvelById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM marvel_series
        WHERE marvel_series.id = ${id};
        `;

        const serie = data.rows.map((serie) => ({
        ...serie,
        }));

        return serie[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney series.');
    }
}