
import { PlusSquare } from 'lucide-react';
export default function CardProdutos({produtos}){
    const {produto, imagemProd, preco} = produtos
    return(
        <div className=' flex-none flex-row inline-grid justify-items-start items-start'>
            <div className="flex flex-col items-center  ml-5 w-48 h-75 mt-5 relative border border-solid border-zinc-300 rounded-lg bg-white">
                <div className="m-5">
                    <img className="block w-24 h-20 rounded" src={imagemProd} alt="produto"/>
                </div>
                <span className=" text-center my-5">
                    {produto}
                </span>

                <div className="flex flex-wrap justify-between my-15 py-5 gap-16">
                    <div className="justify-self-start items-center font-bold"> 
                    R$ {preco.toFixed(2)}
                    </div>

                    <div className="justify-self-end items-center ">
                    <a href="#"><PlusSquare color="#60a5fa"/></a>
                    </div>
                    </div>
            </div>
        </div>
    )
}