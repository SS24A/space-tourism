import './App.css'
import './css/header.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import CrewPage from './pages/CrewPage'
import TechnologyPage from './pages/TechnologyPage'

import Moon from './components/destination/Moon'
import Mars from './components/destination/Mars'
import Europa from './components/destination/Europa'
import Titan from './components/destination/Titan'

import Commander from './components/crew/Commander'
import Specialist from './components/crew/Specialist'
import Pilot from './components/crew/Pilot'
import Engineer from './components/crew/Engineer'

import Vehicle from './components/technology/Vehicle'
import Spaceport from './components/technology/Spaceport'
import Capsule from './components/technology/Capsule'

function Root() {
    return (
        <>
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { path: '/', element: <HomePage /> },
            {
                path: '/destination',
                element: <DestinationPage />,
                children: [
                    { path: '', element: <Moon /> },
                    { path: 'moon', element: <Moon /> },
                    { path: 'mars', element: <Mars /> },
                    { path: 'europa', element: <Europa /> },
                    { path: 'titan', element: <Titan /> },
                ],
            },
            {
                path: '/crew',
                element: <CrewPage />,
                children: [
                    { path: '', element: <Commander /> },
                    { path: 'commander', element: <Commander /> },
                    { path: 'specialist', element: <Specialist /> },
                    { path: 'pilot', element: <Pilot /> },
                    { path: 'engineer', element: <Engineer /> },
                ],
            },
            {
                path: '/technology',
                element: <TechnologyPage />,
                children: [
                    { path: '', element: <Vehicle /> },
                    { path: 'vehicle', element: <Vehicle /> },
                    { path: 'spaceport', element: <Spaceport /> },
                    { path: 'capsule', element: <Capsule /> },
                ],
            },
            {
                path: '*',
                element: (
                    <div>
                        404 Not Found <a href="/">Back</a>
                    </div>
                ),
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
