import React, {useState} from "react";
import {Form} from "formik";
import {Button, Stack, Step, StepLabel, Stepper} from "@mui/material";

export const Formstepper = ({children}) => {
    const stepsArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentStep = stepsArray[step];

    function StepperToNext() {
        setStep(step + 1)
    }

    function StepperToBack() {
        setStep(step - 1)
    }

    return (
        <Form>
            <Stepper alternativeLabel activeStep={step} sx={{marginBottom: 5}}>
                {stepsArray.map((child, index) => (
                    <Step key={index} completed={step > index}>
                        <StepLabel>{}</StepLabel>
                        {/*<StepLabel>{child.props.label}</StepLabel>*/}
                    </Step>
                ))}
            </Stepper>
            {currentStep}

            <div className="fixed-bottom">
                <Stack direction="row" spacing={2} sx={{marginTop: 5}}>
                    {step !== 0 ?
                        <Button
                            style={{backgroundColor:"orangered" ,color:"whitesmoke"}}
                            variant="outlined"
                            onClick={() => {
                                StepperToBack()
                            }}
                        >
                            Back
                        </Button> : ""}

                    {step === 3 ? "" :
                        <Button
                            style={{backgroundColor:"orangered" ,color:"whitesmoke"}}
                            variant="outlined"
                            onClick={() => {
                                StepperToNext()
                            }}
                        >
                            Next
                        </Button>}
                    {step === 4 && (
                        <Button variant="contained" type="submit" >
                            Submit
                        </Button>
                    )}
                </Stack>
            </div>
        </Form>
    );
};
