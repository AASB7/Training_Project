import Content from "@/components/Content";
import GptSection from "@/components/GptSection";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <div className='bg-color-bg'>
                <Navbar />
                <GptSection />
                <Content />
            </div>
        </>
    );
}
