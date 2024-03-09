"use client";
import ProductCard from "@/components/panel/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Spin } from "antd";
import FilterProducts from "@/components/panel/FilterProducts";
import { sortProductsCheapToExpensive, sortProductsExpensiveToCheap } from "@/utils/filterProducts";

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
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isFilter, setIsFilter] = useState(false);
  console.log("products", products);
  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }
  if (error) {
    console.log("error", error);
  }

  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setIsFilter(true);
    if (value === "expensive") {
      const expensiveToCheap = sortProductsExpensiveToCheap(products);
      setFilteredData(expensiveToCheap);
    } else if (value === "cheap") {
      const cheapToExpensive = sortProductsCheapToExpensive(products);
      setFilteredData(cheapToExpensive);
    } else if (value === "none") {
      setFilteredData(products);
    }
  };
  return (
    <>
      <div className="mt-10 flex justify-end w-[90%] ">
        <FilterProducts handleChange={handleChange} data={products} />
      </div>
      <div className="flex justify-center flex-wrap gap-16 p-5 mt-20">
        {isFilter
          ? filteredData?.map((product: any) => (
              <ProductCard data={product} key={product.id} />
            ))
          : products?.map((product: any) => (
              <ProductCard data={product} key={product.id} />
            ))}
      </div>
    </>
  );
};

export default PanelPage;
