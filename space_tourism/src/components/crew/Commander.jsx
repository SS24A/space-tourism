import commanderImage from '../../assets/crew/image-douglas-hurley.webp'
import CrewNav from './CrewNav'

export default function Commander() {
    return (
        <>
            <div className="selected-crew-member">
                <div className="page-content commander-content">
                    <h3>Commander</h3>
                    <h1>Douglas Hurley</h1>
                    <p>
                        Douglas Gerald Hurley is an American engineer, former
                        Marine Corps pilot and former NASA astronaut. He
                        launched into space for the third time as commander of
                        Crew Dragon{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>Demo-2.</span>
                    </p>
                </div>
                <div className="page-img commander-img">
                    <img src={commanderImage} alt="commander" />
                </div>
            </div>
            <CrewNav selectedCrewMember="commander" />
        </>
    )
}
