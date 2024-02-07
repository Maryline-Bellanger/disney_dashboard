'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import homeLogo from "../../../public/home_logo.png";
import disneyLogo from "../../../public/disney_logo.png";
import marvelLogo from "../../../public/marvel_logo.png";
import starwarsLogo from "../../../public/starwars_logo.png";
import Image from "next/image";

const links = [
    {
        name: 'Accueil',
        href: '/dashboard',
        icon: homeLogo
    },
    {
        name: 'Disney',
        href: '/dashboard/disney',
        hrefDisneyF: '/dashboard/disney/films',
        hrefDisneyA: '/dashboard/disney/animations',
        hrefDisneyS: '/dashboard/disney/series',
        icon: disneyLogo
    },
    {
        name: 'Marvel',
        href: '/dashboard/marvel',
        hrefMarvelF: '/dashboard/marvel/films',
        hrefMarvelS: '/dashboard/marvel/series',
        icon: marvelLogo
    },
    {
        name: 'Starwars',
        href: '/dashboard/starwars',
        hrefStarwarsF: '/dashboard/starwars/films',
        hrefStarwarsS: '/dashboard/starwars/series',
        hrefStarwarsC: '/dashboard/starwars/characters',
        icon: starwarsLogo
    },
];


export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-orange-200 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-orange-300': pathname === link.href,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefDisneyF,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefDisneyA,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefDisneyS,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefMarvelF,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefMarvelS,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefStarwarsF,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefStarwarsS,
                            },
                            {
                                'bg-orange-300': pathname === link.hrefStarwarsC,
                            },
                        )}
                    >
                            <Image src={link.icon} alt={link.name} width={25} />
                            <span className="hidden md:block pl-3">{link.name}</span>
                    </Link>
                );
            })}
        </>
    );
}
