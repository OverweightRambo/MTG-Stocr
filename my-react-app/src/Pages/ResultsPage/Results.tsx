//import CardResults from "../../../Components/CardResultDisplay/CardResults"
import { useEffect, useState } from "react"
import './Results.scss'
import { useLocation } from "react-router-dom"
import RemoveTrashIcon from '../../assets/RemoveTrash.svg'
import PlusIcon from '../../assets/PlusSymbol.svg'
import MinusIcon from '../../assets/MinusSymbol.svg'
import CartSubTotal from "../../Components/CartSubTotal/CartSubTotal"
// interface ICardsFromStore {
//     cardID: number, cardName: string, cardDescription: string, cardImage: any, version: string,
//     cardValue: number
// }
 
// interface IStoreInformation {
//     storeName:string, storeID: number, cardsFromStore: Array<ICardsFromStore>
// }


export interface ICardsFromStore {
    img_url: string, name: string, price: number, stock: number, store: string, condition: string, setName: string, quantity: number
}


const Results = () => {
    // const [storeCard, setStoreCard] = useState<Array<IStoreInformation>>([])
    const [cardList, setCardList] = useState<Array<ICardsFromStore>>([])
    const location = useLocation()

    useEffect(() => {
        setCardList(location.state)
    },[])

    const removeCard = (indexToRemove: number) => {
        setCardList(cardList => cardList.filter((_, index) => index !== indexToRemove))
    }

    const increaseQuantity = (index: number) => {
        setCardList(prevList => {
            const updatedList = [...prevList]; // shallow copy of the array
            updatedList[index] = {
              ...updatedList[index], // copy the object
              quantity: updatedList[index].quantity + 1
            };
            return updatedList;
          });
    }   


    const decreaseQuantity = (index: number) => {
        index === 1 ? removeCard(index)
        :
        setCardList(prevList => {
            const updatedList = [...prevList]; // shallow copy of the array
            updatedList[index] = {
              ...updatedList[index], // copy the object
              quantity: updatedList[index].quantity - 1
            };
            return updatedList;
          });
    }   
        
    return (
        <>
        <div className="cartDetails">Shopping Cart 
                <div className="cartDetailsQuantity">
                    Items in cart: {cardList.length} 
                </div>
        </div>
        <div className="fullResults">
            <div className="fullCardDetails">
                    {cardList.map((cards: ICardsFromStore, index: number) => {
                        return (
                        <>
                            <div className='cardWrapper' key={index}>
                                <div className='leftSide'>
                                <img src={cards.img_url} alt={`Image of` + cards.name} className='cardImage'/>
                                    <div className="cardInformation">
                                        <div className="cardNameSetCon">
                                            <div className='cardName'>{cards.name}</div>
                                            <div className="cardSet">{cards.setName}</div>
                                            <div className="cardCondition">{cards.condition} <span className="cardStock">{cards.stock} Available</span></div>
                                        </div>

                                        <div className="cardQuantityWrapper">
                                            <img src={PlusIcon} alt="incrementQuantity" className="plusIcon" onClick={() => increaseQuantity(index = index)}/> 
                                            <span className="amountOfCard">{cards.quantity}</span>
                                            <img src={MinusIcon} alt="decreaseQuantity" className="minusIcon" onClick={() => decreaseQuantity(index = index)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div className='cardAvailabilityDetails'>{cards.price} each</div>
                                    <div className="alterCardAmount"> 
                                        <div className="removeCard" onClick={() => removeCard(index)}>
                                            <img className = 'trashIcon' src={RemoveTrashIcon}/> 
                                            <div className="removeText">Remove</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    })}
            </div>
            <CartSubTotal cards={cardList}/>
        </div>
        </>
    )
}

export default Results