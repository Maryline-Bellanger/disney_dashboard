import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormMarvelSeries from "@/app/ui/marvel/series/create-form";

export default function DisneySeries() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Séries Marvel', href: '/dashboard/marvel/series' },
          {
            label: 'Ajouter',
            href: `/dashboard/marvel/series/create`,
            active: true,
          },
        ]}
      />
        <FormMarvelSeries />
    </div>
  )
}