import Breadcrumbs from "@/app/ui/breadcrumbs";
import FormDisneyAnimation from "@/app/ui/disney/animations/create-form";

export default function DisneyAnimation() {
  return (
    <div>
        <Breadcrumbs
        breadcrumbs={[
          { label: "Films d'animation Disney", href: '/dashboard/disney/animations' },
          {
            label: 'Ajouter',
            href: `/dashboard/disney/animations/create`,
            active: true,
          },
        ]}
      />
        <FormDisneyAnimation />
    </div>
  )
}