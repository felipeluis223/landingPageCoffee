import { CardItem } from "./CardItem";
import productsJSON from "./products.json";

export default function Cards(){
    const products = productsJSON.products;
    
    return (
        <>
            {
                products.map((product, index)=>(
                    <CardItem name={product.name} value={product.value} key={index}/>
                ))
            }
        </>    
    );
}