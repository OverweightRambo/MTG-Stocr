import './App.scss'
import RouterHandler from './Components/Routes'
import Header from './Components/Header/Header'
import CardStateContextProvider from './Context/cardContext'

function App() {

  return (
    <>
      <CardStateContextProvider>
        <Header>
          <RouterHandler/>
        </Header>
      </CardStateContextProvider>
    </>
  )
}

export default App
