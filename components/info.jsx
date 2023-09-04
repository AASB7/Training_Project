

function Info() {
  return (
  
    <div  className="mt-9 mb-8 mx-9"> 
     <div className="">
        <img
          src="images/ai.png"
          alt="صورة"
          className="w-1/3 float-right mr-14 my-8 lg:block hidden "
        />
        </div>
      <div className=" text-left ml-14 container mx-auto px-6  flex-col  ">
        <h1 className="text-5xl h-69 font-bold mt-19 text-gray-700 mb-9 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent"> Let's Build something<br/>amazing with GPT-3<br/>openAl</h1>
        <p className="text-md ml-5 text-gray-500 mb-4 color-text">yet bad any for travelling assistance indulgence unpleassing <br/> 
        not throughts all exercise blessing<br/>way everything joy altereation boisterous the attachment party<br/>
        we years to order allow asked of.  </p>
        </div> 
      
        
        <div className="mb-6 ml-20 mb-10">
         <input 
          type="enter" value={'your email address' }
          className="bg-gray-500  text-gray-700 border-orange-400 rounded-l-lg px-28 py-3"
          placeholder="Input"
        />
        <button className="bg-orange-600 text-white px-6 py-3 md:text-base  md:px-10 sm:px-10  text-left mr-2 rounded-r-lg " >
          Git Started
        </button>
        </div>
      
        <div className="justify-center flex items-center mb-10">
        <img
         src="images/people.png"
         alt="صورة"
        className="w-14 h-5  "/>
        <p className="text-xs text-right ">1,600 proples requsted access a visit in last 24 hours </p>
        </div>
       
        <div className="flex  items-center justify-center gap-4">
  <img
    src="images/google.png"
    alt="صورة1"
    className="w-14 md:w-30 lg:w-14 mr-4 mb-4"
  />
  <img
    src="images/slack.png"
    alt="صورة2"
    className="w-20 md:w-30 lg:w-14 mr-4 mb-4"
  />
  <img
    src="images/atlassian.png"
    alt="صورة3"
    className="w-20 md:w-30 lg:w-14 mr-4 mb-4"
  />
  <img
    src="images/dropbox.png"
    alt="صورة4"
    className="w-20 md:w-30 lg:w-14 mr-4 mb-4"
  />
  <img
    src="images/shopify.png"
    alt="صورة5"
    className="w-15 md:w-30 lg:w-14 mr-4 mb-4"
  />
</div>
      
    </div>
  );
}

export default Info