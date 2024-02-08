import { fetchSerieMarvelById } from "@/app/lib/marvel/series/data-marvel-series";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/marvel/series/edit-form";
import { notFound } from "next/navigation";

export default async function MarvelSeries({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [marvelSerie] = await Promise.all([fetchSerieMarvelById(id)]);

    if (!marvelSerie) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "Séries Marvel",
                        href: "/dashboard/marvel/series",
                    },
                    {
                        label: "Modifier",
                        href: `/dashboard/marvel/series/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm marvelSerie={marvelSerie} />
        </main>
    );
}
