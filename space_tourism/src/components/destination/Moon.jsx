import moonImage from '../../assets/destination/image-moon.webp'
import DestinationNav from './DestinationNav'

export default function Moon() {
    return (
        <>
            <DestinationNav selectedDestination="moon" />
            <div className="selected-destination">
                <div className="page-img">
                    <img src={moonImage} alt="moon" />
                </div>
                <div className="page-content">
                    <h1>Moon</h1>
                    <p className="destination-info">
                        See our planet as you’ve never seen it before. A perfect
                        relaxing trip away to help regain perspective and come
                        back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="destination-details">
                        <span>
                            <p>Avg. distance</p>
                            <p>384,400 km</p>
                        </span>
                        <span>
                            <p>Est. travel time</p>
                            <p>3 days</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
