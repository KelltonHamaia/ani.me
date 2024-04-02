"use client"
import { AnimeInfo } from "@/components/anime-page/anime-info";
import { VideoArea } from "@/components/anime-page/video";
import { useAnimeStore } from "@/store/anime-store";
import { redirect } from 'next/navigation'
import { useEffect } from "react";

const Page = () => {

    const { anime } = useAnimeStore(state => state);
    useEffect(() => {
        if (anime.id === 0) redirect("/")
    }, [anime]);

    return (
        <div className='w-full py-5'>
            <VideoArea />
            <AnimeInfo />
        </div>
    );
}

export default Page;