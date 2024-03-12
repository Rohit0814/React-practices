import style from './Header.module.css'

const Header = () =>{
    return (
        <>
            <div className={style.navbar}>
                <div className={style.left_navbar}>
                    <span>Company Name</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>PortFolio</li>
                    <li>Services</li>
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