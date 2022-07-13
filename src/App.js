import { Add } from "@mui/icons-material";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import TodoList from "./components/TodoList";
import useTodoCtx from "./hooks/useTodoCtx";

function App() {
    const [value, setValue] = useState("");
    const { dispatch } = useTodoCtx();
    const valueChangeHandler = (event) => {
        setValue(event.target.value);
    };
    const addTodo = () => {
        dispatch({
            type: "ADD",
            todo: value,
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
            <Container sx={{ mt: 5 }} maxWidth="sm">
                <TodoList />
            </Container>
        </Fragment>
    );
}

export default App;
