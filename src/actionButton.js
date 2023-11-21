function ActionButton(props){

return(
<button onClick={props.actionFunc}>
{props.action}
</button>

)


}

export default ActionButton;