export interface inputInterface{
    type?:string,
    placeholder?:string,
    className?:string
}
export interface buttonInterface{
    title?:string,
    className?:string,
    onClick?:(event: React.MouseEvent<HTMLElement>)=>void

}