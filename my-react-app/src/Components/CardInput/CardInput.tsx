import { useEffect, useState, useContext, Suspense } from 'react'
import './CardInput.scss'
import axios from 'axios';
import { CardStateContext, useCardContextState } from '../../Context/cardContext';
import { useNavigate } from 'react-router-dom';

interface ICardObjects {
    name: string
}

const CardInput = () => {
    const [cardList, setCardList] = useState<string>('')
    //const [splitRows, setSplitRows] = useState<Array<any>>()
    const [errorState, setErrorState] = useState<Boolean>(false)
    const [cardInputMethod, setCardInputMethod] = useState<string>('Text Input')
    const [arrayOfCardObjects, setArrayOfCardObjects] = useState<Array<ICardObjects>>([])
    const [apiResponse, setApiResponse] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)


    const navigate = useNavigate()

    const postData = async () => {
        console.log('this is the value of arrayofCardObjects', arrayOfCardObjects)
        try {
          const response = await axios.post('https://magicdeckfinder.onrender.com/mockScrape', arrayOfCardObjects);
          console.log("this is the value of response.data", response.data, response)
          setApiResponse(response.data)
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };

    const handleChange = (e: any) => {
        let newValue = e.target.value
        setCardList(newValue)
      };

    
    const splitCardValues = (cardList: string) => {
        const splitCards = (cardList.split('\n'))
        const mappedArray = splitCards!.map((card: string) => ({ name: card}))
        setArrayOfCardObjects(mappedArray)
    }

    useEffect (() => {
        postData()
    }, [arrayOfCardObjects])

    useEffect (() => {
        console.log("this is the value of apiResponse in useEffect", apiResponse)
        if(apiResponse != null){
            navigate('/results', {state: apiResponse})
        }
    }, [apiResponse])
   
    const handleInputMethod = (preferredMethod: string) => {
        setCardInputMethod(preferredMethod)
    }
 
    return(
        <>
        <div className='cardInputWrapper'>
            <div className='cardInputMethodWrapper'>
                <div className={`textEntry  ${cardInputMethod && 'Text Input' ? 'inputFocus': null}`} 
                onClick={() => handleInputMethod('Text Input')}>Text Entry</div>
                <div className={`CSV  ${cardInputMethod && 'CSV' ? 'inputFocus': null}`}
                onClick={() => handleInputMethod('CSV')}>CSV</div>
            </div>
            <textarea placeholder= 'Input your cards here!&#10;3 Urza Saga&#10;4 Mountain&#10;1 The One Ring'
            className='cardInputStyle' name="text1"  value={cardList} onChange={handleChange} id="">
            </textarea>
            <button onClick={() => splitCardValues(cardList)}>submit list</button>
        </div>
        </>
    )
}
 
export default CardInput