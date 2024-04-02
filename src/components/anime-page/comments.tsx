import { useAnimeStore } from "@/store/anime-store";
import { CommentItem } from "./comment-item";

export const Comments = () => {
    //30 20 18
    const { anime: { comments } } = useAnimeStore(state => state)

    return (
        <section className='flex flex-col w-full lg:flex-col md:flex-row py-5'>
            <h2 className="pb-4 text-lg font-semibold md:text-xl lg:text-3xl md:flex-1">Comentários</h2>
            <div className="flex flex-col divide-y-2 md:flex-1">
                {comments.map(comment => (
                    <CommentItem
                        key={comment.user.id}
                        user={comment.user.username}
                        image={comment.user.avatar}
                        comment={comment.comment}
                    />
                ))}
            </div>
        </section>
    );
}
