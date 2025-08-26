import { Link } from 'react-router-dom'

export default function TechnologyNav({ selectedTechnology }) {
    return (
        <ul className="technology-page-nav">
            <li
                className={
                    selectedTechnology === 'vehicle'
                        ? 'technology-active'
                        : 'technology-idle'
                }
            >
                <Link to="/technology/vehicle">1</Link>
            </li>
            <li
                className={
                    selectedTechnology === 'spaceport'
                        ? 'technology-active'
                        : 'technology-idle'
                }
            >
                <Link to="/technology/spaceport">2</Link>
            </li>
            <li
                className={
                    selectedTechnology === 'capsule'
                        ? 'technology-active'
                        : 'technology-idle'
                }
            >
                <Link to="/technology/capsule">3</Link>
            </li>
        </ul>
    )
}
