import { ChangeEvent } from "react";

export interface inputInterface{
    type?:string,
    placeholder?:string,
    className?:string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    isValid ?:boolean,
    showError ?:string,
    value?:string
    onBlur?:any
    setError?:any
   
}
export interface buttonInterface{
    title?:string,
    className?:string,
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void
    style?:any

}
export  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // RootState interface for the entire Redux store
  export interface RootState {
    form: {
      editingMode: any;
      editeuser: User;
      user: User[];
      modal: boolean;
      id: number;
    };
  }
  
  // Payload interfaces for the formSlice reducers
  export  interface AddContactPayload {
    user1: any;
  }
  
  export interface GetIdPayload {
    id: number;
  }
  
  export  interface ChangeToEditPayload {
    edit: boolean;
    item: User;
  }
  
  export interface EditUserPayload {
    id: number;
    name: string;
    email: string;
  }
  
  export  interface SearchPayload {
    query: string;
  }
  
  // formSlice actions
  export  interface FormSliceActions {
    addContact: (payload: AddContactPayload) => void;
    getId: (payload: GetIdPayload) => void;
    delete: () => void;
    deletMOdal: (payload: boolean) => void;
    localstorageRead: () => void;
    removeEditing: () => void;
    changeToEdit: (payload: ChangeToEditPayload) => void;
    edituser: (payload: EditUserPayload) => void;
    cancel: () => void;
    search: (payload: SearchPayload) => void;
  }
  export interface InitialState {
    editingMode: boolean;
    editeuser: any
    user: {
      id: number;
      name: string;
      email: string;
      phone: string;
    }[] ;
    modal: boolean;
    id: number;
  }
  export interface LocalstorageReadAction {
    type: string;
    payload?: any;
  }