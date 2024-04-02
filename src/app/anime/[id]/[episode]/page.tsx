"use client"
import { AnimeInfo } from "@/components/anime-page/anime-info";
import { Comments } from "@/components/anime-page/comments";
import { Related } from "@/components/anime-page/related";
import { VideoArea } from "@/components/anime-page/video";
import { Copyright } from "@/components/copyright/copyright";
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
            <Comments />
            <Related />
            <Copyright />
        </div>
    );
}

export default Page;