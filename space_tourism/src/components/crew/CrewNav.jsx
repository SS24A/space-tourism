import { Link } from 'react-router-dom'

export default function CrewNav({ selectedCrewMember }) {
    return (
        <ul className="crew-page-nav">
            <li
                className={
                    selectedCrewMember === 'commander'
                        ? 'member-active'
                        : 'member-idle'
                }
            >
                <Link to="/crew/commander"></Link>
            </li>
            <li
                className={
                    selectedCrewMember === 'specialist'
                        ? 'member-active'
                        : 'member-idle'
                }
            >
                <Link to="/crew/specialist"></Link>
            </li>
            <li
                className={
                    selectedCrewMember === 'pilot'
                        ? 'member-active'
                        : 'member-idle'
                }
            >
                <Link to="/crew/pilot"></Link>
            </li>
            <li
                className={
                    selectedCrewMember === 'engineer'
                        ? 'member-active'
                        : 'member-idle'
                }
            >
                <Link to="/crew/engineer"></Link>
            </li>
        </ul>
    )
}
