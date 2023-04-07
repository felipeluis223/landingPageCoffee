import CartItem from "./CartItems";

export default function CartCard(){
    return (
        <div className="w-full h-[300px] flex flex-col gap-[10px]">
            <div className="w-full h-[40px] flex justify-center items-center text-[#ffffff] font-bold text-xl">Visualizar carrinho</div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}