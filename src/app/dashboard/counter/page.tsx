import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: 'Shopping Cart Counter',
  description: 'Pagina para demostrar un contador',
};

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos ene el carrito de compras</span>
      <CartCounter value={20} />
    </div>
  );
}