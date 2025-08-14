import Header from '../components/Header'
import '../css/home.css'

export default function HomePage() {
    return (
        <div className="home-page">
            <Header selectedPage={'home'} />

            <div className="home-wrapper">
                <div className="home-intro">
                    <h3>So, you want to travel to</h3>
                    <h1>Space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="home-explore">
                    <span>Explore</span>
                </div>
            </div>
        </div>
    )
}
