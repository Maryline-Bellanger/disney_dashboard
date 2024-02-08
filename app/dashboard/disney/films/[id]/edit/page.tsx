import { fetchFilmDisneyById } from "@/app/lib/disney/films/data-disney-films";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/disney/films/edit-form";
import { notFound } from "next/navigation";

export default async function DisneyFilms({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [disneyFilm] = await Promise.all([fetchFilmDisneyById(id)]);

    if (!disneyFilm) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Films Disney", href: "/dashboard/disney/films" },
                    {
                        label: "Modifier",
                        href: `/dashboard/disney/films/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm disneyFilm={disneyFilm} />
        </main>
    );
}
