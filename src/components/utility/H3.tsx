interface propTypes {
  title: string;
}

export default function H3(props: propTypes) {
  return (
    <div>
      <p className="h-[2px] w-16 bg-primary"></p>
      <h3 className="text-lg uppercase tracking-wider text-primary">
        {props.title}
      </h3>
    </div>
  );
}
