import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function EventPage(){
    return(
        <> 
        <Header/>
        <div className="py-44 px-5 bg-[url('/event.webp')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

            <div className="relative space-y-10 text-center">
            <div className="w-full border border-white aspect-square max-w-[500px] mx-auto ">
            <img src="/event.webp" alt="image" className="object-cover w-full h-full" />
        </div>
        <button className="inline-block mx-auto text-ivory bg-black py-5 px-10 text-center">
            <a href="/purchase" className="block">Buy Ticket</a>
        </button>

            </div>
        </div>
        <Footer/>
        </>

    )
}