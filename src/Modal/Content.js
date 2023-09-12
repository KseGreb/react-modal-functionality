import "./style.css"

const Content = ({setIsOpen}) => {
    return(
        <div className="modal_content">
            <p>Modal Content here</p>
            <button onClick={()=>setIsOpen(false)}>Close</button>
        </div>
    )
}
export default Content;