import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormStarwarsSeries from "@/app/ui/starwars/series/create-form";

export default function StarwarsSeries() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Séries Starwars', href: '/dashboard/starwars/series' },
          {
            label: 'Ajouter',
            href: `/dashboard/starwars/series/create`,
            active: true,
          },
        ]}
      />
        <FormStarwarsSeries />
    </div>
  )
}