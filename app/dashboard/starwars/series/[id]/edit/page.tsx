import { fetchSerieStarwarsById } from "@/app/lib/starwars/series/data-starwars-series";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/starwars/series/edit-form";
import { notFound } from "next/navigation";

export default async function StarwarsSeries({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [starwarsSerie] = await Promise.all([fetchSerieStarwarsById(id)]);

    if (!starwarsSerie) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "Séries Disney",
                        href: "/dashboard/starwars/series",
                    },
                    {
                        label: "Modifier",
                        href: `/dashboard/starwars/series/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm starwarsSerie={starwarsSerie} />
        </main>
    );
}
