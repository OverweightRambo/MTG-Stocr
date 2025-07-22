import './CartSubTotal.scss'
import { ICardsFromStore } from '../../Pages/ResultsPage/Results'

interface ICards {
    cards: ICardsFromStore[]
}

const CartSubTotal : React.FC<ICards> = ({ cards }) => {
    
    const subtotal = cards.reduce((acc, card) => acc + card.price * card.quantity, 0);

  return (
    <div className="orderSummaryWrapper">
      <div className="text-lg font-bold mb-2">Order Summary</div>
      this is subtotal {subtotal}
    </div>
  );
}

export default CartSubTotal