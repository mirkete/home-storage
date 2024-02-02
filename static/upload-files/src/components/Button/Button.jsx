import "./Button.css"

export function Button({type, children, style, onClick}){
    return(
        <button onClick={onClick} style={style} className={"bt-main " + type}>
            {children}
        </button>
    )
}