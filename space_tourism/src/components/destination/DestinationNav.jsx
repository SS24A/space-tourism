import { Link } from 'react-router-dom'

export default function DestinationNav({ selectedDestination }) {
    return (
        <ul className="destination-page-nav">
            <li
                className={
                    selectedDestination === 'moon'
                        ? 'destination-active'
                        : 'destination-idle'
                }
            >
                <Link to="/destination/moon">Moon</Link>
            </li>
            <li
                className={
                    selectedDestination === 'mars'
                        ? 'destination-active'
                        : 'destination-idle'
                }
            >
                <Link to="/destination/mars">Mars</Link>
            </li>
            <li
                className={
                    selectedDestination === 'europa'
                        ? 'destination-active'
                        : 'destination-idle'
                }
            >
                <Link to="/destination/europa">Europa</Link>
            </li>
            <li
                className={
                    selectedDestination === 'titan'
                        ? 'destination-active'
                        : 'destination-idle'
                }
            >
                <Link to="/destination/titan">Titan</Link>
            </li>
        </ul>
    )
}
