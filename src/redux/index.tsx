import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
// initiolstate---------------------------------------------------------------------------------
const initialState = {
  editingMode: false,
  editeuser: {},
  user: [],
  modal: false,
  id: 0,
};
// form slice function---------------------------------------------------------------------------
const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    // add cantactcar-----------------------------------------
    addContact(state, action) {
      state.user.push(action.payload.user1);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    // get id------------------------------------------------------
    getId(state, action) {
      state.id = action.payload;
    },
    // delete---------------------------------------------------------
    delete(state) {
      let newcontact = state.user;
      newcontact = newcontact.filter((item) => item.id !== state.id);

      state.user = newcontact;
      localStorage.setItem("user", JSON.stringify(newcontact));
    },
    // delete modal
    deletMOdal(state, action) {
      state.modal = action.payload;
    },
    // edit-----------------------------------------------------

    // localstorage-----------------------------------------------------
    localstorageRead(state) {
      state.user = JSON.parse(localStorage.getItem("user")) || [];
    },
    // editting----------------------------------------
    removeEditing(state) {
      state.editingMode = false;
    },
    changeToEdit(state, action) {
      state.editingMode = action.payload.edit;
      state.editeuser = action.payload.item;
    },

    edituser(state, action) {
      let List = state.user;
      let number = List.findIndex((i) => i.id === action.payload.id);
      List.splice(number, 1, action.payload);
      state.user = List;
      localStorage.setItem("user", JSON.stringify(List));
    },
    cancel(state) {
      state.user;
    },

    search(state, action) {
      const query = action.payload.toLowerCase();
      state.user = JSON.parse(localStorage.getItem("user")) || [];
      if (query === "") return;
      state.user = state.user.filter((user) => {
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();
        return name.includes(query) || email.includes(query);
      });
    },
  },
});
// formslice action--------------------------------------------
export const formdispatch = formSlice.actions;
// store---------------------------------------------------------------------------------------------
const store = configureStore({
  reducer: { form: formSlice.reducer },
});

export default store;
