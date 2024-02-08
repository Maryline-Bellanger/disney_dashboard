import Image from "next/image";
import Link from "next/link";
import marvelImage from "../../../public/images/marvel.png";

export default function Marvel() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[260px] md:w-[500px]">
                    <Image src={marvelImage} alt={""} />
                </div>
            </div>
            <div className="flex md:flex-row md:justify-evenly flex-col items-center">
                <div>
                    <Link href="/dashboard/marvel/films">
                        <button className="bg-orange-400 py-2 px-4 my-2 w-64 rounded-lg">
                            Films Marvel
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="/dashboard/marvel/series">
                        <button className="bg-orange-400 py-2 px-4 my-2 w-64 rounded-lg">
                            Séries Marvel
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
