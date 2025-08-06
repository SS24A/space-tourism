import specialistImage from '../../assets/crew/image-mark-shuttleworth.webp'

export default function Specialist() {
    return (
        <div>
            <div>
                <h3>Mission Specialist</h3>
                <h1>Mark Shuttleworth</h1>
                <p>
                    Mark Richard Shuttleworth is the founder and CEO of
                    Canonical, the company behind the Linux-based Ubuntu
                    operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.
                </p>
            </div>
            <div>
                <img src={specialistImage} alt="specialist" />
            </div>
        </div>
    )
}
