import './Contacto.css'
import {IoLogoWhatsapp, IoLogoLinkedin} from 'react-icons/io'
import {HiMail} from 'react-icons/hi'
import {SiLinkedin} from 'react-icons/si'

const Contacto = () => {
    //Handlers
    const handleMail = () => {
        navigator.clipboard.writeText("camilarosariosuarez@gmail.com")
    }
    const handleLinkedin = () => {
        window.open("http://www.linkedin.com/in/camila-rosario-suarez")
    }

    const handleNumero = () => {
        window.open("http://wa.me/+542235302640")
    }

    return (
        <div className='Contacto_Container'>
            <div className='Contacto_Left'>
                <div className='Contacto_Title'>
                    <h2>Trabajemos</h2>
                    <h2>juntos.</h2>
                </div>
                <div className='Contacto_Links'>
                    <h2>O podés contactarme:</h2>
                    <div className='Contacto_Mail' onClick={handleMail}>
                        <HiMail/>
                        <h4>camilarosariosuarez@gmail.com</h4>
                    </div>
                    <div className='Contacto_Linkedin' onClick={handleLinkedin}>
                        <IoLogoLinkedin/>
                        <h4>Camila Rosario Suarez</h4>
                    </div>
                    <div className='Contacto_Numero' onClick={handleNumero}>
                        <IoLogoWhatsapp/>
                        <h4>+54 2235-302640</h4>
                    </div>
                </div>
            </div>
            <div className='Contacto_Right'>
                <form className='Contacto_Form'>
                    <input
                    placeholder='Nombre completo'
                    className='Contacto_Input' 
                    type='text'/>
                    <input
                    placeholder='Email'
                    className='Contacto_Input' 
                    type='email'/>
                    <input
                    placeholder='Número'
                    className='Contacto_Input' 
                    type='number'/>
                    <textarea 
                    className='Contacto_Textarea'
                    name= "description"
                    placeholder= "¿Qué querés consultarme?"
                    cols= "30"
                    maxLength= "255"
                    rows= "5"
                    required
                    autocomplete= 'off'
                    />
                    <input 
                    type='submit'
                    className='Contacto_Submit'
                    value='Enviar consulta'
                    />
                </form>
            </div>
        </div>
    )
}

export default Contacto