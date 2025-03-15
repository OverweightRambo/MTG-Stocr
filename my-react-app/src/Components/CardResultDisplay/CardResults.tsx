interface ICardsFromStore {
    cardName: string, cardDescription: string, cardImage: any, version: string,
    cardValue: number
}

 
export interface IStoreInformation {
    storeName:string, cardsFromStore: Array<ICardsFromStore>
}

const CardResults = (storeArray: any) => {

    console.log('this is the value of storeArray', storeArray)
    return (
        <div>This is inside of results</div>
    )
}

export default CardResults