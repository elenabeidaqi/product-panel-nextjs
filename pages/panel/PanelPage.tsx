"use client";
import ProductCard from "@/components/panel/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Spin } from "antd";

const PanelPage = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get(`${base_url}`).then((response) => response.data),
    staleTime: 60 * 1000, // 60s
    retry: 2,
  });
  console.log("products", products);
  if (isLoading) {
    return <div className="h-96 flex items-center justify-center">
      <Spin size="large"/>
    </div>;
  }
  if(error){
    console.log("error" , error)
  }
  return (
    <div className="flex justify-center flex-wrap gap-16 p-5 mt-20">
      {products?.map((product: any) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </div>
  );
};

export default PanelPage;
