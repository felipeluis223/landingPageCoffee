import { BsFillCartFill } from 'react-icons/bs';

export default function CartButton(){
    return (
        <button className="w-[60px] h-[60px] bg-[#ffffff] bottom-[10px] right-[10px] fixed flex justify-center items-center rounded-full">
            <BsFillCartFill style={{fontSize: 25}} className="text-[#000000] hover:text-[#9d5631]"/>
        </button>
    );
}