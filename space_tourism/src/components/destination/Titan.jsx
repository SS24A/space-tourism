import titanImage from '../../assets/destination/image-titan.webp'

export default function Titan() {
    return (
        <div>
            <div>
                <img src={titanImage} alt="titan" />
            </div>
            <div>
                <h1>Titan</h1>
                <p>
                    The only moon known to have a dense atmosphere other than
                    Earth, Titan is a home away from home (just a few hundred
                    degrees colder!). As a bonus, you get striking views of the
                    Rings of Saturn.
                </p>
                <div>
                    <span>
                        <p>Avg. distance</p>
                        <p>1.6 bil. km</p>
                    </span>
                    <span>
                        <p>Est. travel time</p>
                        <p>7 years</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
