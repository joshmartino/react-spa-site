import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className='NavigationBar'>
            <NavLink to="/" className="btn">Home</NavLink>
            <NavLink to="/about" className="btn">About</NavLink>
            <NavLink to="/products" className="btn">Products</NavLink>
            <NavLink to="/login" className="btn">Login</NavLink>
        </nav>
    );
};
export default NavigationBar;