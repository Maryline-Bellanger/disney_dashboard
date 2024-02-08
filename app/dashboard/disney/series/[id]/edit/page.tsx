import { fetchSerieDisneyById } from "@/app/lib/disney/series/data-disney-series";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/disney/series/edit-form";
import { notFound } from "next/navigation";

export default async function DisneySeries({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [disneySerie] = await Promise.all([fetchSerieDisneyById(id)]);

    if (!disneySerie) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "Séries Disney",
                        href: "/dashboard/disney/series",
                    },
                    {
                        label: "Modifier",
                        href: `/dashboard/disney/series/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm disneySerie={disneySerie} />
        </main>
    );
}
