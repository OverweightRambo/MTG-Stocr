import './header.scss'
import STOCRIcon from '../../assets/STOCRIcon.svg'
import { useNavigate } from 'react-router-dom';

interface IHeaderProps {
    children: JSX.Element
}

const Header = (props: IHeaderProps) => {
    const navigate = useNavigate()

    const navigator = (path: string) => {
        console.log("the onclick is being called")
        navigate(path)
    }


    return (
        <>
        <div className='headerWrapper'>
            <div className='headerIcon' onClick={() => {navigator('/')}}>
                <img src={STOCRIcon} alt="STOCR Icon"/>
            </div>
            <div className='header'>
                <div className='leftSide'>
                    <span className='massEntry' onClick={() => {navigator('/cardInput')}}>CARD INPUT</span>
                </div>
                <div className='rightSide' onClick={() => {navigator('/user')}}>
                    USER
                </div>
            </div>
        </div>

        <div className='propsWrapper'>
            {props.children}
        </div>
        </>

    )
}

export default Header