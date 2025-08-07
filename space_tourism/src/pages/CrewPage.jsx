import { Outlet, Link } from 'react-router-dom'
import Header from '../components/Header'
import '../css/crew.css'

export default function CrewPage() {
    return (
        <div className="crew-page">
            <Header />

            <section>
                <div>
                    <span>02</span>
                    <span>Meet your crew</span>
                </div>
                <Outlet />
                <ul>
                    <li>
                        <Link to="/crew/commander"></Link>
                    </li>
                    <li>
                        <Link to="/crew/specialist"></Link>
                    </li>
                    <li>
                        <Link to="/crew/pilot"></Link>
                    </li>
                    <li>
                        <Link to="/crew/engineer"></Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}
