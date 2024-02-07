import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import disneyImage from '../../../public/images/disney_pixar.png'

export default function Disney() {
  return (
    <>
        <div className='flex justify-center'>
            <div className='w-[260px] md:w-[500px]'>
                <Image src={disneyImage} alt={''} />
            </div>
        </div>
        <div className='flex md:flex-row md:justify-evenly flex-col items-center'>
            <div>
                <Link href='/dashboard/disney/films'>
                    <button className='bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 my-2 w-64 rounded-lg'>
                        Films Disney
                    </button>
                </Link>
            </div>
            <div>
                <Link href='/dashboard/disney/animations'>
                    <button className='bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 my-2 w-64 rounded-lg'>
                        Films d&#39;animations Disney
                    </button>
                </Link>
            </div>
            <div>
                <Link href='/dashboard/disney/series'>
                    <button className='bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 my-2 w-64 rounded-lg'>
                        Séries Disney
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}

