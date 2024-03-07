import { useCart } from "@/store/useCart";
import { IProductCardProps } from "@/types/props/IProductCardProps";
import {
  EllipsisOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const ProductCard = ({ data }: IProductCardProps) => {
  const { count } = useCart();
  console.log("count", count());
  const { add, remove, cart } = useCart();
  console.log("cart", cart);
  const showCount = cart.find(product => product.id === data.id)
  return (
    <div>
      <Card
        style={{ width: 250 }}
        cover={<img className="h-48 p-5" alt="products" src={data.image} />}
        actions={[
          <PlusOutlined onClick={() => add(data)} />,
          <MinusOutlined
            onClick={() => {
              remove(data.id);
            }}
          />,
          <div>{showCount?.count ? showCount?.count : "0"}</div>,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        className="border border-red-400"
      >
        <Meta title={data.title} description={`${data.price}$`} />
      </Card>
    </div>
  );
};

export default ProductCard;
