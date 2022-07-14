import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useRef, useState } from "react";
import useTodoCtx from "../../hooks/useTodoCtx";

function TodoListItem({ item }) {
    const { dispatch } = useTodoCtx();
    const [toggle, setToggle] = useState(item.isCompleted);
    const Checkref = useRef();
    function buttonClickHandler() {
        dispatch({
            type: "CHECKBOX_CHANGE",
            completed: !toggle,
            id: item.id,
        });
        setToggle((prev) => !prev);
    }
    function checkBoxChangeHandler(e) {
        setToggle(e.target.checked);
        dispatch({
            type: "CHECKBOX_CHANGE",
            completed: e.target.checked,
            id: item.id,
        });
    }
    const deleteHandler = () => {
        dispatch({ type: "DELETE", id: item.id });
    };
    return (
        <ListItem
            secondaryAction={
                <IconButton
                    onClick={deleteHandler}
                    size="large"
                    edge="end"
                    aria-label="delete"
                >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            }
        >
            <ListItemButton
                role={undefined}
                component="button"
                onClick={buttonClickHandler}
                dense
                sx={{ wordWrap: "break-word" }}
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        onChange={checkBoxChangeHandler}
                        checked={toggle}
                        disableRipple
                        ref={Checkref}
                    />
                </ListItemIcon>

                <Typography
                    variant="body1"
                    component={item.isCompleted ? "del" : "p"}
                    sx={{
                        overflowWrap: "break-word",
                        wordBreak: "break-all",
                    }}
                >
                    {item.task}
                </Typography>
            </ListItemButton>
        </ListItem>
    );
}

export default TodoListItem;
