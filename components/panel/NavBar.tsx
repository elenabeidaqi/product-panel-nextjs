"use client";
import { useCart } from "@/store/useCart";
import { ProductOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Popconfirm, message } from "antd";

interface ICount {
  count: number;
}
const NavBar = () => {
  const { count } = useCart();
  const router = useRouter();

  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    message.success("You logging out successfully");
    Cookies.remove("token");
    router.push("/auth");
  };

  return (
    <div className="w-full bg-blue-200 h-11 flex justify-between sticky overflow-hidden">
      <Link className="flex gap-2 items-center px-8 py-2" href={"/panel"}>
        <div className="text-zinc-800 xl:text-lg lg:text-lg md:text-lg sm:text-base">Products Panel</div>
        <ProductOutlined className="text-lg" />
      </Link>
      <div className="flex flex-row-reverse gap-2">
        <Link
          className="px-8 py-2 relative cursor-pointer"
          href={"/panel/cart"}
        >
          {count() ? (
            <div className="bg-red-600 w-[18px] h-[18px] text-white rounded-[2rem] text-center text-sm absolute bottom-6 flex items-center justify-center">
              <div>{count()}</div>
            </div>
          ) : null}
          <ShoppingCartOutlined className="text-2xl" />
        </Link>
        <div className="px-8 py-2">
          <Popconfirm
            title="Logout"
            description="Are you sure?"
            //@ts-ignore
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <button className="xl:w-28 lg:w-28 md:w-28 sm:w-24 bg-blue-500 text-white text-center rounded-md h-7 hover:bg-blue-600">
              Logout
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
