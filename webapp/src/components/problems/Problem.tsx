import { useProblemQuery } from "./types/problem.gen";

type ProblemProps = {
  id: string;
};

export default function Problem({ id }: ProblemProps) {
  const { data, loading, error } = useProblemQuery({ variables: { id } });

  if (loading) return <div>Loading...</div>;
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
