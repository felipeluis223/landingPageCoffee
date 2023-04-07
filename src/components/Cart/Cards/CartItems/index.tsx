import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function CartItem(){
    const products = {
        qtde: 2,
        name: 'Café tradicional',
        value: 2.5
    }
    return(
        <div className="w-full h-[25px] hover:bg-[#161616] hover:cursor-pointer text-[#ffffff] hover:text-[#ffffff] hover:h-[60px] flex justify-between items-center pl-[10px] pr-[10px] duration-300">
            <span>{products.name}</span>
            <span className="flex flex-row items-center gap-[10px]">
                <button><BsDashCircle /></button>
                {products.qtde}x
                <button><BsPlusCircle /></button>
            </span>
            <span>R$ {products.value}</span>
        </div>
    );
}