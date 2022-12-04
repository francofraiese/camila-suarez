import './NavBar.css'

const NavBar = () => {
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 25) {
          document.querySelector("#NavBar")?.classList.add("scroll")
        } else {
          document.querySelector("#NavBar")?.classList.remove("scroll")
        }
      }
    return (
        <div className="NavBar_Container" id='NavBar'>
                <button className='NavBar_Button'>Sobre mi</button>
                <button className='NavBar_Button'>Formación</button>
                <button className='NavBar_Button'>Experiencia</button>
                <button className='NavBar_Button'>Contacto</button>
        </div>
    )
}

export default NavBar