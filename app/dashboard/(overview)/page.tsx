
import { CardWrapperDisney, CardWrapperMarvel, CardWrapperstarwars } from "@/app/ui/dashboard/cards";
import { CardsSkeletonDisney, CardsSkeletonMarvel, CardsSkeletonStarwars } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Home() {
	return <main>
        <h1 className="mb-4 text-xl md:text-2xl">Dashboard</h1>
        <h2 className="mb-2 text-lg md: text-xl font-semibold">Univers Disney</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeletonDisney />}>
                <CardWrapperDisney />
            </Suspense>
        </div>
        <h2 className="mt-6 mb-2 text-lg md: text-xl font-semibold">Univers Marvel</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<CardsSkeletonMarvel />}>
                <CardWrapperMarvel />
            </Suspense>
        </div>
        <h2 className="mt-6 mb-2 text-lg md: text-xl font-semibold">Univers Starwars</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<CardsSkeletonStarwars />}>
                <CardWrapperstarwars />
            </Suspense>
        </div>
    </main>;
}


