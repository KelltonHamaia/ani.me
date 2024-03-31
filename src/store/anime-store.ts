import { AnimePlaying } from '@/types/Anime';
import {create} from 'zustand';

type States = {
    anime: AnimePlaying
}

type Actions = {
    updateAnime: ( anime: AnimePlaying ) => void
}

const initialState:States = {
    anime: {
        id: 0,
        title: "",
        episode: "",
        image: ""
    }
}

export const useAnimeStore = create<States & Actions>()(set => ({
    ...initialState,
    updateAnime: (anime) => set(() => ({ anime: anime })) 
}));