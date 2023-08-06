import GptSection from '@/components/GptSection'
import Navbar from '@/components/Navbar'
import Blogs from '@/components/Blogs'


export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-color-bg">

      <Navbar/>
     <GptSection/>
     
    <Blogs/>
   

    </div>
    </>
  )
}
