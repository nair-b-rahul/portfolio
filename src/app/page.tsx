import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";

export default function Home() {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <Navbar/>
            <Hero/>
        </main>
    );
}