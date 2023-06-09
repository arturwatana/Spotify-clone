export default function Footer() {
  return (
    <footer className="fixed z-10 text-white top-93% h-full bg-gradient-to-r from-pink-500 to-blue-500 w-full p-3 flex justify-between ">
      <div>
        <p className="text-sm">TESTAR O PREMIUM DE GRACA</p>
        <p>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <div>
        <button className=" bg-white text-neutral-900 rounded-full text-center h-12 w-48 mr-4 font-bold hover:scale-105">
          Inscreva-se grátis
        </button>
      </div>
    </footer>
  );
}
