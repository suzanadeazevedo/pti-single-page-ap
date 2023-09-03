import CardProdutos from "@/components/CardProdutos";

const produtos = [
  {
    produto: "Macarrão e Mariscos",
    preco: 25,
    imagemProd:"https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    produto: "Macarrão de Arroz",
    preco: 35,
    imagemProd:"https://images.pexels.com/photos/16678262/pexels-photo-16678262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    produto: "Lamem Sortido",
    preco: 50,
    imagemProd:"https://images.pexels.com/photos/6125797/pexels-photo-6125797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

export default function Home() {
  return (
    <>
    <main>
      <section>
        {produtos.map(produtos => <CardProdutos produtos={produtos}/>)}
      </section>
    </main>
    </>
  )
}
