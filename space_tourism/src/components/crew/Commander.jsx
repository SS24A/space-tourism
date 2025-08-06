import commanderImage from '../../assets/crew/image-douglas-hurley.webp'

export default function Commander() {
    return (
        <div>
            <div>
                <h3>Commander</h3>
                <h1>Douglas Hurley</h1>
                <p>
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>
            <div>
                <img src={commanderImage} alt="commander" />
            </div>
        </div>
    )
}
