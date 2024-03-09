import React from "react";
import { Select } from 'antd';

const FilterProducts = ({data , handleChange} : any) => {
 

  function sortProductsCheapToExpensive(products : any) {
    return products.sort((a : any, b : any) => a.price - b.price);
  }
  
  function sortProductsExpensiveToCheap(products : any) {
    return products.slice().sort((a:any, b:any) => b.price - a.price);
  }
//   const handleChange = (value: string) => {
//     console.log(`selected ${value}`);
//     if(value === "expensive"){
//         sortProductsExpensiveToCheap(data)
//     } else if(value === "cheap"){
//         const cheapToExpensive = sortProductsCheapToExpensive(data);
//         console.log("cheapToExpensive" , cheapToExpensive)
//     }
//   };
  return (
    <div>
      <Select
        placeholder="Expensive"
        optionFilterProp="children"
        className="w-full"
        // filterOption={filterOption}
        onChange={handleChange}
        options={[
          {
            value: "expensive",
            label: "Expensive",
          },
          {
            value: "cheap",
            label: "Cheap",
          } , 
          {
            value : "none" ,
            label : "None"
          }
        ]}
      />
    </div>
  );
};

export default FilterProducts;
