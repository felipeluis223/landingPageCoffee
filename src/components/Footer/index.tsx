import { RiWhatsappFill, RiInstagramFill, RiFacebookCircleFill, RiPhoneFill, RiMailAddFill } from 'react-icons/ri';

export default function Footer(){
    return(
        <section className="w-full h-[200px] flex flex-col justify-center items-end bg-[#000000]">
            <div className="w-full h-[40px] flex flex-row justify-center items-center gap-[15px] ">
                <RiWhatsappFill style={{fontSize: 25}} className="text-[#ffffff] hover:text-[#9d5631] hover:cursor-pointer"/>
                <RiInstagramFill style={{fontSize: 25}} className="text-[#ffffff] hover:text-[#9d5631] hover:cursor-pointer" />
                <RiFacebookCircleFill style={{fontSize: 25}} className="text-[#ffffff] hover:text-[#9d5631] hover:cursor-pointer" />
                <RiPhoneFill style={{fontSize: 25}} className="text-[#ffffff] hover:text-[#9d5631] hover:cursor-pointer" />
                <RiMailAddFill style={{fontSize: 25}} className="text-[#ffffff] hover:text-[#9d5631] hover:cursor-pointer" />
            </div>
            <div className="w-full h-[50px] flex flex-col justify-center items-center">
                <h3 className="text-sm text-[#ffffff]">© 2022 COFFEE HOUSE S.A. CNPJ 36.605.238/0001-98</h3>
                <h3 className="text-sm text-[#ffffff]">São Paulo, SP - CEP 17892-986</h3>
            </div>
        </section>
    )
}