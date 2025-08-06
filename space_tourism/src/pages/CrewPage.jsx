import { Outlet, Link } from 'react-router-dom'

export default function CrewPage() {
    return (
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
    )
}
