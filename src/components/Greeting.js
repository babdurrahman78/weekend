import './Greeting.css'
import logo from '../assets/bitmap.png';

const Greeting = () => {
    return ( 
        <div className='greeting'>
            <img className='logo' src={logo} alt="logo"/>
            <p className='morning'>Good Morning</p>
            <p className='fellas'>Fellas</p>
        </div>
     );
}
 
export default Greeting;
