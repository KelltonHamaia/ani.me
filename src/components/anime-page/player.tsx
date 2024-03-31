import { Play } from 'lucide-react'
import { useAnimeStore } from '@/store/anime-store';

export const Player = () => {
    const { anime } = useAnimeStore(state => state);
    return (
        <div className="flex-1 h-full">
            <h2 className="flex flex-col justify-start h-12 text-lg font-semibold lg:text-3xl md:text-2xl my-2">
                {anime.title} - Episódio {anime.episode}
            </h2>
            <div className='relative'>
                <img
                    src={anime.image}
                    className="lg:h-[480px] md:h-[300px] w-full h-[180px] object-cover object-top"
                />
                <div
                    className='absolute flex items-center justify-center p-2 rounded-sm cursor-pointer top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-primary lg:w-20 md:w-16 w-9'
                >
                    <Play fill='#FFF' />
                </div>
            </div>

        </div>
    );
}
