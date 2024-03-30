import { bannerData } from '@/data/last-news-data';
import { cn } from '@/lib/utils';

export const Banner = () => {
    return (
        <div className={cn('w-full my-5 flex flex-col lg:h-[400px] md:h-[300px] h-[180px] lg:bg-cover bg-cover bg-center relative rounded-md overflow-hidden', bannerData.image)}>
            <div className="absolute w-full h-full pointer-events-none bg-zinc-950 opacity-80"></div>
            <div className="w-full max-w-[700px] p-5 flex flex-col gap-4 absolute bottom-0">
                <h2 className='text-sm font-semibold text-white text-secondary-foreground lg:text-4xl md:text-2xl'>{bannerData.title}</h2>
                <p className='text-xs leading-relaxed text-white text-muted-foreground lg:text-lg md:text-sm line-clamp-4 text-balance'>{bannerData.description}</p>
            </div>
        </div>
    );
}
