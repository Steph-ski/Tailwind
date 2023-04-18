import Keynotes from "../Keynotes"
import keynoteImg1 from "../images/keynoteImg1.png"
import keynoteImg2 from "../images/keynoteImg2.png"

const KeynotesContainer = () => {
    return (
        <div class="p-6 pt-12 flex-none">
            <p class="text-3xl font-semibold">Watch the keynotes</p>
            <div class="grid grid-cols-1 md:grid-cols-2">
                <Keynotes title="Google I/O keynote" image={keynoteImg1}/>
                <Keynotes title="Developer keynote" image={keynoteImg2}/>
            </div>
        </div>
    )
}

export default KeynotesContainer