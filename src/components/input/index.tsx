import { inputInterface } from "../../interFace";

function Input({
  type,
  placeholder,
  className,
  onChange,
  showError,
  isValid,
  value,
  onBlur,
  setError,
}: inputInterface) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {setError && <p className="error">{showError}</p>}
    </>
  );
}
export default Input;
