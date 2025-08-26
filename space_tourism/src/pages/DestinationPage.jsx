import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import '../css/destination.css'

export default function DestinationPage() {
    return (
        <div className="destination-page">
            <Header selectedPage={'destination'} />

            <section className="destination-wrapper">
                <div className="page-title">
                    <span>01</span>
                    <span>Pick your destination</span>
                </div>
                <div className="destination-wrapper-inner">
                    <Outlet />
                </div>
            </section>
        </div>
    )
}
