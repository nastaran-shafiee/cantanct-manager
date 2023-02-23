import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./App.css";
import AddToCart from "./components/addToCart";
import Contacts from "./components/Contacts";
import DeleteModal from "./components/deleteModal/deleteModal";
import { useDispatch, useSelector } from "react-redux";
import { formdispatch } from "./redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [changeThem, setChangeThem] = useState(true);
  const modal = useSelector((state) => state.form.modal);
 
  const dispatch = useDispatch();
  // useefect
  useEffect(() => {
    dispatch(formdispatch.localstorageRead());
  }, [dispatch]);
  // day function-----------------------------------------
  function day() {
    setChangeThem(true);
  }
  // night function-----------------------------------------
  function night() {
    setChangeThem(false);
  }
  //return function----------------------------------------
  return (
    <div className={changeThem ? "App2" : "App"}>
      <div className={changeThem ? "leanear2" : "leanear"}>
        <ToastContainer />
        {modal && <DeleteModal />}
        <div className="navbar">
          <h3>
            Phone Book <i className="far fa-address-book"></i>
          </h3>
          <div>
            {" "}
            <Icon
              icon="fluent-emoji:sun-with-face"
              width="50"
              height="50"
              onClick={day}
            />
            <Icon
              icon="fluent-emoji-flat:first-quarter-moon-face"
              width="50"
              height="50"
              onClick={night}
            />
          </div>
        </div>
        <div className="row">
          <AddToCart />
          <Contacts changeThem={changeThem} />
        </div>
      </div>
    </div>
  );
}

export default App;
