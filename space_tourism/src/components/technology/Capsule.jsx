import capsuleImage from '../../assets/technology/image-space-capsule-portrait.jpg'

export default function Capsule() {
    return (
        <div>
            <div>
                <h3>The terminology...</h3>
                <h1>Space capsule</h1>
                <p>
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                </p>
            </div>
            <div>
                <img src={capsuleImage} alt="capsule" />
            </div>
        </div>
    )
}
