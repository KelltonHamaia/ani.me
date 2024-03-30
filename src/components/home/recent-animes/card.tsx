import { Card, CardContent } from '@/components/ui/card';

type Props = {
    image: string,
    title: string,
}

export const RecentAnimeCard = ({ title, image }: Props) => {
    return (
        <Card className='border-none overflow-hidden'>
            <CardContent className='p-0 flex flex-col relative items-center overflow-hidden'>
                <img src={image} className="lg:h-64 md:h-60 h-52 object-cover w-full" />
                <div
                    className='absolute bottom-0 w-full bg-gradient-to-b from-transparent via-primary-foreground to-black py-4'
                >
                </div>
            </CardContent>
            <h3 className='lg:text-sm text-xs h-full text-center font-semibold flex flex-col items-center py-2 tracking-wider leading-3'>{title}</h3>
        </Card>
    )
}
