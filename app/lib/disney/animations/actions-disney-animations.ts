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

const CreateAnimation = FormSchema.omit({ id: true });
const UpdateAnimation = FormSchema.omit({ id: true });

export async function createAnimation(formData: FormData) {
    const { tmdb_id, title, date } = CreateAnimation.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
    INSERT INTO disney_animations (tmdb_id, title, date)
    VALUES (${tmdb_id}, ${title}, ${date})
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Create Disney Animation Film.",
        };
    }

    revalidatePath("/dashboard/disney/animations");
    redirect("/dashboard/disney/animations");
}

export async function updateAnimation(id: string, formData: FormData) {
    const { tmdb_id, title, date } = UpdateAnimation.parse({
        tmdb_id: formData.get("tmdb_id"),
        title: formData.get("title"),
        date: formData.get("date"),
    });

    try {
        await sql`
        UPDATE disney_animations
        SET tmdb_id = ${tmdb_id}, title = ${title}, date = ${date}
        WHERE id = ${id}
    `;
    } catch (error) {
        return {
            message: "Database Error: Failed to Update Disney Animation Film.",
        };
    }

    revalidatePath("/dashboard/disney/animations");
    redirect("/dashboard/disney/animations");
}

export async function deleteAnimation(id: string) {
    try {
        await sql`DELETE FROM disney_animations WHERE id = ${id}`;
        revalidatePath("/dashboard/disney/animations");
        return { message: "Deleted Disney Animation Film." };
    } catch (error) {
        return { message: "Database Error: Failed to Delete Disney Animation Film." };
    }
}
