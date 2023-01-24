import {useRecoilValue} from "recoil";
import {todoListStatsState} from "../../selector/Selector";

const TodoListStats = () => {

    const {
        totalNum, totalCompletedNum, totalUncompletedNum, percentCompletedNum
    } = useRecoilValue(todoListStatsState)

    return (
        <ul>
            <li>Total items : {totalNum}</li>
            <li>Items completed : {totalCompletedNum}</li>
            <li>Items not Completed : {totalUncompletedNum}</li>
            <li>Percent completed : {percentCompletedNum}</li>
        </ul>
    )
}

export default TodoListStats