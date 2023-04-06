export default function Navbar(){
    return (
        <header className="w-full h-[80px] flex flex-row bg-[#000000] sticky top-0">
            <div className="w-[70%] h-full pl-[40px]">
                <ul className="w-full h-full flex flex-row items-center gap-[10px]">
                    <li className="pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[#ffffff] hover:border-b-2 border-[#9d5631] hover:text-[#9d5631] transition ease-in-out duration-500"><button>Início</button></li>
                    <li className="pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[#ffffff] hover:border-b-2 border-[#9d5631] hover:text-[#9d5631] transition ease-in-out duration-500"><button>Cardápio</button></li>
                    <li className="pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[#ffffff] hover:border-b-2 border-[#9d5631] hover:text-[#9d5631] transition ease-in-out duration-500"><button>Quem somos?</button></li>
                </ul>
            </div>

            <div className="w-[30%] h-full pr-[40px]">
                <ul className="w-full h-full flex flex-row justify-end items-center gap-[10px]">
                    <li className="pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[#ffffff] hover:border-b-2 border-[#9d5631] hover:text-[#9d5631] transition ease-in-out duration-500"><button>Contato</button></li>
                    <li className="pl-[15px] pr-[15px] pt-[5px] pb-[5px] text-[#ffffff] hover:border-b-2 border-[#9d5631] hover:text-[#9d5631] transition ease-in-out duration-500"><button>Ajuda</button></li>
                </ul>
            </div>
        </header>
    );
}