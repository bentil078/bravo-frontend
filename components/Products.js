import Product from "./component/Product";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [data, getData] = useState({ post: [] });
  useEffect(() => {
    axios
      .get("https://bravosfood.pythonanywhere.com/api/products/")
      .then((res) => {
        getData({
          post: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const product = data.post;
  return (
    <div>
      <div className="flex scrollbar-hide overflow-x-scroll ml-6 md:ml-10 lg:ml-20">
        {product.map((pro) => (
          <Product
            key={pro.id}
            Picture={pro.picture}
            title={pro.Product_name}
            price={pro.price}
            id={pro.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
