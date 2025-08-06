import moonImage from '../../assets/destination/image-moon.webp'

export default function Moon() {
    return (
        <div>
            <div>
                <img src={moonImage} alt="moon" />
            </div>
            <div>
                <h1>Moon</h1>
                <p>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div>
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
    )
}
