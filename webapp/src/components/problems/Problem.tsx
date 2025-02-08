import { useProblemQuery } from './types/problem.gen';

type ProblemProps = {
  id: string;
};

export default function Problem({ id }: ProblemProps) {
  const { data, loading, error } = useProblemQuery({ variables: { id } });

  if (loading) return <div>Loading...</div>;
  if (error || !data?.getProblem?.id) return <div>Error loading problem.</div>;

  return (
    <div>
      <h1 className="text-3xl">{data.getProblem?.title}</h1>
      <pre>{JSON.stringify(data.getProblem, null, 2)}</pre>
    </div>
  );
}
