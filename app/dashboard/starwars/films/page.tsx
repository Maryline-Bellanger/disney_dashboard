import { fetchStarwarsFilmsPages } from "@/app/lib/starwars/films/data-starwars-films";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { CreateFilm } from "@/app/ui/starwars/films/buttons";
import StarwarsTableFilms from "@/app/ui/starwars/films/table";

export default async function StarwarsFilms({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchStarwarsFilmsPages(query);

    return (
        <div>
            <h1 className="mb-8 text-xl md:text-2xl">Films Starwars</h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Rechercher un film..." />
                <CreateFilm />
            </div>
            <StarwarsTableFilms query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
