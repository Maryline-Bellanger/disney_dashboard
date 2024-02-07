import { deleteSerie } from '@/app/lib/starwars/series/actions-starwars-series';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export function CreateSerie() {
    return (
        <Link
        href="/dashboard/starwars/series/create"
        className="flex h-10 items-center rounded-lg bg-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Ajouter une série</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateSerie({ id }: { id: string }) {
    return (
        <Link
        href={`/dashboard/starwars/series/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteSerie({ id }: { id: string }) {
    const deleteStarwarsSerieWithId = deleteSerie.bind(null, id);
    return (
        <form action={deleteStarwarsSerieWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Supprimer</span>
                <TrashIcon className="w-4" />
            </button>
        </form>
    );
}
