import { inputInterface } from "../../interFace";

function Input({ type, placeholder, className }: inputInterface) {
  return <input type={type} placeholder={placeholder} className={className} />;
}
export default Input;
