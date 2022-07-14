import { createContext, useEffect, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
    if (action.type === "ADD") {
        return {
            ...state,
            todo: [
                ...state.todo,
                {
                    task: action.todo,
                    id: action.id,
                    isCompleted: false,
                },
            ],
        };
    }
    if (action.type === "CHECKBOX_CHANGE") {
        return {
            ...state,
            todo: state.todo.map((item) => {
                if (item.id === action.id)
                    return {
                        ...item,
                        isCompleted: action.completed,
                    };
                return item;
            }),
        };
    }
    if (action.type === "DELETE") {
        return {
            ...state,
            todo: state.todo.filter((item) => item.id !== action.id),
        };
    }
    if ((action.type = "DELETE_ALL")) {
        return {
            todo: [],
        };
    }
    return state;
};

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todo: localStorage.getItem("todo")
            ? JSON.parse(localStorage.getItem("todo"))
            : [],
    });

    const initialValue = {
        ...state,
        dispatch,
    };

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(state.todo));
        //console.log(JSON.parse(localStorage.getItem("todo")));
    }, [state.todo]);
    return (
        <TodoContext.Provider value={initialValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
