type ProblemProps = {
  problem: {
    id: string;
    title: string;
  } | null;
};

export default function Problem({ problem }: ProblemProps) {
  if (problem) {
    console.log(problem);
    return <h2>{problem?.title}</h2>;
  }
}
