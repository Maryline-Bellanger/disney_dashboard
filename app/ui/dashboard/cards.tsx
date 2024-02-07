import { fetchCardDataDisney } from "@/app/lib/disney/data-disney";
import { fetchCardDataMarvel } from "@/app/lib/marvel/data-marvel";
import { fetchCardDataStarwars } from "@/app/lib/starwars/data-starwars";



export async function CardWrapperDisney() {
    const {
        numberOfFilms,
        numberOfAnimations,
        numberOfSeries,
      } = await fetchCardDataDisney();

  return (
    <>
        <Card title="Films" value={numberOfFilms} />
        <Card title="Films d'animation" value={numberOfAnimations} />
        <Card title="Séries" value={numberOfSeries} />
        <Card title="Total films + séries" value= {numberOfFilms  + numberOfAnimations + numberOfSeries} />
    </>
  );
}

export async function CardWrapperMarvel(){
    const {
        numberOfFilms,
        numberOfSeries,
    } = await fetchCardDataMarvel();
    return (
        <>
        <Card title="Films" value={numberOfFilms} />
        <Card title="Séries" value={numberOfSeries} />
        <Card title="Total films + séries" value= {numberOfFilms + numberOfSeries} />
        </>
    )
}

export async function CardWrapperstarwars(){
    const {
        numberOfFilms,
        numberOfSeries,
    } = await fetchCardDataStarwars();
    return (
        <>
        <Card title="Films" value={numberOfFilms} />
        <Card title="Séries" value={numberOfSeries} />
        <Card title="Total films + séries" value= {numberOfFilms + numberOfSeries} />
        </>
    )
}

export function Card({
    title,
    value,
}: {
    title: string;
    value: number | string;
}) {


    return (
        <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p
                className={`
                truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
            >
                {value}
            </p>
        </div>
    );    
}

