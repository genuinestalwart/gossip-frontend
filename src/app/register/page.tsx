"use client";
import NamesForm from "@/components/register/NamesForm";
import SignUpForm from "@/components/register/SignUpForm";
import { Box, Stepper, StepperStep } from "@mantine/core";
import { useState } from "react";

interface Names {
	firstName: string;
	fullName: string;
}

const RegisterPage = () => {
	const [activeStep, setActiveStep] = useState<number>(0);
	const [disabled, setDisabled] = useState<boolean>(false);
	const [names, setNames] = useState<Names>({ firstName: "", fullName: "" });

	return (
		<Box className='container min-h-[calc(100vh_-_4rem)]' component='main'>
			<Stepper
				active={activeStep}
				allowNextStepsSelect={false}
				maw='50ch'
				mx='auto'
				my='xl'
				onStepClick={setActiveStep}>
				<StepperStep label='Your Names' loading={disabled}>
					<NamesForm
						disabled={disabled}
						names={names}
						setActiveStep={setActiveStep}
						setDisabled={setDisabled}
						setNames={setNames}
					/>
				</StepperStep>

				<StepperStep label='Credentials' loading={disabled}>
					<SignUpForm
						disabled={disabled}
						names={names}
						setDisabled={setDisabled}
					/>
				</StepperStep>
			</Stepper>
		</Box>
	);
};

export default RegisterPage;
