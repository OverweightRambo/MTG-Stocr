import { useState } from 'react'
import './CardInput.scss'
 
 
 
const CardInput = () => {
    const [cardList, setCardList] = useState<string>('')
    const [splitRows, setSplitRows] = useState<Array<any>>()
    const [errorState, setErrorState] = useState<Boolean>(false)
 
    const handleChange = (e: any) => {
        let newValue = e.target.value
        setCardList(newValue)
      };
 
    const splitCardValues = (cardList: string) => {
        setSplitRows(cardList.split('\n')) //value to split card on
        console.log('this is the value of splitRows', splitRows)
    }
   
 
    return(
        <>
        <div className='cardInputWrapper'>
            <textarea placeholder= 'Input your cards here!&#10;3 Urza Saga&#10;4 Mountain&#10;1 The One Ring'
            className='cardInputStyle' name="text1"  value={cardList} onChange={handleChange} id=""></textarea>
            <button onClick={() => splitCardValues(cardList)}>submit list</button>
        </div>
        </>
    )
}
 
export default CardInput