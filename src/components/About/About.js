import './About.css'

const About = () => {
    return (
        <div className='About_Container'>
            <div className='About_Left'>
                <h1>Camila Suarez</h1>
                <h2>Técnica en Marketing</h2>
                <h2> Community manager</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
            </div>
            <div className='About_Right'>
                <img src='FotoAbout.png'/>
            </div>
        </div>
    )
}

export default About