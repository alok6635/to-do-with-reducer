import { createContext, useReducer } from "react";

export const TodoContext = createContext([

])

const initialState = {
    todoItems: [],
    deletedItem: [],
    edit: '',
    index: undefined,
}
const reducerFtn = (state, action) => {
    if (action.type == 'ADD') {
        if (state.index == undefined) {
            return { ...state, todoItems: [...state.todoItems, { name: action.payload.inputValue }] }
        }
        else {
            let newAdd = state.todoItems.map((item, id) => {
                if (id == state.index) {
                    return { name: action.payload.inputValue }
                }
                return item
            })
            return { ...state, todoItems: [...newAdd], index: undefined }
        }
    }

    else if (action.type == 'DELETE') {
        let updated = state.todoItems.filter((item, id) => action.payload.index !== id)
        let deletedData = state.todoItems.filter((item, i) => action.payload.index == i)
        return { ...state, todoItems: updated, deletedItem: [...state.deletedItem, ...deletedData] }
    }
    else if (action.type == 'EDIT') {
        return { ...state, edit: action.payload.editvalue, index: action.payload.index }
    }
}


const TodoExportData = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFtn, initialState)

    // add todo
    const handleAdd = (inputValue) => {
        dispatch({
            type: 'ADD',
            payload: {
                inputValue,
            }
        })
    }
    // deleted todo 
    const handleDel = (index) => {
        dispatch({
            type: 'DELETE',
            payload: {
                index,
            }
        })
    }
    // edit todo
    const handleEdit = (editvalue, index) => {
        dispatch({
            type: 'EDIT',
            payload: {
                editvalue,
                index
            }
        })
    }
    return (
        <TodoContext.Provider value={
            {
                todoItems: state.todoItems,
                handleAdd: handleAdd,
                handleDel: handleDel,
                deletedItem: state.deletedItem,
                handleEdit: handleEdit,
                edit: state.edit,
            }}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoExportData;