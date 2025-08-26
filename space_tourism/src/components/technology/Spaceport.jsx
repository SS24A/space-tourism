import spaceportImage from '../../assets/technology/image-spaceport-portrait.jpg'
import TechnologyNav from './TechnologyNav'

export default function Spaceport() {
    return (
        <>
            <TechnologyNav selectedTechnology="spaceport" />
            <div className={`selected-technology spaceport`}>
                <div className="page-content">
                    <h3>The terminology...</h3>
                    <h1>Spaceport</h1>
                    <p>
                        A spaceport or cosmodrome is a site for launching (or
                        receiving) spacecraft, by analogy to the seaport for
                        ships or airport for aircraft. Based in the famous Cape
                        Canaveral, our spaceport is ideally situated to take
                        advantage of the Earth’s rotation for launch.
                    </p>
                </div>
                <div className="page-img">
                    <img src={spaceportImage} alt="spaceport" />
                </div>
            </div>
        </>
    )
}
