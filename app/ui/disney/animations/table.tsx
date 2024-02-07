import { fetchFilteredDisneyAnimations } from "@/app/lib/disney/animations/data-disney-animations";
import { formatDateToLocal } from "@/app/lib/utils";
import { DeleteAnimation, UpdateAnimation } from "./buttons";

export default async function DisneyTableAnimations({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const animations = await fetchFilteredDisneyAnimations(query, currentPage);
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {animations?.map((anim) => (
                            <div
                                key={anim.tmdb_id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{anim.tmdb_id}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            {anim.title}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {formatDateToLocal(anim.date)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className="flex justify-end gap-2">
                                        <UpdateAnimation id={anim.id} />
                                        <DeleteAnimation id={anim.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                        <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-4 py-5 font-medium sm:pl-6"
                                >
                                    ID tmdb
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Titre
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-5 font-medium"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="relative py-3 pl-6 pr-3"
                                >
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {animations?.map((anim) => (
                                <tr key={anim.id}>
                                    <td>{anim.tmdb_id}</td>
                                    <td>{anim.title}</td>
                                    <td>{formatDateToLocal(anim.date)}</td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <UpdateAnimation id={anim.id} />
                                            <DeleteAnimation id={anim.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
