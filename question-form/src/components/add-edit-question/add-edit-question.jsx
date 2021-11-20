import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";
import "./add-edit-question.css";

function AddEditQuestion(props) {
    console.log("AddEditQuestion");
    let [choice, setChoice] = useState(props.questionDetail.choice);
    let [question, setQuestion] = useState(props.questionDetail.question);
    let [options, setOptions] = useState(props.questionDetail.options);

    const handleTextField = (_event) => {
        debugger
        setQuestion(_event.target.value);
    }
    let save = () => {
        props.questionDetail.choice = choice;
        props.questionDetail.question = question;
        props.questionDetail.options = options;
        props.questionDetail.edit = false;
        props.addQuestion();
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}>
                Q. {props.questionNumber + 1}
            </Grid>
            <Grid item xs={11}>
                <div className="container">
                    <div>
                        <FormControl
                            className="w-50"
                            variant="standard"
                            sx={{ m: 1, minWidth: 120 }}
                        >
                            <InputLabel id="type">Type</InputLabel>
                            <Select
                                labelId="type"
                                id="demo-simple-select-standard"
                                value={choice}
                                onChange={(_event) => setChoice(_event.target.value)}
                                label="Type"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={true}>Single Choice</MenuItem>
                                <MenuItem value={false}>Multiple Choice</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            className="w-75"
                            id="question-input"
                            key="question-input"
                            label="Question"
                            variant="standard"
                            value={question}
                            onChange={handleTextField}
                        />
                    </div>
                    {options.map((ele, index) => (
                        <div key={index}>
                            <TextField
                                className="w-50"
                                label="Option"
                                variant="standard"
                                defaultValue={ele}
                                onChange={(_eve) => {
                                    options[index] = _eve.target.value;
                                    setOptions([...options]);
                                }}
                            />
                        </div>
                    ))}
                    <div className="question-buttons">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button
                                    variant="text"
                                    onClick={() => setOptions([...options, ""])}
                                >
                                    + Add Answer Option
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" onClick={save}>
                                    Save Question
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default AddEditQuestion;
