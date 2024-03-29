import { IoIosHome } from "react-icons/io";
import { MdArticle } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    return <>
        <header className=" text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link text-white" style={{ fontSize:'30px' }}><IoIosHome /></Link></li>
          <li><Link to="/post" className="nav-link text-white" style={{ fontSize:'30px' }}><MdArticle /></Link></li>
        </ul>
      </div>
    </div>
  </header>
    </>
}

export default Header;