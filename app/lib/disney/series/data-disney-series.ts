import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredDisneySeries(
    query: string,
    currentPage: number,
){
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    noStore()
    try {
        const series = await sql<Data>`
        SELECT
            *
        FROM disney_series
        WHERE
            title ILIKE ${`%${query}%`} 
        ORDER BY date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return series.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney series.');
    }
}

export async function fetchDisneySeriesPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM disney_series
        WHERE
        title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Disney series.');
    }
}

export async function fetchSerieDisneyById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM disney_series
        WHERE disney_series.id = ${id};
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