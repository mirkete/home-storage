import "./Input.css"

export function Input({placeholder, style, onChange}){
    return(
        <input onChange={onChange} className="in-main" style={style} type="text" placeholder={placeholder} />
    )
}