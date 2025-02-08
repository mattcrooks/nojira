import React from 'react';

import Title from './Title';
import { useProblemsQuery } from './types/problems.gen';

export const Problems: React.FC = () => {
  const { data, loading, error } = useProblemsQuery();
  const problems = data?.queryProblem
    ?.map((problem) => {
      if (problem) {
        return problem;
      }
    })
    .filter((problem) => problem !== undefined);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading problems.</div>;

  if (problems)
    return (
      <div>
        {problems.map((problem) => (
          <Title key={problem.id} title={problem.title} id={problem.id} />
        ))}
      </div>
    );
};
