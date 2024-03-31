import { Player } from "@/components/anime-page/player";
import { MostWatchedAnimes } from "./most-watched";

export const VideoArea = () => {

    return (
        <div className='flex justify-between'>
            <Player />
            <MostWatchedAnimes />
        </div>
    );

}
