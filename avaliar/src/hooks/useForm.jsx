import { useState } from "react";

export function UseForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)

    return {
        currentStep,
        currentComponent:[currentStep],
    };
}

export default UseForm