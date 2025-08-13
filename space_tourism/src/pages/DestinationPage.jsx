import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/Header'
import '../css/destination.css'

export default function DestinationPage() {
    const [selectedDestination, setSelectedDestination] = useState('moon')

    return (
        <div className="destination-page">
            <Header />

            <section className="destination-wrapper">
                <div className="page-title">
                    <span>01</span>
                    <span>Pick your destination</span>
                </div>
                <div className="destination-wrapper-inner">
                    <ul className="destination-page-nav">
                        <li
                            onClick={() => setSelectedDestination('moon')}
                            className={
                                selectedDestination === 'moon'
                                    ? 'destination-active'
                                    : 'destination-idle'
                            }
                        >
                            <Link to="/destination/moon">Moon</Link>
                        </li>
                        <li
                            onClick={() => setSelectedDestination('mars')}
                            className={
                                selectedDestination === 'mars'
                                    ? 'destination-active'
                                    : 'destination-idle'
                            }
                        >
                            <Link to="/destination/mars">Mars</Link>
                        </li>
                        <li
                            onClick={() => setSelectedDestination('europa')}
                            className={
                                selectedDestination === 'europa'
                                    ? 'destination-active'
                                    : 'destination-idle'
                            }
                        >
                            <Link to="/destination/europa">Europa</Link>
                        </li>
                        <li
                            onClick={() => setSelectedDestination('titan')}
                            className={
                                selectedDestination === 'titan'
                                    ? 'destination-active'
                                    : 'destination-idle'
                            }
                        >
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
