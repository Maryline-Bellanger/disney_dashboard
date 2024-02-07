import { fetchDisneySeriesPages } from "@/app/lib/disney/series/data-disney-series";
import { CreateSerie } from "@/app/ui/disney/series/buttons";
import DisneyTableSeries from "@/app/ui/disney/series/table";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export default async function DisneySeries({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchDisneySeriesPages(query);

  return (
    <div>
        <h1 className="mb-8 text-xl md:text-2xl">Séries Disney</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher une série..." />
            <CreateSerie />
        </div>
        <DisneyTableSeries query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
