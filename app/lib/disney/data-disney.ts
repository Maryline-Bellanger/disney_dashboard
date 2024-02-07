import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'

export async function fetchCardDataDisney() {
    noStore();
    try {
        const filmCountPromise = sql`SELECT COUNT(*) FROM disney_films`;
        const animationCountPromise = sql`SELECT COUNT(*) FROM disney_animations`;
        const serieCountPromise = sql`SELECT COUNT(*) FROM disney_series`;

        const data = await Promise.all([
            filmCountPromise,
            animationCountPromise,
            serieCountPromise,
        ]);

        const numberOfFilms = Number(data[0].rows[0].count ?? 'O');
        const numberOfAnimations = Number(data[1].rows[0].count ?? '0');
        const numberOfSeries = Number(data[2].rows[0].count ?? '0');

        return {
            numberOfFilms,
            numberOfAnimations,
            numberOfSeries,
        };

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.')
    }
}