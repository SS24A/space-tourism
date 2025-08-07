import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import '../css/destination.css'

export default function DestinationPage() {
    return (
        <div className="destination-page">
            <Header />

            <section className="destination-wrapper">
                <div>
                    <span>01</span>
                    <span>Pick your destination</span>
                </div>
                <div className="destination-wrapper-inner">
                    <ul>
                        <li>
                            <Link to="/destination/moon">Moon</Link>
                        </li>
                        <li>
                            <Link to="/destination/mars">Mars</Link>
                        </li>
                        <li>
                            <Link to="/destination/europa">Europa</Link>
                        </li>
                        <li>
                            <Link to="/destination/titan">Titan</Link>
                        </li>
                    </ul>
                    <div className="selected-destination">
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    )
}
