import { useContext } from "react";
import { TodoContext } from "../../store/TodoStore";

const Deleted=()=>{

const {deletedItem}=useContext(TodoContext) ;

    return(
        <>
       {
        deletedItem.map((item,index)=>{
          return  <li className="list-group-item pb-2"key={index}>{item.name}</li>
        })
       }
        </>
    )
}
export default Deleted;