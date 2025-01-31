import React from "react";

import { useProblemsQuery } from "./types/problems.gen";

export const Problems: React.FC = () => {
  const { data, loading, error } = useProblemsQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading problems.</div>;

  return (
    <div>
      <ul>
        {data?.queryProblem?.map((problem) => (
          <li key={problem?.id}>{problem?.title}</li>
        ))}
      </ul>
    </div>
  );
};
