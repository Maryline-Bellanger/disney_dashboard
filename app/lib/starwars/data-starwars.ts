import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'

export async function fetchCardDataStarwars() {
    noStore();
    try {
        const filmCountPromise = sql`SELECT COUNT(*) FROM starwars_films`;
        const serieCountPromise = sql`SELECT COUNT(*) FROM starwars_series`;

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