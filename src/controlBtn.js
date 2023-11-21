



function ControlBtn(props){
  
return(

    <div className="ControlBtn" onClick={props.onclick}>
            <button type="button">+1</button>
            <button type="button">-1</button>
            <button type="button">/2</button>
            <button type="button">*2</button>
        </div>
)

}
export default ControlBtn;