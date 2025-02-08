type ProblemProps = {
  id: string;
};

export default function Problem({ id }: ProblemProps) {
  return <h1>{id}</h1>;
}
