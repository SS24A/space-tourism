import europaImage from '../../assets/destination/image-europa.webp'

export default function Europa() {
    return (
        <>
            <div className="page-img">
                <img src={europaImage} alt="europa" />
            </div>
            <div className="page-content">
                <h1>Europa</h1>
                <p className="destination-info">
                    The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.
                </p>
                <div className="destination-details">
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
