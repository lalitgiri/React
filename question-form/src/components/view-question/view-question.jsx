import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";

export default function ViewQuestion(props) {
    return (<Grid container spacing={2}>
        <Grid item xs={1}>
            Q. {props.questionNumber + 1}
        </Grid>
        <Grid item xs={11}>
            <div className="container">

                <div>
                    <label>{props.questionDetail.question} </label>
                    &nbsp;&nbsp;<label onClick={()=>(props.questionDetail.edit = true, props.editQuestions())}>&#9998;</label>
                </div>
                <div>
                    {props.questionDetail.choice && <RadioGroup
                        aria-label="gender"
                        name="radio-buttons-group"
                    >
                        {props.questionDetail.options.map((option, _index) =>
                            <FormControlLabel key={_index} value={option} control={<Radio />} label={option} />
                        )}
                    </RadioGroup>}
                    {!props.questionDetail.choice && props.questionDetail.options.map((option, _index) =>
                        <div key={'checkbox' + _index}>
                            <FormControlLabel control={<Checkbox />} label={option} />
                        </div>
                    )}

                </div>
            </div>
        </Grid>
    </Grid>);
}