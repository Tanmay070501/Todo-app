import { List, Typography } from "@mui/material";
import React from "react";
//import useTodoCtx from "../../hooks/useTodoCtx";

import TodoListItem from "./TodoListItem";

function TodoList({ todo }) {
    //const { todo } = useTodoCtx();
    if (todo.length === 0) {
        return (
            <Typography sx={{ textAlign: "center" }}>None Yet...</Typography>
        );
    }
    return (
        <List>
            {todo.map((item) => {
                return <TodoListItem key={item.id} item={item} />;
            })}
        </List>
    );
}

export default TodoList;
