import './Nav.css'

const Nav = () => {
    return(
        <nav className='navbar'>
        <div className='logo'>
            <a href="#">JS.</a>
        </div>
        <div className='navbar_links'>
            <a href="#">projects</a>
            <a href="#">skills</a>
            <a href="#">contact</a>
        </div>
        </nav>
    )
}

export default Nav;