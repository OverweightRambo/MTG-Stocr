import { createContext, useContext, useState, useEffect } from 'react';

console.log('this is inside of context.')
export interface IMockCardList {
    title: string,
    price: string,
    stock: string
}

// export interface ICardContext {
//    CardList: IMockCardList
// }

interface ICardStateContext {
    contextCardList: Array<IMockCardList>
    setContextCardList: any
}

export const CardStateContext = createContext<ICardStateContext | null>(null)

export const CardStateContextProvider = (props: any) => {
    const [contextCardList, setContextCardList] = useState<any>()//IMockCardList>>([{title: 'default', price: 'default', stock: 'default'}])

    console.log("this is the valule of contextCardList inside of context", contextCardList)
    return(
        <CardStateContext.Provider value={{
            contextCardList,
            setContextCardList
        }}>
            {props.children}
        </CardStateContext.Provider>
    )
}

export const useCardContextState = () => {
    const context = useContext(CardStateContext)

    return context
}

export default CardStateContextProvider