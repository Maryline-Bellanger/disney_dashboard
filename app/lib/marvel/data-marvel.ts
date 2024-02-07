import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'

export async function fetchCardDataMarvel() {
    noStore();
    try {
        const filmCountPromise = sql`SELECT COUNT(*) FROM marvel_films`;
        const serieCountPromise = sql`SELECT COUNT(*) FROM marvel_series`;

        const data = await Promise.all([
            filmCountPromise,
            serieCountPromise,
        ]);

        const numberOfFilms = Number(data[0].rows[0].count ?? 'O');
        const numberOfSeries = Number(data[1].rows[0].count ?? '0');

        return {
            numberOfFilms,
            numberOfSeries,
        };

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.')
    }
}