import { fetchStarwarsSeriesPages } from "@/app/lib/starwars/series/data-starwars-series";
import Pagination from "@/app/ui/pagination";
import Search from "@/app/ui/search";
import { CreateSerie } from "@/app/ui/starwars/series/buttons";
import StarwarsTableSeries from "@/app/ui/starwars/series/table";

export default async function DisneySeries({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchStarwarsSeriesPages(query);

    return (
        <div>
            <h1 className="mb-8 text-xl md:text-2xl">Séries Disney</h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Rechercher une série..." />
                <CreateSerie />
            </div>
            <StarwarsTableSeries query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}
