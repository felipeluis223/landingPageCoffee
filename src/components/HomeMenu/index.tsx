import Cards from "./Cards";

export default function HomeMenu(){
    return (
        <section className="w-full bg-[#000000]">
            <h3 className="w-full h-[120px] text-center text-[#ffffff] text-4xl font-bold flex justify-center items-center">Conheça nossos produtos</h3>
            <div className="w-full min-h-[600px] flex justify-center gap-[25px] flex-wrap">
                <Cards />
            </div>
        </section>
    );
}