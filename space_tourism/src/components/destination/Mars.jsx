import marsImage from '../../assets/destination/image-mars.webp'

export default function Mars() {
    return (
        <>
            <div className="page-img">
                <img src={marsImage} alt="mars" />
            </div>
            <div className="page-content">
                <h1>Mars</h1>
                <p className="destination-info">
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                </p>
                <div className="destination-details">
                    <span>
                        <p>Avg. distance</p>
                        <p>225 mil. km</p>
                    </span>
                    <span>
                        <p>Est. travel time</p>
                        <p>9 months</p>
                    </span>
                </div>
            </div>
        </>
    )
}
