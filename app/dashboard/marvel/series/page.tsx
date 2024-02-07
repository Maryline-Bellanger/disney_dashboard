import { fetchMarvelSeriesPages } from "@/app/lib/marvel/series/data-marvel-series";
import { CreateSerie } from "@/app/ui/marvel/series/buttons";
import MarvelTableSeries from "@/app/ui/marvel/series/table";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export default async function MarvelSeries({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchMarvelSeriesPages(query);

  return (
    <div>
        <h1 className="mb-8 text-xl md:text-2xl">Séries Marvel</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher une série..." />
            <CreateSerie />
        </div>
        <MarvelTableSeries query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
