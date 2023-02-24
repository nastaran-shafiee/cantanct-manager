import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddContactPayload,
  FormSliceActions,
  InitialState,
  LocalstorageReadAction,
  RootState,
  SearchPayload,
  User,
} from "../interFace";
import { configureStore } from "@reduxjs/toolkit";
// initiolstate---------------------------------------------------------------------------------
const initialState: InitialState = {
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
    addContact(state: InitialState, action: PayloadAction<AddContactPayload>) {
      state.user.push(action.payload.user1);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    // get id------------------------------------------------------
    getId(state, action) {
      state.id = action.payload;
    },
    // delete---------------------------------------------------------
    delete(state: InitialState) {
      let newcontact = state.user;
      newcontact = newcontact.filter((item: any) => item.id !== state.id);

      state.user = newcontact;
      localStorage.setItem("user", JSON.stringify(newcontact));
    },
    // delete modal
    deletMOdal(state, action) {
      state.modal = action.payload;
    },
    // edit-----------------------------------------------------

    // localstorage-----------------------------------------------------
    localstorageRead(state: InitialState) {
      state.user = JSON.parse(localStorage.getItem("user")!) || [];
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
      const updatedList = [...state.user];
      const index = updatedList.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        updatedList[index] = action.payload;
        state.user = updatedList;
        localStorage.setItem("user", JSON.stringify(updatedList));
      }
    },
    cancel(state) {
      state.user;
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
