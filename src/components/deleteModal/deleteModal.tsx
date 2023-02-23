import { useDispatch, useSelector } from "react-redux";
import { formdispatch } from "../../redux";
import { ToastContainer, toast } from "react-toastify";
function DeleteModal() {
  const modal = useSelector((state) => state.form.modal);
  const dispatch = useDispatch();
  // close function----------------------------------------------------
  function close() {
    dispatch(formdispatch.deletMOdal(false));
  }
  function deletehandle() {
    dispatch(formdispatch.delete());
    dispatch(formdispatch.deletMOdal(false));
    toast("contact deleted");
  }
  // return function----------------------------------------
  return (
    <div className="deleteModal">
      <div className="leanerModal">
        <p> Are you sure to delete this Contact</p>
        <div className="btnContainer">
          {" "}
          <button onClick={deletehandle} className="yes">
            yes
          </button>
          <button onClick={close} className="no">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
