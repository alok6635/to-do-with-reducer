import { useContext } from "react";
import ShowList from "./ShowList";
import { TodoContext } from "../../store/TodoStore";

const List = () => {
const {todoItems}=useContext(TodoContext)
console.log(todoItems);
    return (
        <>
            {
                todoItems.map((item, index)=><ShowList item={item} key={index}  index={index}/>)
            }

        </>
    )
}

export default List;