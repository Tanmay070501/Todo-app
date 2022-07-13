import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const useTodoCtx = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoCtx must be inside a TodoContext Provider");
    }
    return context;
};

export default useTodoCtx;
