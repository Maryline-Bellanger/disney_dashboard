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

const CreateSerie = FormSchema.omit({ id: true });
const UpdateSerie = FormSchema.omit({ id: true });

export async function createSerie(formData: FormData) {
    const { tmdb_id, title, date } = CreateSerie.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
    INSERT INTO starwars_series (tmdb_id, title, date)
    VALUES (${tmdb_id}, ${title}, ${date})
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Create Starwars Serie.",
        };
    }

    revalidatePath("/dashboard/starwars/series");
    redirect("/dashboard/starwars/series");
}

export async function updateSerie(id: string, formData: FormData) {
    const { tmdb_id, title, date } = UpdateSerie.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
        UPDATE starwars_series
        SET tmdb_id = ${tmdb_id}, title = ${title}, date = ${date}
        WHERE id = ${id}
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Update Starwars Serie.",
        };
    }

    revalidatePath("/dashboard/starwars/series");
    redirect("/dashboard/starwars/series");
}

export async function deleteSerie(id: string) {
    try {
        await sql`DELETE FROM starwars_series WHERE id = ${id}`;
        revalidatePath("/dashboard/starwars/series");
        return { message: "Deleted Starwars Serie." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Starwars Serie." };
    }
}
