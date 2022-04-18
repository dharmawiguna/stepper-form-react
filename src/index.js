import React, { useState } from "react";
import ReactDOM from "react-dom";

import { MdCheck, MdSupervisedUserCircle } from "react-icons/md";

import "./styles.css";

import { Steps, StepButtonStyled, StyledButton } from "./styles";

const component = ({ content }) => (
  <div>
    <h2>{content}</h2>
  </div>
);

const steps = [
  {
    icon: <MdSupervisedUserCircle />,
    title: "Step 1",
    component: component,
    props: { content: "step 1 content" }
  },
  {
    title: "Step 2",
    component: component,
    props: { content: "step 2 content" }
  },
  {
    title: "Step 3",
    component: component,
    props: { content: "step 3 content" }
  },
  {
    title: "Step 4",
    component: component,
    props: { content: "step 4 content" }
  },
  {
    title: "Step 5",
    component: component,
    props: { content: "step 5 content" }
  }
];

const StepButton = ({ step, isChecked, icon, isActive, number, onClick }) => (
  <StepButtonStyled
    isChecked={isChecked}
    active={isActive}
    onClick={() => onClick(number)}
  >
    <span>{isChecked ? <MdCheck /> : icon ? icon : number + 1}</span>{" "}
    <h4>{step.title}</h4>
  </StepButtonStyled>
);

const NavButton = ({ onClick, text }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

const Stepper = ({ steps, activeStep, setActiveStep }) => {
  return (
    <>
      <Steps>
        {steps.map((step, i) => (
          <StepButton
            icon={step?.icon}
            isActive={activeStep === i}
            isChecked={activeStep > i}
            number={i}
            step={step}
            onClick={() => setActiveStep(i)}
          />
        ))}
      </Steps>

      <div className="content">
        {steps
          .filter((step, i) => i === activeStep)
          .map((item) => {
            const Component = item.component;
            return <Component {...item.props} />;
          })}
      </div>
      <hr />
    </>
  );
};

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="App">
      <h1>Stepper</h1>
      <h4>Active Step - {steps[activeStep].title}</h4>
      <br />
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div>
        <NavButton
          onClick={() => setActiveStep(activeStep - 1)}
          text="Previous"
        />
        <NavButton onClick={() => setActiveStep(activeStep + 1)} text="Next" />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
