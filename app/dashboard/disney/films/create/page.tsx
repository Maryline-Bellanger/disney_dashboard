import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormDisneyFilms from "@/app/ui/disney/films/create-form";

export default function DisneyFilms() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Films Disney', href: '/dashboard/disney/films' },
          {
            label: 'Ajouter',
            href: `/dashboard/disney/films/create`,
            active: true,
          },
        ]}
      />
        <FormDisneyFilms />
    </div>
  )
}
