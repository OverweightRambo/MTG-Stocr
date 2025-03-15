import './header.scss'
import STOCRIcon from '../../assets/STOCRIcon.svg'

interface IHeaderProps {
    children: JSX.Element
}

const Header = (props: IHeaderProps) => {
    return (
        <>
        <div className='headerWrapper'>
            <div className='headerIcon'>
                <img src={STOCRIcon} alt="STOCR Icon" />
            </div>
            <div className='header'>
                <div className='leftSide'>
                    <span className='massEntry'>MASS ENTRY</span>
                    <span className='singleCard'>SINGLE CARD</span>
                </div>
                <div className='rightSide'>
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