"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
    id: z.string(),
    tmdb_id: z.coerce.number(),
    title: z.string(),
    date: z.string(),
});

const CreateFilm = FormSchema.omit({ id: true });
const UpdateFilm = FormSchema.omit({ id: true });

export async function createFilm(formData: FormData) {
    const { tmdb_id, title, date } = CreateFilm.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
    INSERT INTO disney_films (tmdb_id, title, date)
    VALUES (${tmdb_id}, ${title}, ${date})
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Create Disney Film.",
        };
    }

    revalidatePath("/dashboard/disney/films");
    redirect("/dashboard/disney/films");
}

export async function updateFilm(id: string, formData: FormData) {
    const { tmdb_id, title, date } = UpdateFilm.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
        UPDATE disney_films
        SET tmdb_id = ${tmdb_id}, title = ${title}, date = ${date}
        WHERE id = ${id}
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Update Disney Film.",
        };
    }

    revalidatePath("/dashboard/disney/films");
    redirect("/dashboard/disney/films");
}

export async function deleteFilm(id: string) {
    try {
        await sql`DELETE FROM disney_films WHERE id = ${id}`;
        revalidatePath("/dashboard/disney/films");
        return { message: "Deleted Disney Film." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Disney Film." };
    }
}
