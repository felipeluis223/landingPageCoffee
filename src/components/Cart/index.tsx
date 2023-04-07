import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { BsFillCartFill } from 'react-icons/bs';
import CartCard from './Cards';

export default function CartButton(){
    const [ showCartModal, setShowCartModal ] = useState(false);
    const handleCartModal = () => setShowCartModal(!showCartModal);
    
    return (
        <>
            {
                showCartModal &&(
                    <section className="w-[300px] h-[400px] bg-[#242424] fixed bottom-[10px] right-[10px] rounded-lg">
                        <div className="w-full h-[40px] flex justify-end">
                            <button className="w-[50px] h-full hover:text-[#9d5631] flex justify-center items-center" onClick={handleCartModal}>
                                <RiCloseFill style={{fontSize: 25}}/>
                            </button>
                        </div>

                        <CartCard />
                    </section>
                )
            }
            {
                !showCartModal &&(
                    <button className="w-[60px] h-[60px] bg-[#ffffff] bottom-[10px] right-[10px] fixed flex justify-center items-center rounded-full" onClick={handleCartModal}>
                        <BsFillCartFill style={{fontSize: 25}} className="text-[#000000] hover:text-[#9d5631]"/>
                    </button>
                )
            }
        </>
    );
}