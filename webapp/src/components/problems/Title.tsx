type TitleProps = {
  title: string;
  id: string;
};

export default function Title({ title, id }: TitleProps) {
  return (
    <li>
      <a href={'/problems/' + id} className="underline">
        {title}
      </a>
    </li>
  );
}
