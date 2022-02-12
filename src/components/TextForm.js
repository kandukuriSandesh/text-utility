import React, { useState } from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("");
    let newText = ""
    var hello = "disabled";

    const onClickUpHandler = (e)=> {
        newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to UpperCase","success");
    }

    const onClickLoHandler = (e)=> {
        newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to LowerCase","success");
    }
    
    const onClickClearHandler =(e) =>{
        newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    
    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied..!","success");
    }

  //  {`${text} ?disabled:false `}
  return (
      <>
    <div className='container my-2 ' style ={{color:props.mode ==="dark"?"white":"black"}} >
      
        <div className="mb-3">
           <h2>Enter your Text Here</h2>
            <textarea className="form-control" value={text} onChange={onChangeHandler} style ={{backgroundColor:props.mode ==="dark"?"#bfbfbf":"white",color:props.mode ==="dark"?"#3d3d3d":"black"}}  id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={onClickUpHandler} disabled = {text?false:true}  >Click for UpperCase</button>
        <button className="btn btn-dark mx-1 " onClick={onClickLoHandler}  disabled = {text?false:true} >Click for UpperCase</button>
        <button className="btn btn-dark mx-1 " onClick={onClickClearHandler}  disabled = {text?false:true} >Clear Text</button>
        <button className="btn btn-dark mx-1 " onClick={handleCopy}  disabled = {text?false:true} >Copy Text</button>
       
    </div>
     <div className="container my-2">
        <h3>Text Summary</h3> 
        <p>Word Count :- {text?text.split(" ").filter((ele) => ele !== "" ).length:""} || Character Length :- {text?text.length:""} </p>

        <h3>Text Preview</h3>
        <p>{text}</p>
     </div>

     </>
  )
}
