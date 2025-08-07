import europaImage from '../../assets/destination/image-europa.webp'

export default function Europa() {
    return (
        <>
            <div>
                <img src={europaImage} alt="europa" />
            </div>
            <div>
                <h1>Europa</h1>
                <p>
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                </p>
                <div>
                    <span>
                        <p>Avg. distance</p>
                        <p>628 mil. km</p>
                    </span>
                    <span>
                        <p>Est. travel time</p>
                        <p>3 years</p>
                    </span>
                </div>
            </div>
        </>
    )
}
