import { buttonInterface } from "../../interFace";

function Button1({ title, onClick, className }: buttonInterface) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}
export default Button1;
