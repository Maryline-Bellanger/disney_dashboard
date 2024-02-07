import { fetchMarvelFilmsPages } from "@/app/lib/marvel/films/data-marvel-films";
import { CreateFilm } from "@/app/ui/marvel/films/buttons";
import MarvelTableFilms from "@/app/ui/marvel/films/table";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";

export default async function MarvelFilms({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchMarvelFilmsPages(query);

  return (
    <div>
        <h1 className="mb-8 text-xl md:text-2xl">Films Marvel</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Rechercher un film..." />
            <CreateFilm />
        </div>
        <MarvelTableFilms query={query} currentPage={currentPage} />
        <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}
