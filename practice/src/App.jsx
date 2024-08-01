import { useDispatch, useSelector } from "react-redux"
import { changeValue } from "store"

export const App = () => {
    const value = useSelector(state=>state.value)
    const disPatch = useDispatch()
    const handleValueChange = (e) => {
        const change = Number(e.target.dataset.change)
        disPatch(changeValue(change))
    }
    return(
        <div>
            <button type="button" data-change="-1" onClick={handleValueChange}>-</button>
            <h1>{value}</h1>
            <button type="button" data-change="+1" onClick={handleValueChange}>+</button>
        </div>
)
}