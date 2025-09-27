import { SearchBar } from "./SearchBar";
import logo from '../assets/logo.png';
import './style.css';

export function Header() {
    return <div className='header'>
        <a href="index.html">
            <img src={logo} alt="logo"/>
        </a>
        <SearchBar />
    </div>
}