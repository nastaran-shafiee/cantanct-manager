import { buttonInterface } from "../../interFace";

function Button1({ title, onClick, className, style }: buttonInterface) {
  return (
    <button onClick={onClick} className={className} style={style}>
      {title}
    </button>
  );
}
export default Button1;
