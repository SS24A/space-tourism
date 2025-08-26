import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import '../css/technology.css'

export default function TechnologyPage() {
    return (
        <div className="technology-page">
            <Header selectedPage={'technology'} />

            <section className="technology-wrapper">
                <div className="page-title">
                    <span>03</span>
                    <span>Space launch 101</span>
                </div>
                <div className="technology-wrapper-inner">
                    <Outlet />
                </div>
            </section>
        </div>
    )
}
