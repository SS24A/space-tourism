import marsImage from '../../assets/destination/image-mars.webp'

export default function Mars() {
    return (
        <>
            <div>
                <img src={marsImage} alt="mars" />
            </div>
            <div>
                <h1>Mars</h1>
                <p>
                    Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in our
                    solar system. It’s two and a half times the size of Everest!
                </p>
                <div>
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
