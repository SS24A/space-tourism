import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

import Header from '../components/Header'
import '../css/crew.css'

export default function CrewPage() {
    const [selectedCrewMember, setSelectedCrewMember] = useState('commander')

    return (
        <div className="crew-page">
            <Header selectedPage={'crew'} />

            <section className={`crew-wrapper ${selectedCrewMember}`}>
                <div className="page-title">
                    <span>02</span>
                    <span>Meet your crew</span>
                </div>
                <div className="crew-wrapper-inner">
                    <div className="selected-crew-member">
                        <Outlet />
                    </div>
                    <ul className="crew-page-nav">
                        <li
                            onClick={() => setSelectedCrewMember('commander')}
                            className={
                                selectedCrewMember === 'commander'
                                    ? 'member-active'
                                    : 'member-idle'
                            }
                        >
                            <Link to="/crew/commander"></Link>
                        </li>
                        <li
                            onClick={() => setSelectedCrewMember('specialist')}
                            className={
                                selectedCrewMember === 'specialist'
                                    ? 'member-active'
                                    : 'member-idle'
                            }
                        >
                            <Link to="/crew/specialist"></Link>
                        </li>
                        <li
                            onClick={() => setSelectedCrewMember('pilot')}
                            className={
                                selectedCrewMember === 'pilot'
                                    ? 'member-active'
                                    : 'member-idle'
                            }
                        >
                            <Link to="/crew/pilot"></Link>
                        </li>
                        <li
                            onClick={() => setSelectedCrewMember('engineer')}
                            className={
                                selectedCrewMember === 'engineer'
                                    ? 'member-active'
                                    : 'member-idle'
                            }
                        >
                            <Link to="/crew/engineer"></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
