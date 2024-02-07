import { fetchDisneyAnimationsPages } from "@/app/lib/disney/animations/data-disney-animations";
import { CreateAnimation } from "@/app/ui/disney/animations/buttons";
import DisneyTableAnimations from "@/app/ui/disney/animations/table";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export default async function DisneyAnimations({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchDisneyAnimationsPages(query);

  return (
    <div>
        <h1 className="mb-8 text-xl md:text-2xl">Films d&#39;animation Disney</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher un film..." />
            <CreateAnimation />
        </div>
        <DisneyTableAnimations query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
