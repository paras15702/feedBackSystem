import {useState ,useRef} from "react";
import db from "./FireBaseConfig";
import {ref,set} from "firebase/database";

function Feedback()
{	
	const rName=useRef();
	const[name,setName]=useState("");
	const [feedback,setFeedback]=useState("excellent");


	const hName=(event)=>{setName(event.target.value);}
	const hFeedback=(event)=>{setFeedback(event.target.value);}


	const save = (event) =>{
		
		event.preventDefault();
		let data={name,feedback};
		let node = name +"==> "+new Date().toString();
		let r=ref(db,"feedback/"+node);
		set(r,data);
		alert("THANK YOU");
		setName("");
		setFeedback("");
		rName.current.focus();
		
		
	}


	return(
		<>
			<center>
				<h1>Feedback Please</h1>	
				<form onSubmit={save}>
					<input type="text" placeholder="enter ur name" onChange={hName} value={name} ref={rName}/>
					<br/><br/>
					<input type="radio" name="f" value="excellent" checked={feedback=="excellent"} onChange={hFeedback}/>Excellent
					<br/><br/>
					<input type="radio" name="f" value="good" onChange={hFeedback}/>Good
					<br/><br/>
					<input type="radio" name="f" value="ok"  onChange={hFeedback}/>OK
					<br/><br/>
					<input type="submit"/>
				</form>
			</center>
		</>
	
	);
}

export default Feedback;		