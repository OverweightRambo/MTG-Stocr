import CardResults from "../../../Components/CardResultDisplay/CardResults"
import { useState } from "react"
import './Results.scss'
interface ICardsFromStore {
    cardID: number, cardName: string, cardDescription: string, cardImage: any, version: string,
    cardValue: number
}
 
interface IStoreInformation {
    storeName:string, storeID: number, cardsFromStore: Array<ICardsFromStore>
}

const Results = () => {

    const [storeCard, setStoreCard] = useState<Array<IStoreInformation>>([
        {storeName: "darksideGames", storeID: 0, cardsFromStore:[{
            cardID: 0, cardName: "the one ring", cardDescription: "the one ring description",
            cardImage: "https://i.ebayimg.com/images/g/bd4AAOSwsGlmtCIn/s-l400.jpg", version: "version1",
            cardValue: 25
        },
        {
            cardID: 1, cardName: "Cyclonic Rift", cardDescription: "Return target nonland permanent you don't control to its owner's hand. Overload 6U (You may cast this spell for its overload cost. If you do, change its text by replacing all instances of target with each.)",
            cardImage: "https://tcgplayer-cdn.tcgplayer.com/product/66473_in_1000x1000.jpg",
            version: "version1",
            cardValue: 47
        },
        {
            cardID: 2, cardName: "Relic of Sauron", cardDescription: "T: Add two mana in any combination of U, B, and/or R.3, T: Draw two cards, then discard a card.",
            cardImage: "https://tcgplayer-cdn.tcgplayer.com/product/500103_in_1000x1000.jpg",
            version: "version1",
            cardValue: 6
        },
        {
            cardID: 3, cardName: "Heartless Hidetsugu", cardDescription: "T: Heartless Hidetsugu deals damage to each player equal to half that player’s life total, rounded down.",
            cardImage: "https://tcgplayer-cdn.tcgplayer.com/product/247339_in_1000x1000.jpg", version: "Secret Lair",
            cardValue: 8
        }
        ]},
        {storeName: "power9games", storeID: 1, cardsFromStore:[{
            cardID: 0, cardName: "Uraz, Lork High Artificer", cardDescription: "When Urza, Lord High Artificer enters the battlefield, create a 0/0 colorless Construct artifact creature token with 'This creature gets +1/+1 for each artifact you control.' Tap an untapped artifact you control: Add U.5: Shuffle your library, then exile the top card. Until end of turn, you may play that card without paying its mana cost.",
            cardImage: "https://tcgplayer-cdn.tcgplayer.com/product/190836_in_1000x1000.jpg", version: "version1",
            cardValue: 13
        },
        {
            cardID: 1, cardName: "Ancient Brass Dragon", cardDescription: "Flying Whenever Ancient Brass Dragon deals combat damage to a player, roll a d20. When you do, put any number of target creature cards with mana value X or less from graveyards onto the battlefield under your control, where X is the result.",
            cardImage: "https://tcgplayer-cdn.tcgplayer.com/product/267052_in_1000x1000.jpg", version: "version1",
            cardValue: 29
        },
        ]}
        ])
        
    return (
        <>
        <div className="fullResults">
            <div className="cardList">
                <div className="cardNamePrice">           
                    {storeCard.map((store: any) => {
                    return (
                        <div className='storeWrapper'>
                            <div key={store.storeID}>
                                <span className='storeName'>{store.storeName}:</span>
                                <div key={store.cardsFromStore.cardID}>
                            {store.cardsFromStore.map((cards: ICardsFromStore) => {
                            return (
                                <>
                                <div className='cardListWrapper'>
                                    <div className='cardListInformation'>
                                        <div className='cardName'>{cards.cardName}</div>
                                        <div className='cardPrice'>${cards.cardValue} </div>
                                    </div>
                                </div>
                                </>
                                )
                            })}
                                </div>
                            </div>
                         </div>
            )
            })}
            </div>
        </div>
        
        <div className="fullCardDetails">           
            {storeCard.map((store: any) => {
                console.log("this is the value of store", store.storeName)
        return (
        <div className='storeWrapper'>
            <div key={store.storeID}>
                <span className='storeName'>{store.storeName}</span>
                <div key={store.cardsFromStore.cardID}>
            {store.cardsFromStore.map((cards: ICardsFromStore) => {
            return (
                <>
                <div className='cardWrapper'>
                    <div className='leftSide'>
                        <div className='cardName'>{cards.cardName}</div>
                        <img src={cards.cardImage} alt={`Image of` + cards.cardName} className='cardImage'/>
                    </div>
                    <div className='rightSide'>
                        <div className='cardDescription'>{cards.cardDescription}</div>
                        <div className='cardValue'>Price from {store.storeName} ${cards.cardValue}</div>
                    </div>
                </div>
                </>
                )
            })}
            </div>
            </div>
            </div>
            )
            })}
            </div>
        </div>
        </>
    )
}

export default Results