import { useGetUsernameQuery } from "./types/username.gen";

interface UsernameProps {
  username: string;
}

export function Username({ username }: UsernameProps) {
  const { data, loading, error } = useGetUsernameQuery({
    variables: { name: username },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return data?.getUser?.name ? data.getUser.name : "nojira user";
}
