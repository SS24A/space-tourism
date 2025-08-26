import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import '../css/crew.css'

export default function CrewPage() {
    return (
        <div className="crew-page">
            <Header selectedPage={'crew'} />

            <section className={`crew-wrapper`}>
                <div className="page-title">
                    <span>02</span>
                    <span>Meet your crew</span>
                </div>
                <div className="crew-wrapper-inner">
                    <Outlet />
                </div>
            </section>
        </div>
    )
}
