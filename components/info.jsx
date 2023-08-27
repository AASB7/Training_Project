

function Info() {
  return (
    <>
      
      <div className=" lg:block hidden   ">
      <img src="images/ai.png" ></img>
      </div> 
    

       
      <div className="justify-center  text-center ">
      <h2 className="h2 flex  sm:flex-nowrap justify-between bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent ">Let's Build something <br/> amazing with GPT-3 <br/>openAl </h2>
      <p className="text-sm sm:text-base">Yet bad any for travelling assistance indulgence unpleassing<br/> not throughts all exercise blessing  
      <br/>  way everything joy altereation boisterous the attachment  party<br/> we years to order allow asked of. </p> 
     </div>
     
     <div className=" flex  justify-center    sm:align-center  ">
     <input type="text"  className="email rounded-l-sm bg-gray-600 text-white  sm:text-left  xl:w-1/2 h-10 py-6 ml-4 sm:w-20 lg:w-29 lg:right-10" value={' your Email Address'} ></input>
     <button   className="Get rounded-r-sm h-19 px-4  sm:w-14 xl:w-32 text-slate-100  bg-orange-600 font-bold md:w-45" > Get started </button>
    </div>
    
 


<div className=" justify-center flex items-center  space-x-4  md:grid-cols-2 m-5  "> 
  <img src="images/people.png" className="w-20  "></img>
 <p className="p1 text-center sm:text-left">1,600 poples requested access a visit in last 24 hours  </p>
</div>
 <div  className=" flex items-center justify-center  gap-5   ">
  <img  className="w-14 " src="images/google.png"></img>
  <img className="w-14"  src="images/slack.png"></img>
  <img className="w-14"  src="images/atlassian.png"></img>
  <img className="w-14"  src="images/dropbox.png"></img>
  <img  className="w-14"  src="images/shopify.png"></img>
 </div>

    </>
  );
}
export default Info