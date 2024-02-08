import { fetchAnimationDisneyById } from "@/app/lib/disney/animations/data-disney-animations";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import EditForm from "@/app/ui/disney/animations/edit-form";
import { notFound } from "next/navigation";

export default async function DisneyAnimations({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;
    const [disneyAnimation] = await Promise.all([fetchAnimationDisneyById(id)]);

    if (!disneyAnimation) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: "Films d'animation Disney",
                        href: "/dashboard/disney/animations",
                    },
                    {
                        label: "Modifier",
                        href: `/dashboard/disney/animations/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <EditForm disneyAnimation={disneyAnimation} />
        </main>
    );
}
