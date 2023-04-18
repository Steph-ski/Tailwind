const Keynotes = ({title, image}) => {
    return (
        <div class="p-6 pt-10 hover:border-2 border-current rounded-lg ">
            <img class="w-full" src={image} alt='keynote image'/>
            <p class="py-6 text-xl">{title}</p>
            <p class="text-sm">Keynote</p>
        </div>
    )
}

export default Keynotes