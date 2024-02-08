import { fetchFilmStarwarsById } from "@/app/lib/starwars/films/data-starwars-films";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/starwars/films/edit-form";
import { notFound } from "next/navigation";

export default async function StarwarsFilms({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [starwarsFilm] = await Promise.all([fetchFilmStarwarsById(id)]);

    if (!starwarsFilm) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "Films Disney",
                        href: "/dashboard/starwars/films",
                    },
                    {
                        label: "Modifier",
                        href: `/dashboard/disney/starwars/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm starwarsFilm={starwarsFilm} />
        </main>
    );
}
