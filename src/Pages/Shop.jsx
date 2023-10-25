import './CSS/Shop.css';
import Hero from "../Components/Hero/Hero.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLatter from "../Components/NewsLatter/NewsLatter.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const Shop = () => {
    return (
        <div className='shop'>
            <Hero />
            <Popular/>
            <Offers />
            <NewCollections />
            <NewsLatter />

        </div>
    )
}

export default Shop