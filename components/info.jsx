function Info() {
  return (
  
    <div  className="mt-5 mb-8 lg:mx-14 "> 
     <div >
        <img
          src="images/ai.png"
          alt="صورة"
          className="w-1/3 float-right mr-14 mt-10 my-9 lg:block hidden "
        />
        </div>
      <div className=" text-left  container mx-auto px-6  flex-col ml-14 ">
        <h1 className="text-5xl h-69 font-bold mt-19 text-gray-700  mb-9 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent"> Let's Build something<br/>amazing with GPT-3<br/>openAl</h1>
        <p className="text-md ml-5 text-gray-500 mb-8  color-text">yet bad any for travelling assistance indulgence unpleassing <br/> 
        not throughts all exercise blessing<br/>way everything joy altereation boisterous the attachment party<br/>
        we years to order allow asked of.  </p>
        </div> 
      
        
        <div className="mb-6 ml-20 ">
         <input 
          type="enter" value={'your email address' }
          className="bg-gray-500  text-gray-700 border-orange-400 rounded-l-sm px-28 py-3 text-left ml-7 "
          placeholder="Input"
        />
        <button className="bg-orange-600 text-white px-2 py-3 md:text-base  md:px-12 sm:px-7  text-bold text-left mr-2 rounded-r-sm " >
          Git Started
        </button>
        </div>
      
        <div className=" flex  mb-10 gap-5 ml-14">
        <img
         src="images/people.png"
         alt="صورة"
        className="w-20 md:w-30 lg:w-1/6 mr-4 mb-4 float-right ml-14 mr-8"/>
        <p className="text-xs mt-2 text-left text-white ">1,600 proples requsted access a visit in last 24 hours </p>
        </div>
       
        <div className="flex  mb-8 items-center justify-center gap-4 ml-40">
  <img
    src="images/google.png"
    alt="صورة1"
    className="w-14 md:w-30 lg:w-1/7 mr-4 mb-4"
  />
  <img
    src="images/slack.png"
    alt="صورة2"
    className="w-20 md:w-30 lg:w-1/7 mr-4 mb-4"
  />
  <img
    src="images/atlassian.png"
    alt="صورة3"
    className="w-20 md:w-30 lg:w-1/7 mr-4 mb-4"
  />
  <img
    src="images/dropbox.png"
    alt="صورة4"
    className="w-20 md:w-30 lg:w-1/7 mr-4 mb-4"
  />
  <img
    src="images/shopify.png"
    alt="صورة5"
    className="w-15 md:w-30 lg:w-1/7 mr-4 mb-4"
  />
</div>
      
    </div>
  );
}

export default Info