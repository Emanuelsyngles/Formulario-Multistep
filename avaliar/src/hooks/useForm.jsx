import { useState } from "react";

export function UseForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e) {

    }

    return {
        currentStep,
        currentComponent:[currentStep],
    };
}

export default UseForm