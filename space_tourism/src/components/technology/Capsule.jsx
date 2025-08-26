import capsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg'
import TechnologyNav from './TechnologyNav'

export default function Capsule() {
    return (
        <>
            <TechnologyNav selectedTechnology="capsule" />
            <div className={`selected-technology capsule`}>
                <div className="page-content">
                    <h3>The terminology...</h3>
                    <h1>Space capsule</h1>
                    <p>
                        A space capsule is an{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            often-crewed
                        </span>{' '}
                        spacecraft that uses a{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>blunt-body</span>{' '}
                        reentry capsule to reenter the Earth's atmosphere
                        without wings. Our capsule is where you'll spend your
                        time during the flight. It includes a space gym, cinema,
                        and plenty of other activities to keep you entertained.
                    </p>
                </div>
                <div className="page-img">
                    <img src={capsuleImage} alt="capsule" />
                </div>
            </div>
        </>
    )
}
