import './homepage.scss'
import { useNavigate } from 'react-router-dom'
import CardInput from '../../Components/CardInput/CardInput'

const Homepage = () => {
    const navigate = useNavigate()
    const navigator = (path: string) => {
        navigate(path)
    }
    return(
        <>
        <div className='homepageWrapper'>
            <div className='websiteDescription'>
                Welcome To STOCR!
                <div className='websiteDescriptionSubText'>
                    The Easiest Way To Shop Local and Find Great Prices!
                </div>
            </div>
            <div className='getStartedButton' onClick={() => navigator('/cardInput')}>
                    Get Started!
            </div>
            <div>
                <CardInput/>
            </div>
        </div>
        </>
    )
}


export default Homepage