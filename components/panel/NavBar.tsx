'use client';
import {useCart} from "@/store/useCart";
import { ProductOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";


interface ICount{
    count : number
}
const NavBar = () => {
  const { count } = useCart();
  
  return (
    <div className="w-full bg-blue-200 h-11 flex justify-between sticky">
      <Link className="flex gap-2 items-center px-8 py-2" href={"/panel"}>
        <div className="text-zinc-800 text-lg">Products Panel</div>
        <ProductOutlined className="text-lg" />
      </Link>
      <Link className="px-8 py-2 relative cursor-pointer" href={"/panel/cart"}>
        {count() ? <div className="bg-red-600 w-[18px] h-[18px] text-white rounded-[2rem] text-center text-sm absolute bottom-6 flex items-center justify-center">
          <div>{count()}</div>
        </div> : null}
        <ShoppingCartOutlined className="text-2xl" />
      </Link>
    </div>
  );
};

export default NavBar;
