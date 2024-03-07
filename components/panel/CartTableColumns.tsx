import { IProducts } from '@/types/products/Iproducts';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';

export const columns: TableColumnsType<IProducts> = [
    {
      title: <div className='text-center'>Product</div>,
      dataIndex: "title",
      key : "title",
      width : "20%" ,
      render: (text) => <div className='text-center'>{text}</div>,
    },
    {
      title: <div className='text-center'>Price</div>,
      dataIndex: "price",
      key: "price" ,
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },
      render: (text) => <div className='text-center'>{text}$</div>,
      width: "10%"
    },
    {
      title: <div className='text-center'>Count</div>,
      dataIndex: "count",
      key : "count",
      sorter: {
        compare: (a, b) => a.count - b.count,
        multiple: 3,
      },
      render: (text) => <div className='text-center'>{text}</div>,
      width : "5%"
  
    },
    {
      title: <div className='text-center'>Category</div>,
      dataIndex: "category",
      width : "15%",
      render: (text) => <div className='text-center'>{text}</div>,
      key : "category"
 
    },
    {
      title: <div className='text-center'>Product Image</div>,
      dataIndex: "image",
      width : "15%",
      render: (text) => <div className='flex justify-center'><img alt="product" src={text} className='w-8 h-10'/></div>,
      key: "image"
    },
    Table.EXPAND_COLUMN,
  ];