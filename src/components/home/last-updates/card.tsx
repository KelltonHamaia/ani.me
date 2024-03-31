import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

type Props = {
    id: number,
    image: string,
    title: string,
    episode: string,
    setAnimeToWatch: () => void
}

export const AnimeCard = ({ id, title, episode, image, setAnimeToWatch }: Props) => {
    const url = `/anime/${id}/${episode}`;
    return (
        <Link href={url}>
            <Card
                className='border-none overflow-hidden'
                onClick={setAnimeToWatch}
            >
                <CardContent className='p-0 flex flex-col relative items-center overflow-hidden'>
                    <img src={image} className="lg:h-64 md:h-60 h-52 object-cover w-full" />
                    <div
                        className='absolute bottom-0 w-full text-center bg-gradient-to-b from-transparent via-primary-foreground to-black py-4 lg:text-sm text-xs font-semibold'
                    >
                        Episódio {episode}
                    </div>
                </CardContent>
                <h3 className='lg:text-sm text-xs h-full text-center font-semibold flex flex-col items-center py-2 tracking-wider leading-3'>{title}</h3>
            </Card>
        </Link>
    )
}
