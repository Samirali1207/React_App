import Navbar from '../components/Navbar'
import UpperNav from '../components/UpperNav'
import Corousal from '../components/Curousel'
import Cards from '../components/Cards'
import Cadsheader from '../components/Cadsheader'
import Cards2 from '../components/Cards2'
import Cardsheader2 from "../components/Cadsheader2"
import MarketTicker from '../components/MarketTicker'
import AnimatedCard from '../components/AnimatedCard'
import Footer from '../components/Footer'
import Parallex from '../components/Parallex'
import HomeCards from '../components/HomeCards'

const Home = () => {
    return (
        <>
            <UpperNav />
            <Navbar />
            <Corousal />
            <MarketTicker />
            <HomeCards/>  
            <Cadsheader />
            <Cards />
            <Cardsheader2 />
            <Cards2 />
            <AnimatedCard />
            <Parallex />
            <Footer />
        </>
    )
}

export default Home