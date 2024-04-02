import { Comment } from '@/types/Comment'

export type AnimePlaying = {
    id: number,
    title: string,
    episode: string,
    image: string,
    synopsis: string,
    studio: string,
    genre: string[],
    comments: Comment[]
}