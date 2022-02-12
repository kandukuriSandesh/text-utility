import React,{useState,useEffect} from "react";

export default function About(props) {

    const white = {
            color:"black",
            backgroundColor:"white"
    }

    const black = {
        color:"white",
        backgroundColor:"#232323",
        border:"1px solid white"
}
    const [style,setStyle] = useState(white);

    useEffect(() => {
      if(props.mode==="dark"){
          setStyle(black);
      }
      else{
          setStyle(white);
      }
    }, [props.mode])
    

    // if(props.mode === "dark" ){
    //   setStyle(black);
    // }
    // else{
    //     setStyle(white);
    // }
  

    // const toggleStyle = ()=> {
    //     if(style.color ==="black"){
    //         setStyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border:"0.5px solid white"
    //            });
    //         setbtnText("Enable Light Mode");  
    //     }
    //     else{
    //         setStyle({
    //             color:"black",
    //             backgroundColor:"white",
                
    //            });
    //         setbtnText("Enable Dark Mode");  

    //     }
       
    // }
   
  return (
      
    <div className="container my-3 ">
     <div class="accordion" id="accordionExample" style={style} >
  <div class="accordion-item" style={style} >
    <h2 class="accordion-header" id="headingOne"  >
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
        Analyse your Text
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Text-Utility gives you a way to analyse your text quickly and Efficiently.Be it word count,character count 
      </div>
    </div>
  </div>
  <div class="accordion-item" style={style} >
    <h2 class="accordion-header" id="headingTwo">
      <button  style={style} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to uSe</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
            Text-Utility is a free character counter tool that provides instant character count and word count statistics for a given text.Text-Utility reports the number of words and characters.This it is suitable for writing text for range of Benefits
        </div>
    </div>
  </div>
  <div class="accordion-item" style={style}>
    <h2 class="accordion-header" id="headingThree">
      <button style={style} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatibility
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari,Opera. I suits to count characters in facebook, blog, books, excel document, pdf document,essays. etc
      </div>
    </div>
  </div>
</div>
 
    </div>
  );
}
