import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {
    image: string,
    user: string,
    comment: string
}

export const CommentItem = ({ image, user, comment }: Props) => {

    return (
        <div className='flex items-center w-full gap-4 py-2 border-b border-border'>
            <Avatar>
                <AvatarImage src={image} className="object-cover object-bottom" />
                <AvatarFallback>{user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 gap-1">
                <h3 className="text-sm font-semibold md:text-base lg:text-lg">{user}</h3>
                <p className="text-sm lg:text-base text-muted-foreground">
                    {comment}
                </p>
            </div>
        </div>
    );

}
