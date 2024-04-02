import { Card } from "@/components/ui/card";

type Props = {
    title: string,
    image: string
}
export const RelatedCard = ({ title, image }: Props) => {
    return (
        <Card className="flex flex-col gap-2 border-none">
            <img
                src={image}
                alt={title}
                className="h-48 md:h-64 object-cover object-top w-full rounded-lg"
            />
            <p className="text-sm lg:text-lg text-center">{title}</p>
        </Card>
    );

}
