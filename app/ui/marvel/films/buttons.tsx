import { deleteFilm } from '@/app/lib/marvel/films/actions-marvel-films';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export function CreateFilm() {
    return (
        <Link
        href="/dashboard/marvel/films/create"
        className="flex h-10 items-center rounded-lg bg-orange-600 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Ajouter un film</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}

export function UpdateFilm({ id }: { id: string }) {
    return (
        <Link
        href={`/dashboard/marvel/films/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

export function DeleteFilm({ id }: { id: string }) {
    const deleteMarvelFilmWithId = deleteFilm.bind(null, id);
    return (
        <form action={deleteMarvelFilmWithId}>
            <button className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Supprimer</span>
                <TrashIcon className="w-4" />
            </button>
        </form>
    );
}
