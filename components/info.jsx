

function Info() {
  return (
    <>
      
      <div className=" lg:block hidden justify-center  text-center ">
      <img src="images/ai.png" ></img>
      </div> 
    

       
      <div className="justify-center  text-center ">
      <h2 className="h2 flex flex-wrap sm:flex-nowrap justify-between  ">Let's Build something <br/> amazing with GPT-3 <br/>openAl </h2>
      <p className="text-sm sm:text-base">Yet bad any for travelling assistance indulgence unpleassing<br/> not throughts all exercise blessing  
      <br/>  way everything joy altereation boisterous the attachment  party<br/> we years to order allow asked of. </p> 
     </div>
     <div className="justify-center  text-center  sm:grid-cols-2 gap-4 ">
     <input type="text"   className="email  sm:mt-1 w-full  " value={'enter your email'} ></input>
     <button   className="Get " > Get started </button>
    </div>
    
 


<div className="peoples justify-center text-center  flex flex-col sm:flex-row items-center gap-4"> 
  <img src="images/people.png" className="people1 text-center "></img>
 <p className="p1 text-center sm:text-left">1,600 poples requested access a visit in last 24 hours  </p>
</div>
 <div  className=" flex justify-center items-center gap-3  grid-cols-1 sm:grid-cols-5  ">
  <img  className="w-20 " src="images/google.png"></img>
  <img className="w-20"  src="images/slack.png"></img>
  <img className="w-20"  src="images/atlassian.png"></img>
  <img className="w-20"  src="images/dropbox.png"></img>
  <img  className="w-20"  src="images/shopify.png"></img>
 </div>

    </>
  );
}
export default Info