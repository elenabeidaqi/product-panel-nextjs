import {useCart} from "@/store/useCart";
import { ProductOutlined, ShoppingCartOutlined } from "@ant-design/icons";
interface ICount{
    count : number
}
const NavBar = () => {
  const { count }: any = useCart();
  return (
    <div className="w-full bg-blue-200 h-11 flex justify-between fixed z-30">
      <div className="flex gap-2 items-center px-8 py-2">
        <div className="text-zinc-800 text-lg">Products Panel</div>
        <ProductOutlined className="text-lg" />
      </div>
      <div className="px-8 py-2 relative cursor-pointer">
        {count() ? <div className="bg-red-600 w-[17px] h-[17px] text-white rounded-[2rem] text-center text-sm absolute bottom-6 flex items-center justify-center">
          <div>{count()}</div>
        </div> : null}
        <ShoppingCartOutlined className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
