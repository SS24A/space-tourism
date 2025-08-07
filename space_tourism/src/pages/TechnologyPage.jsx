import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import '../css/technology.css'

export default function TechnologyPage() {
    return (
        <div className="technology-page">
            <Header />

            <section>
                <div>
                    <span>03</span>
                    <span>Space launch 101</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/technology/vehicle">1</Link>
                        </li>
                        <li>
                            <Link to="/technology/spaceport">2</Link>
                        </li>
                        <li>
                            <Link to="/technology/capsule">3</Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}
