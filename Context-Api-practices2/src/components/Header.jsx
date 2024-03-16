import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = () =>{
    return (
        <>
            <div className={style.navbar}>
                <div className={style.left_navbar}>
                    <span>Company Name</span>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/portfolio'><li>PortFolio</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                </ul>
                </div>
                <div className={style.right_navbar}>
                    <input type='text' placeholder='Search'></input>
                    <span></span>                    
                </div>
            </div>
        </>
    )
}

export default Header