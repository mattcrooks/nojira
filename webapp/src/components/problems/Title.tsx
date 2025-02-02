import { useState } from "react";
import UpdateTitle from "./UpdateTitle";

type ProblemProps = {
  problem: {
    id: string;
    title: string;
  } | null;
};

export default function Problem({ problem }: ProblemProps) {
  const [inputValue, setInputValue] = useState(problem?.title);
  if (problem) {
    console.log(problem);
    return (
      <>
        <input style={{ width: "80%" }}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <UpdateTitle problem={problem} newTitle={inputValue} />
      </>
    );
  }
}
