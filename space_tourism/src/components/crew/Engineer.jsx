import engineerImage from '../../assets/crew/image-anousheh-ansari.webp'
import CrewNav from './CrewNav'

export default function Engineer() {
    return (
        <>
            <div className="selected-crew-member">
                <div className="page-content engineer-content">
                    <h3>Flight Engineer</h3>
                    <h1>Anousheh Ansari</h1>
                    <p>
                        Anousheh Ansari is an Iranian American engineer and{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>co-founder</span>{' '}
                        of Prodea Systems. Ansari was the fourth{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            self-funded
                        </span>{' '}
                        space tourist, the first{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            self-funded
                        </span>{' '}
                        woman to fly to the ISS, and the first Iranian in space.
                    </p>
                </div>
                <div className="page-img engineer-img">
                    <img src={engineerImage} alt="engineer" />
                </div>
            </div>
            <CrewNav selectedCrewMember="engineer" />
        </>
    )
}
