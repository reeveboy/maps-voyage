import classNames from "classnames";

interface propTypes {
  title: string;
  variant?: "centered" | "left";
}

export default function H3(props: propTypes) {
  return (
    <div
      className={classNames(
        "flex flex-col",
        props.variant == "centered" ? "items-center" : ""
      )}
    >
      <p className="h-[2px] w-16 bg-primary"></p>
      <h3 className="text-lg uppercase tracking-wider text-primary">
        {props.title}
      </h3>
    </div>
  );
}
