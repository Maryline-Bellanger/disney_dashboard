import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormDisneySeries from "@/app/ui/disney/series/create-form";

export default function DisneySeries() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Séries Disney', href: '/dashboard/disney/series' },
          {
            label: 'Ajouter',
            href: `/dashboard/disney/series/create`,
            active: true,
          },
        ]}
      />
        <FormDisneySeries />
    </div>
  )
}
