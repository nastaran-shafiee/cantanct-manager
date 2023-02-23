import Button1 from "../button";
import Input from "../input";

import useInput from "../../hooks/useInput";
import { FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formdispatch } from "../../redux";
import { ToastContainer, toast } from "react-toastify";
// validation-----------------------------------------------------------------------------------------
const petternEmail = "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+";
const patternName = "^[a-zA-Z\u0600-\u06FFs ]+$";
const patternNumber = "09[0-9]";

//  form function----------------------------------------------------------------------------------

function AddToCart() {
  const dispatch = useDispatch();
  const editingMode = useSelector((state) => state.form.editingMode);
  const editeuser = useSelector((state) => state.form.editeuser);
  const [btn, setBtn] = useState(true);
  const [disable, setDisable] = useState(false);

  // name from use input--------------------------------------------------------------------------------
  const {
    value: entredName,
    isValid: isNameValid,
    valueChangeHandler: nameChanging,
    reset: resetName,
    valueE: editName,
    BlurHandler: nameBlur,
    setError: nameError,
  } = useInput(
    (value: string) => value.match(patternName) && value.trim().length > 3
  );
  // family form input-------------------------------------------------------------------------------------
  const {
    value: entredFamily,
    isValid: isFamilyValid,
    valueChangeHandler: familyChanging,
    reset: resetFamily,
    valueE: editFamily,
    BlurHandler: familyBlur,
    setError: familyError,
  } = useInput(
    (value: string) => value.match(patternName) && value.trim().length > 3
  );
  // const relation ship-----------------------------------------------------------
  const {
    value: entredralationShip,
    isValid: isRelationValid,
    valueChangeHandler: relationChanging,
    valueE: editRelation,
    reset: resetRelationship,
    BlurHandler: relationBlur,
    setError: relationError,
  } = useInput(
    (value: string) => value.match(patternName) && value.trim().length > 3
  );
  // email from useuinput--------------------------------------------------------------------------------
  const {
    value: entredEmail,
    isValid: isEmailValid,
    valueChangeHandler: emailChanging,
    valueE: editEmail,
    BlurHandler: emailBlur,
    setError: emailError,
    reset: resetEmail,
  } = useInput((value: string) => value.match(petternEmail));

  // phone from useInput----------------------------------------------------------------------------
  const {
    value: entredPhone,
    isValid: isPhoneValid,
    valueChangeHandler: phoneChanging,
    valueE: editPhone,
    reset: resetPhone,
    BlurHandler: phoneBlur,
    setError: phoneError,
  } = useInput(
    (value: string) => value.match(patternNumber) && value.length === 11
  );
  // function login------------------------------------------------------------------------------
  const validation =
    isNameValid &&
    isFamilyValid &&
    isPhoneValid &&
    isRelationValid &&
    isEmailValid;
  // useefect validation------------------------------------------------------------
  useEffect(() => {
    if (validation) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [validation]);
  // submit function--------------------------------------------------------------------
  const loginHandler = (event: FormEvent) => {
    event.preventDefault();

    if (validation) {
      setDisable(true);
      const user1 = {
        name: entredName,
        email: entredEmail,
        family: entredFamily,
        relation: entredralationShip,
        phone: entredPhone,
        id: Date.now(),
      };

      if (!editingMode) {
        console.log(editingMode);
        dispatch(formdispatch.addContact({ user1 }));
        setBtn(true);
        toast("Add Contact succesfull");
      } else {
        user1.id = editeuser.id;
        dispatch(formdispatch.edituser(user1));
        dispatch(formdispatch.removeEditing());
        setBtn(true);
        toast("Edit Contact Succesfully");
      }
      resetName();
      resetEmail();
      resetFamily();
      resetRelationship();
      resetPhone();
      setDisable(false);
    }
  };
  // cancel function--------------------------------------------
  function cancel() {
    resetName();
    resetEmail();
    resetFamily();
    resetRelationship();
    resetPhone();
    setDisable(false);
    toast("your edit cancel");
  }
  // useefect-------------------------------------------
  useEffect(() => {
    if (editingMode) {
      editName(editeuser.name);
      editFamily(editeuser.family);
      editPhone(editeuser.phone);
      editRelation(editeuser.relation);
      editEmail(editeuser.email);
      setBtn(false);
    }
  }, [editingMode]);
  // return function------------------------------------------------------------------------------------------
  return (
    <form className="col-lg-3 inp">
      <Input type="search" placeholder="search" className="form-control mt-2" />

      <h5 className="mt-2">Add New Contact</h5>
      <Input
        type="email"
        placeholder="Name"
        className="form-control mb-3 mt-3"
        showError="invalid name"
        onChange={nameChanging}
        onBlur={nameBlur}
        setError={nameError}
        value={entredName}
      />

      <Input
        type="email"
        placeholder="Family"
        className="form-control mb-3 mt-3"
        showError="invalid family"
        onChange={familyChanging}
        value={entredFamily}
        onBlur={familyBlur}
        setError={familyError}
      />
      <Input
        type="email"
        placeholder="Number"
        className="form-control mb-3 mt-3"
        showError="invalid number"
        onChange={phoneChanging}
        value={entredPhone}
        onBlur={phoneBlur}
        setError={phoneError}
      />
      <Input
        type="email"
        placeholder="Relation ship"
        className="form-control mb-3 mt-3"
        showError="invalid relation"
        onChange={relationChanging}
        value={entredralationShip}
        onBlur={relationBlur}
        setError={relationError}
      />
      <Input
        type="email"
        placeholder="E-mail"
        className="form-control mb-3 mt-3"
        showError="invalid Email"
        onChange={emailChanging}
        value={entredEmail}
        onBlur={emailBlur}
        setError={emailError}
      />
      <Button1
        title={btn ? "Add" : "Edit"}
        className="btn btn-info w-100 btn1"
        onClick={loginHandler}
        style={{ backgroundColor: !disable ? "gray" : " " }}
      />
      {!btn ? (
        <Button1
          title="cancel"
          className="btn btn-secondary w-100 btn1 mt-2"
          onClick={cancel}
        />
      ) : (
        ""
      )}
    </form>
  );
}
export default AddToCart;
