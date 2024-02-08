import Link from "next/link";
import { Button } from "../../button";
import { DataForm } from "@/app/lib/definitions";
import { updateSerie } from "@/app/lib/starwars/series/actions-starwars-series";

export default function EditForm({
    starwarsSerie,
}: {
    starwarsSerie: DataForm;
}) {
    const updateSerieWithId = updateSerie.bind(null, starwarsSerie.id);

    return (
        <form action={updateSerieWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        ID TMDB
                    </legend>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="tmdb_id"
                                name="tmdb_id"
                                type="number"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={starwarsSerie.tmdb_id}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        Titre
                    </legend>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={starwarsSerie.title}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        Date
                    </legend>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="date"
                                name="date"
                                type="date"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={starwarsSerie.date}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/starwars/series"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Modifier</Button>
            </div>
        </form>
    );
}
