import GptSection from '@/components/GptSection'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
    <div className="bg-color-bg">
    <h1 className="text-color-text">Welcome</h1>
    <Navbar/>
    <h3 className="text-color-text">Home Page , Hello</h3>
    <h3 className="text-color-text">Test App </h3>
    <p className="text-color-text">aryam</p>


    <GptSection/>
    </div>
    </>
  )
}
