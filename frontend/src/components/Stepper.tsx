import { useEffect, useRef, useState } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

const Stepper = ({ steps, currentState }: { steps: string[], currentState: number }) => {
  const [newState, setNewState] = useState<Step[]>([]);
  const stepRef = useRef<Step[]>([]);
  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
         count++;
      }
     else if(count < stepNumber){
      newSteps[count] = {
        ...newSteps[count],
        highlighted: false,
        selected: true,
        completed: true,
      };
       count++;
     }
     else{
      newSteps[count] = {
        ...newSteps[count],
        highlighted: false,
        selected: false,
        completed: false,
      };
       count++;
     }
    }
    return newSteps;
  };
  

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));
    stepRef.current = stepsState;
    const current = updateStep(currentState - 1, stepRef.current);
    setNewState(current);
  }, [steps, currentState]);

  const displaySteps = newState.map((step, index) => (
    <div key={index} className={index === newState.length - 1 ? "w-full flex items-center" : "flex items-center"}>
      <div className="relative flex flex-col items-center text-cyan-600 mr-2">
        <div className="rounded-full transition duration-500 ease-in-out 
          border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 mr-20">
          {index + 1}
          {/* display number */}
        </div>
        <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
          {/* display description */}
          {step.description}
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500">
        {/* display line */}
      </div>
    </div>
  ));

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
