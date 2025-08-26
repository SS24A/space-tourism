import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import './App.css'
import './css/header.css'

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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            { path: '/', element: <HomePage /> },
            {
                path: '/destination',
                element: <DestinationPage />,
                children: [
                    { index: true, element: <Moon /> },
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
                    { index: true, element: <Commander /> },
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
                    { index: true, element: <Vehicle /> },
                    { path: 'vehicle', element: <Vehicle /> },
                    { path: 'spaceport', element: <Spaceport /> },
                    { path: 'capsule', element: <Capsule /> },
                ],
            },
            {
                path: '*',
                element: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            flexDirection: 'column',
                        }}
                    >
                        <h1>404 Not Found</h1>
                        <a href="/" style={{ textDecoration: 'none' }}>
                            Go Back
                        </a>
                    </div>
                ),
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
