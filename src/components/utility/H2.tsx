interface propTypes {
  title?: string;
  children?: React.ReactNode;
}

export default function H2(props: propTypes) {
  return (
    <div>
      <h2 className="mt-2 text-4xl leading-[95%] text-dark drop-shadow-md">
        {props.title}
        {props.children}
      </h2>
    </div>
  );
}
