import react from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import { IMG_CON_URL, restaurantList } from "./contants";
import Footer from "./src/components/Footer";
import RestaurantCard from "./src/components/RestaurantCard";
import Body from "./src/components/Body";


const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);