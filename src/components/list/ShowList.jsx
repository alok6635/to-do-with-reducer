import { useContext } from "react"
import { TodoContext } from "../../store/TodoStore"

const ShowList = ({ item, index }) => {

    const { handleDel, handleEdit } = useContext(TodoContext);
    const delBtn = (index) => {
        handleDel(index)
    }
    const editBtn = (itemtext, index) => {
        handleEdit(itemtext, index)
    }
    return (
        <>
            <li className="list-group-item pb-2 d-flex justify-content-between">{item.name}
                <div className="icon_wrap">
                    <i className="bi bi-pencil-square" onClick={() => editBtn(item.name, index)}></i>
                    <i className="bi bi-trash" onClick={() => delBtn(index)}></i>
                </div>
            </li>
        </>
    )
}

export default ShowList;