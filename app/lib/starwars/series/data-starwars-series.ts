import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredStarwarsSeries(
    query: string,
    currentPage: number
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const films = await sql<Data>`
        SELECT
            *
        FROM starwars_series
        WHERE
        starwars_series.title ILIKE ${`%${query}%`} 
        ORDER BY starwars_series.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return films.rows;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch Starwars series.");
    }
}

export async function fetchStarwarsSeriesPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM starwars_series
        WHERE
        starwars_series.title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(
            Number(count.rows[0].count) / ITEMS_PER_PAGE
        );
        return totalPages;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch total number of Starwars series.");
    }
}

export async function fetchSerieStarwarsById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM starwars_series
        WHERE starwars_series.id = ${id};
        `;

        const serie = data.rows.map((serie) => ({
            ...serie,
        }));

        return serie[0];
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch Starwars series.");
    }
}
