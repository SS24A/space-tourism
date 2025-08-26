import pilotImage from '../../assets/crew/image-victor-glover.webp'
import CrewNav from './CrewNav'

export default function Pilot() {
    return (
        <>
            <div className="selected-crew-member">
                <div className="page-content pilot-content">
                    <h3>Pilot</h3>
                    <h1>Victor Glover</h1>
                    <p>
                        Pilot on the first operational flight of the SpaceX Crew
                        Dragon to the International Space Station. Glover is a
                        commander in the U.S. Navy where he pilots an{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>F/A-18.</span> He
                        was a crew member of Expedition 64, and served as a
                        station systems flight engineer.
                    </p>
                </div>
                <div className="page-img pilot-img">
                    <img src={pilotImage} alt="pilot" />
                </div>
            </div>
            <CrewNav selectedCrewMember="pilot" />
        </>
    )
}
