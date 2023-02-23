import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formdispatch } from "../../redux";
// show function-------------------------------------------------------
function Show() {
  const result = useSelector((state) => state.form.user);
  const dispatch = useDispatch();
  //delete---------------------------------------------------------------------
  function deletIcone(id) {
    dispatch(formdispatch.getId(id));
    dispatch(formdispatch.deletMOdal(true));
  }
  function editIcone(item) {
    const edit = true;
    dispatch(formdispatch.changeToEdit({ item, edit }));
  }
  // return function--------------------------------------------------------------
  return (
    <>
      {result.map((item: any) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.family}</td>
            <td>{item.phone}</td>
            <td>{item.relation}</td>

            <td>{item.email}</td>
            <td>
              <Icon
                icon="ion:trash"
                width="25"
                height="25"
                onClick={() => {
                  deletIcone(item.id);
                }}
              />
            </td>
            <td>
              <Icon
                icon="material-symbols:edit"
                width="25"
                height="25"
                onClick={() => {
                  editIcone(item);
                }}
              />
            </td>
          </tr>
        );
      })}
    </>
  );
}
export default Show;
