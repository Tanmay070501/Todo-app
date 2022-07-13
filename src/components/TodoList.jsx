import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import useTodoCtx from "../hooks/useTodoCtx";

function TodoList() {
    const { todo } = useTodoCtx();
    return (
        <List>
            {todo.map((todoItem, index) => {
                return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="delete"
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        <ListItemText
                            primary={todoItem}
                            primaryTypographyProps={{
                                variant: "h5",
                                sx: {
                                    wordWrap: "break-word",
                                },
                            }}
                        />
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodoList;
