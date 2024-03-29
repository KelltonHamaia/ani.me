type Props = {
    id: string,
    name: string,
    episode: number
}

const Page = ({ id, name, episode }: Props) => {

    return (
        <div className='w-full h-screen'>
            {id}
            {name}
            {episode}
        </div>
    );

}

export default Page;