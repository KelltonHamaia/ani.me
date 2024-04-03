"use client"

import { Anime, getBannerData } from '@/data/last-news-data';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export const Banner = () => {

    const [bannerImage, setBannerImage] = useState<Anime>();

    useEffect(() => {
        setTimeout(() => {
            setBannerImage(getBannerData())
        }, 1000)
    }, [])

    if (!bannerImage) {
        return (
            <div className='w-full my-5 pb-4 flex flex-col font-mono text-center text-xs md:text-base lg:text-xl gap-4 items-center justify-end text-white font-bold lg:h-[400px] md:h-[300px] h-[180px] lg:bg-cover rounded-md dark:bg-primary-foreground bg-primary animate-pulse'>
                <div className='self-start w-full h-5 ml-4 rounded max-w-32 md:max-w-80 lg:max-w-3xl md:h-10 dark:bg-primary bg-primary-foreground'></div>
                <div className='self-start w-full h-20 ml-4 rounded max-w-44 md:max-w-lg lg:max-w-4xl md:h-32 lg:h-40 dark:bg-primary bg-primary-foreground'></div>
            </div>
        )
    }

    return (
        <div className={cn('w-full my-5 flex flex-col lg:h-[400px] md:h-[300px] h-[180px] lg:bg-cover bg-cover bg-center relative rounded-md overflow-hidden', bannerImage?.image)}>
            <div className="absolute w-full h-full pointer-events-none bg-zinc-950 opacity-80"></div>
            <div className="w-full max-w-[700px] p-5 flex flex-col gap-4 absolute bottom-0">
                <h2 className='text-sm font-semibold text-white text-secondary-foreground lg:text-4xl md:text-2xl'>{bannerImage?.title}</h2>
                <p className='text-xs leading-relaxed text-white text-muted-foreground lg:text-lg md:text-sm line-clamp-4 text-balance'>{bannerImage?.description}</p>
            </div>
        </div>
    );
}
