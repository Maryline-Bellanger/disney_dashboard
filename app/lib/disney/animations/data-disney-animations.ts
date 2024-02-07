import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore} from 'next/cache'
import { Data, DataForm } from "../../definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredDisneyAnimations(
    query: string,
    currentPage: number,
){
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const animations = await sql<Data>`
        SELECT
            *
        FROM disney_animations
        WHERE
            disney_animations.title ILIKE ${`%${query}%`} 
        ORDER BY disney_animations.date DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return animations.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney Animations Films.');
    }
}

export async function fetchDisneyAnimationsPages(query: string) {
    try {
        const count = await sql`SELECT COUNT(*)
        FROM disney_animations
        WHERE
        disney_animations.title ILIKE ${`%${query}%`} 
    `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of Disney Animations Films.');
    }
}

export async function fetchAnimationDisneyById(id: string) {
    noStore();
    try {
        const data = await sql<DataForm>`
        SELECT
            *
        FROM disney_animations
        WHERE disney_animations.id = ${id};
        `;

        const animation = data.rows.map((animation) => ({
        ...animation,
        }));

        return animation[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Disney Animations Films.');
    }
}