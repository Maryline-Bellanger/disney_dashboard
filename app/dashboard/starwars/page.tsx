import Image from "next/image";
import Link from "next/link";
import starwarsImage from "../../../public/images/starwars.png";

export default function Starwars() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[260px] md:w-[500px]">
                    <Image src={starwarsImage} alt={""} />
                </div>
            </div>
            <div className="flex md:flex-row md:justify-evenly flex-col items-center">
                <div>
                    <Link href="/dashboard/starwars/films">
                        <button className="bg-orange-400 py-2 px-4 my-2 w-64 rounded-lg">
                            Films Starwars
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="/dashboard/starwars/series">
                        <button className="bg-orange-400 py-2 px-4 my-2 w-64 rounded-lg">
                            Séries Starwars
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
