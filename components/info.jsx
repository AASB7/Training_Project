

function Info() {
  return (
    <>
      
      <div className=" lg:block hidden justify-center  text-center ">
      <img src="images/ai.png" ></img>
      </div> 
    

       
      <div className="justify-center  text-center ">
      <h2 className="h2 flex flex-wrap sm:flex-nowrap justify-between bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent ">Let's Build something <br/> amazing with GPT-3 <br/>openAl </h2>
      <p className="text-sm sm:text-base">Yet bad any for travelling assistance indulgence unpleassing<br/> not throughts all exercise blessing  
      <br/>  way everything joy altereation boisterous the attachment  party<br/> we years to order allow asked of. </p> 
     </div>
     
     <div className=" flex items-left justify-center  sm:align-center ">
     <input type="text"  className="email bg-gray-500 text-white sm:text-left xl:w-1/2 h-10 py-4 ml-4 sm:w-20 " value={' your Email Address'} ></input>
     <button   className="Get  h-10 px-4  sm:w-14 xl:w-32  bg-orange-600 font-bold " > Get started </button>
    </div>
    
 


<div className="peoples justify-center text-center items-center    md:grid-cols-2 m-5 flex  "> 
  <img src="images/people.png" className="people1 text-center w-20"></img>
 <p className="p1 text-center sm:text-left">1,600 poples requested access a visit in last 24 hours  </p>
</div>
 <div  className=" flex justify-center items-center gap-5  ">
  <img  className="w-20" src="images/google.png"></img>
  <img className="w-20"  src="images/slack.png"></img>
  <img className="w-20"  src="images/atlassian.png"></img>
  <img className="w-20"  src="images/dropbox.png"></img>
  <img  className="w-20"  src="images/shopify.png"></img>
 </div>

    </>
  );
}
export default Info