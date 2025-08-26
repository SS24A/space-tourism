import vehicleImage from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import TechnologyNav from './TechnologyNav'

export default function Vehicle() {
    return (
        <>
            <TechnologyNav selectedTechnology="vehicle" />
            <div className={`selected-technology vehicle`}>
                <div className="page-content">
                    <h3>The terminology...</h3>
                    <h1>Launch vehicle</h1>
                    <p>
                        A launch vehicle or carrier rocket is a{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            rocket-propelled
                        </span>{' '}
                        vehicle used to carry a payload from Earth's surface to
                        space, usually to Earth orbit or beyond. Our{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>WEB-X</span>{' '}
                        carrier rocket is the most powerful in operation.
                        Standing 150 metres tall, it's quite an{' '}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            awe-inspiring
                        </span>{' '}
                        sight on the launch pad!
                    </p>
                </div>
                <div className="page-img">
                    <img src={vehicleImage} alt="vehicle" />
                </div>
            </div>
        </>
    )
}
