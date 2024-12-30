'use client'
import { Button } from "@/components/ui/button";
export default function Home() {
const handleClick = () =>
  alert (' THANK U FOR VISITING MY PORTFOLIO ( ●◡● )')
  return (
    <>
    <div className="bg-sky-600  h-fit"><br/>
    <div className="   ml-96 mr-96 bg-gray-800 text-center px-11 py-5 rounded-md hover:bg-accent hover:text-accent-foreground hover:bg-red-800 text-cyan-50  ">
    <h1><center><b>
        MY PORTFOLIO
        </b>
        </center>
      </h1></div>
      
      
    <div className="max-w-screen-lg m-auto h-96 py-5 px-5 my-10 text-center text-2xl rounded-2xl bg-white shadow-[0px_8px_48px_rgba(0,0,0,0,25)] mt-1">
<div className=" text-black bg-emerald-400 text-center px-11 py-5 rounded-md hover:bg-accent hover:text-accent-foreground hover:bg-lime-800 hover:text-white"> 
    <p><b><i> Name : Abdul Rafay 
    </i>
      </b></p>
    </div>
   
    <div className=" m-2 text-black bg-emerald-400 text-center px-11 py-5 rounded-md hover:bg-accent hover:text-accent-foreground hover:bg-lime-800 hover:text-white">
    <p><b><i> Age : 17
    </i>
      </b></p>
    </div>

    <div className=" m-3 text-black bg-emerald-400 text-center px-11 py-5 rounded-md hover:bg-accent hover:text-accent-foreground hover:bg-lime-800 hover:text-white">
    <p><b><i> IT CLASS ROLL NO : 442540
    </i>
      </b></p>
    </div>

    <div className=" m-4 text-black bg-emerald-400 text-center px-11 py-5 rounded-md hover:bg-accent hover:text-accent-foreground hover:bg-lime-800 hover:text-white">
    <p><b><i> COURSES : WEB DEVELOPMENT ( HTML , CSS , JAVASCRIPT , NEXTJS ) by : GOVERNOR SINDH IT COURSE
    </i>
      </b></p>
    </div>
    </div>
  <div className="ml-44 mr-44 rounded-lg"> <div className="text-center -mt-9 bg-black ml-96 mr-96 place-content-center "><Button onClick={handleClick}> Click Me</Button></div> 
  </div> 
  <br/>
  <br/>
  <br/>
   </div>
    </>
  );
}
