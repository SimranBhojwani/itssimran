import logo from '../../assets/header/logo.png';
import email from '../../assets/header/email.png';
import github from '../../assets/header/github.jpg';
import {React,useState} from 'react'
import {Section, Navbar} from 'react-bulma-components'


const Header = () => {
    const [isActive, setisActive] = useState(false)
    return (
        <div>
            <Section className="py-5">
            <Navbar className="is-white has-shadow px-10">
                <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#/">
                    <img
                    src={logo}
                    alt="itssimran.com logo"
                    style={{maxHeight: '40px'}}
                    />
                    <p className="is-size-3">itssimran</p>
                </Navbar.Item>
                <Navbar.Burger className={`${isActive ? 'is-active' : ''}`} onClick={()=>setisActive(!isActive)}/>
                </Navbar.Brand>
            
                <Navbar.Menu id="nav-links" className={`${isActive? 'is-active' : ''}`}>

                <div className="navbar-end is-size-5">
                    <a href="#/" className="navbar-item " >Home</a>
                    <a href="#/about" className="navbar-item">About</a>
                    <a href="https://dribbble.com/SimranBhojwani" className="navbar-item">Dribbble</a>
                    <a href="mailto: 2015simran.bhojwani@ves.ac.in" target="_blank" rel="noreferrer" className="navbar-item"><img src={email} style={{maxHeight: '40px'}} alt="img link to email"/></a>
                    <a href="https://github.com/SimranBhojwani" target="_blank" rel="noreferrer" className="navbar-item"><img src={github} style={{maxHeight: '30px'}} alt="img link to github"/></a>
                </div>
                </Navbar.Menu>
            </Navbar>
        </Section>
        </div>
    )
}

export default Header
