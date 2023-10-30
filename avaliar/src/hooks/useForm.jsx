import { useState } from "react";

export function UseForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) {
        if(e) e.preventDefault();

        if(i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent:[currentStep],
        changeStep,
    };
}

export default UseForm