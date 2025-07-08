import { useEffect, useState } from 'react'
import './CardInput.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ICardObjects {
    name: string
    quantity: number
    foil: boolean
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


      const parseLine = (line: string) => {
        const words = line.trim().split(/\s+/);
        let quantity = 1;
        let foil = false;
        const nameParts: string[] = [];
      
        for (const word of words) {
          const lower = word.toLowerCase();
      
          if (lower === 'foil') {
            foil = true;
          } else if (!isNaN(Number(word))) {
            quantity = parseInt(word, 10);
          } else {
            nameParts.push(word);
          }
        }
      
        return {
          name: nameParts.join(' '),
          quantity,
          foil
        };
      };
      
      const splitCardValues = (cardList: string) => {
        const splitLines = cardList.split('\n');
        const filteredLines = splitLines
          .map(line => line.trim())
          .filter(line => line !== '');
      
        const parsed = filteredLines.map(parseLine); // each line becomes ParsedCard
        
        // Now parsed is already an array of ParsedCard, no need to map again
        setArrayOfCardObjects(parsed);
      };

    useEffect (() => {
        postData()
    }, [arrayOfCardObjects])

    useEffect (() => {
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
            <textarea placeholder= 'Input your cards here!&#10;Urza Saga 3&#10;Mountain 4 FOIL&#10;The One Ring 2 FOIL'
            className='cardInputStyle' name="text1"  value={cardList} onChange={handleChange} id="">
            </textarea>
            <button onClick={() => splitCardValues(cardList)}>submit list</button>
        </div>
        </>
    )
}
 
export default CardInput