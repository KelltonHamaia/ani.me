<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card';
=======
import { Card, CardContent, CardFooter } from '@/components/ui/card';
>>>>>>> 8e5cadbd2cfd9edffd6e07f51f9b005d48a83532

type Props = {
    image: string,
    title: string,
    episode: string,
}

export const AnimeCard = ({ title, episode, image }: Props) => {
    return (
        <Card className='border-none overflow-hidden'>
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
    )
}
