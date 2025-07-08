import { useEffect, useState, useContext, Suspense } from 'react'
import './CardInput.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ICardObjects {
    name: string
}

const CardInput = () => {
    const [cardList, setCardList] = useState<string>('')
    //const [splitRows, setSplitRows] = useState<Array<any>>()
    const [errorState, setErrorState] = useState<Boolean>(false)
    const [errorMessage, setErrorMessage] = useState<Array<any>>([])
    const [errorLines, setErrorLines] = useState<Array<any>>([])
    const [arrayOfCardObjects, setArrayOfCardObjects] = useState<Array<ICardObjects>>([])
    const [apiResponse, setApiResponse] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)


    const navigate = useNavigate()

    const postData = async () => {
        try {
          const response = await axios.post('https://magicdeckfinder.onrender.com/mockScrape', arrayOfCardObjects);
          console.log("this is the value of response.data", response.data, response)  
          setApiResponse(response.data)
        } catch (error: any) {
            setErrorMessage(error.response.data.detail.errors)
            // console.log('this is the value of error', error.response.data.detail.errors)
          setErrorState(true)
          console.error('Error posting data:', error);
        }
      };

    const handleChange = (e: any) => {
        let newValue = e.target.value
        setCardList(newValue)
      };

    
    const splitCardValues = (cardList: string) => {
        const splitCards = (cardList.split('\n')) //splitting lines
        const filteredArray = splitCards.filter(name => name !== '') //filtering empty lines
        const mappedArray = filteredArray!.map((card: string) => ({ name: card})) //formatting lines into objects for api
        setArrayOfCardObjects(mappedArray) //setting state for api
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
 
    return(
        <> 
        <div className='cardInputWrapper'>
            {errorState && 
                <div className='errorStateWrapper'>
                    {errorMessage.map((message: string, index: number) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
            }
            <textarea placeholder= 'Input your cards here!&#10;Urza Saga 3&#10;Mountain 4 NM&#10;The One Ring 2 FOIL'
            className='cardInputStyle' name="text1"  value={cardList} onChange={handleChange} id="">
            </textarea>
            <button onClick={() => splitCardValues(cardList)}>submit list</button>
        </div>
        </>
    )
}
 
export default CardInput