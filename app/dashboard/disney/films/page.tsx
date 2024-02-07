import { fetchDisneyFilmsPages } from "@/app/lib/disney/films/data-disney-films";
import { CreateFilm } from "@/app/ui/disney/films/buttons";
import DisneyFilmsTable from "@/app/ui/disney/films/table";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export default async function DisneyFilms({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchDisneyFilmsPages(query);

  return (
    <div>
        <h1 className="mb-8 text-xl md:text-2xl">Films Disney</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher un film..." />
            <CreateFilm />
        </div>
        <DisneyFilmsTable query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
