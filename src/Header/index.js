const Header = () => {
    return (
        <header class="md:flex flex-row ">
            <div class="h-48 md:h-64 md:basis-1/3 xl:basis-2/3 md:mr-1 my-2 mx-6 bg-amber-400 border-2 border-current rounded-lg">
            </div>
            <div class="h-64 flex flex-col md:basis-2/3 xl:basis-1/3 md:my-2 md:ml-1 md:w-24 space-y-24 mx-6 p-4 bg-blue-400 border-2 border-current rounded-lg">
                <div>
                    <p class="text-3xl md:w-96">And that's a wrap! <br/> Thanks for joining Google I/O 2022.</p>
                </div>
                <p class="underline underline-offset-1">Watch the I/O 2022 recap</p>
            </div>
        </header>
    )
}

export default Header