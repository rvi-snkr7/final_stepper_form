import React, { useState } from "react";
import { Form } from "formik";
import { Button, Stack, Step, StepLabel, Stepper } from "@mui/material";

export const Formstepper = ({ children }) => {
    const stepsArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentStep = stepsArray[step];

    function SttaperToNext () {
     setStep(step + 1)
    }

    function SttaperToBack () {
        setStep(step - 1)
    }

    return (
        <Form>
            <Stepper  alternativeLabel activeStep={step} sx={{ marginBottom: 5 }}>
                {stepsArray.map((child, index) => (
                    <Step key={index} completed={step > index}>
                        <StepLabel>{}</StepLabel>
                        {/*<StepLabel>{child.props.label}</StepLabel>*/}
                    </Step>
                ))}
            </Stepper>
            {currentStep}

            <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
                {step !== 0 ?
                    <Button
                    variant="outlined"
                    onClick={() => {
                        SttaperToBack()
                    }}
                >
                 Back
                </Button> : ""}

                {step === 3 ? "" :
                <Button
                    variant="outlined"
                    onClick={() => {
                        SttaperToNext()
                    }}
                >
                    Next
                </Button>}
                {step === 4 && (
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                )}
            </Stack>
        </Form>
    );
};
