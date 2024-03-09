export function sortProductsCheapToExpensive(products: any) {
    return products.slice().sort((a: any, b: any) => a.price - b.price);
  }

export  function sortProductsExpensiveToCheap(products: any) {
    return products.slice().sort((a: any, b: any) => b.price - a.price);
  }