import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { IProducts } from "@/types/products/Iproducts";
import { columns } from "./CartTableColumns";

const CartTable = ({ data }: any) => {
  const onChange: TableProps<IProducts>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  console.log("table data", data);
  const newData = data.map((product : IProducts, index : number) => ({...product , key: index+1}))
  return (
    <div>
      <Table
        columns={columns}
        dataSource={newData}
        onChange={onChange}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <p key={record.id} style={{ margin: 0 }}>
              {record.description}
            </p>
          ),
        }}
      />
    </div>
  );
};

export default CartTable;
