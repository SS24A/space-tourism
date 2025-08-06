import engineerImage from '../../assets/crew/image-anousheh-ansari.webp'

export default function Engineer() {
    return (
        <div>
            <div>
                <h3>Flight Engineer</h3>
                <h1>Anousheh Ansari</h1>
                <p>
                    Anousheh Ansari is an Iranian American engineer and
                    co-founder of Prodea Systems. Ansari was the fourth
                    self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space.
                </p>
            </div>
            <div>
                <img src={engineerImage} alt="engineer" />
            </div>
        </div>
    )
}
