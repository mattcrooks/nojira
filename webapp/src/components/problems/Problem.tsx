import { useProblemQuery } from "./types/problem.gen";

type ProblemProps = {
  id: string;
};

export default function Problem({ id }: ProblemProps) {
  const { data, isLoading, error } = useProblemQuery({variables: {id}});

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return <div>Check console for errors</div>;
  }

  return (
    <div>
      <h1>{data?.getProblem?.title}</h1>
    </div>
  );
}
