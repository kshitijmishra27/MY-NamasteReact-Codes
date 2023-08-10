import Logo from "./Logo";

const Header = () => {

    return (

    <div className="header">
        <Logo/>
        <div className = "nav_items">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>

);
    };

    export default Header;