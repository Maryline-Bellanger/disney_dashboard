import { fetchFilmMarvelById } from "@/app/lib/marvel/films/data-marvel-films";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/marvel/films/edit-form";
import { notFound } from "next/navigation";

export default async function MarvelFilms({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [marvelFilm] = await Promise.all([fetchFilmMarvelById(id)]);

    if (!marvelFilm) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Films Marvel", href: "/dashboard/marvel/films" },
                    {
                        label: "Modifier",
                        href: `/dashboard/marvel/films/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm marvelFilm={marvelFilm} />
        </main>
    );
}
