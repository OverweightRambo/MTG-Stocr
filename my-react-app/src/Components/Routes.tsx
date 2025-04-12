import { Route, Routes } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Results from "../Pages/ResultsPage/Results"
import CardInput from "../Pages/CardInput/CardInput"
import UserPage from "../Pages/UserPage/UserPage"

const RouterHandler = () => {
    return (
        <Routes>
            <Route path = '/' element={<Homepage/>}/>
            <Route path= '/results' element={<Results/>}/>
            <Route path= '/cardInput' element={<CardInput/>}/>
            <Route path= '/user' element={<UserPage/>}/>
        </Routes>
    )
}

export default RouterHandler