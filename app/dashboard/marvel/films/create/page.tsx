import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormMarvelFilms from "@/app/ui/marvel/films/create-form";

export default function MarvelFilms() {
    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Films Marvel", href: "/dashboard/marvel/films" },
                    {
                        label: "Ajouter",
                        href: `/dashboard/marvel/films/create`,
                        active: true,
                    },
                ]}
            />
            <FormMarvelFilms />
        </div>
    );
}
