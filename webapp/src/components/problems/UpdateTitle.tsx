import { useUpdateTitleMutation } from "./types/problems.gen";

type UpdateTitleProps = {
  problem: {
    id: string;
  } | null;
  newTitle: string;
};

export default function UpdateTitle({ problem, newTitle }: UpdateTitleProps) {
  const [update] = useUpdateTitleMutation();
  return (
    <button
      onClick={() => {
        update({
          variables: { id: problem?.id, title: newTitle },
        });
      }}
    >
      Save
    </button>
  );
}
