interface Products{
    name: string,
    value: number
}

export function CardItem(props:Products){
    const formatValue = (props.value).toFixed(2);
    const formatName = props.name;

    return (
        <div className="w-[250px] h-[280px] bg-[#f5f5f5] rounded-md">
            <h3 className="w-full h-[50px] flex justify-center items-center font-bold text-center text-xl text-[#000000]">{formatName}</h3>
                <div className="w-full h-[150px] flex justify-center items-center">
                    <img src={require("../../../../img/cafe.png")} className="h-[100px]" />
                </div>
                <div className="w-full h-[70px] pr-[10px] pl-[10px] flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold text-[#000000]">R$ {formatValue}</h3>
                    <button className="w-full p-[5px] bg-[#9d5631] rounded-[8px] mt-[10px] text-[#ffffff] shadow-xl">Adicionar</button>
            </div>
        </div>
    )
}