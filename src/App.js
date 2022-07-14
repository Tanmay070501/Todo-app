import { Add, Delete } from "@mui/icons-material";
import {
    Button,
    Container,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
//import TodoList from "./components/TodoList.jsx";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/Todo/TodoList";
import useTodoCtx from "./hooks/useTodoCtx";

function App() {
    const [value, setValue] = useState("");
    const { dispatch, todo } = useTodoCtx();

    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };
    const deleteAllHandler = () => {
        dispatch({
            type: "DELETE_ALL",
        });
    };
    const addTodo = () => {
        dispatch({
            type: "ADD",
            todo: value,
            id: uuidv4(),
        });
        setValue("");
    };
    return (
        <Fragment>
            <Typography
                sx={{ fontWeight: "400" }}
                align="center"
                variant="h1"
                component="h1"
            >
                TODO LIST
            </Typography>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 5,
                }}
                maxWidth="sm"
            >
                <TextField
                    label="Add Todo"
                    variant="standard"
                    value={value}
                    onChange={valueChangeHandler}
                    fullWidth
                />
                <IconButton aria-label="Add" size="large" onClick={addTodo}>
                    <Add fontSize="inherit" />
                </IconButton>
            </Container>
            <Container
                sx={{ display: "flex", justifyContent: "end", my: 2 }}
                maxWidth="sm"
            >
                <Button
                    startIcon={<Delete />}
                    variant="contained"
                    color="error"
                    disabled={todo.length === 0}
                    onClick={deleteAllHandler}
                >
                    Delete ALL
                </Button>
            </Container>
            <Container sx={{ my: 5 }} maxWidth="sm">
                <Typography variant="h4">TODO</Typography>
                <TodoList todo={todo.filter((item) => !item.isCompleted)} />
            </Container>

            <Container sx={{ my: 5 }} maxWidth="sm">
                <Typography variant="h4">COMPLETED</Typography>
                <TodoList todo={todo.filter((item) => item.isCompleted)} />
            </Container>
        </Fragment>
    );
}

export default App;
