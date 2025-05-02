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
            Welcome To 
                <div className='veridexHighlight'>&nbsp;Veridex</div>
            </div>
            <div className='websiteDescriptionSubText gradientText'>
                The Easiest Way To Shop Locally and Find Great Prices!
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