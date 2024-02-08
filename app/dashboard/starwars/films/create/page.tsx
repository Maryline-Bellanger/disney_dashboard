import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormStarwarsFilms from "@/app/ui/starwars/films/create-form";

export default function DisneyFilms() {
    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Films Disney", href: "/dashboard/disney/films" },
                    {
                        label: "Ajouter",
                        href: `/dashboard/disney/films/create`,
                        active: true,
                    },
                ]}
            />
            <FormStarwarsFilms />
        </div>
    );
}
