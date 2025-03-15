import { Route, Routes } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Results from "../Pages/Homepage/ResultsPage/Results"

const RouterHandler = () => {
    console.log("this is inside the route handler")
    return (
        <Routes>
            <Route path = '/' element={<Homepage/>}/>
            <Route path= '/results' element={<Results/>}/>
        </Routes>
    )
}

export default RouterHandler