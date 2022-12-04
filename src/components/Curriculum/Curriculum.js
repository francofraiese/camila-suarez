import './Curriculum.css'
import Experiencia from './Experiencia/Experiencia'
import Formacion from './Formacion/Formacion'

const Curriculum = () => {
    return (
        <div className='Curriculum_Container'>
            <h1>Currículum</h1>
            <Formacion/>
            <Experiencia/>
        </div>
    )
}

export default Curriculum
