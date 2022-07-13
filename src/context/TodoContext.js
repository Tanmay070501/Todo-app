import { createContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
    if (action.type === "ADD") {
        return {
            ...state,
            todo: [...state.todo, action.todo],
        };
    }
    return state;
};

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, {
        todo: [],
    });
    const initialValue = {
        ...state,
        dispatch,
    };
    return (
        <TodoContext.Provider value={initialValue}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
