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
    style:any

}