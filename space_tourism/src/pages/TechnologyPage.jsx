import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/Header'
import '../css/technology.css'

export default function TechnologyPage() {
    const [selectedTechnology, setSelectedTechnology] = useState('vehicle')

    return (
        <div className="technology-page">
            <Header selectedPage={'technology'} />

            <section className="technology-wrapper">
                <div className="page-title">
                    <span>03</span>
                    <span>Space launch 101</span>
                </div>
                <div className="technology-wrapper-inner">
                    <ul className="technology-page-nav">
                        <li
                            onClick={() => setSelectedTechnology('vehicle')}
                            className={
                                selectedTechnology === 'vehicle'
                                    ? 'technology-active'
                                    : 'technology-idle'
                            }
                        >
                            <Link to="/technology/vehicle">1</Link>
                        </li>
                        <li
                            onClick={() => setSelectedTechnology('spaceport')}
                            className={
                                selectedTechnology === 'spaceport'
                                    ? 'technology-active'
                                    : 'technology-idle'
                            }
                        >
                            <Link to="/technology/spaceport">2</Link>
                        </li>
                        <li
                            onClick={() => setSelectedTechnology('capsule')}
                            className={
                                selectedTechnology === 'capsule'
                                    ? 'technology-active'
                                    : 'technology-idle'
                            }
                        >
                            <Link to="/technology/capsule">3</Link>
                        </li>
                    </ul>
                    <div
                        className={`selected-technology ${selectedTechnology}`}
                    >
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    )
}
