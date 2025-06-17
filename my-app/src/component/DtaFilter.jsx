
import { useState } from "react";
const ProductList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
export function Products() {
  const [filterProducts, setFilterProducts] = useState(ProductList);
  const [search, setSearch] = useState("");
  console.log(search);
 const filterData = ProductList.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          if (e.target.value == "All") {
            setFilterProducts(ProductList);
          } else {
            let filterProducts = ProductList.filter((item) => {
              if (item.category == e.target.value) {
                return item;
              }
            });
            setFilterProducts(filterProducts);
          }
        }}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value={"Vegetables"}>Vegitable</option>
      </select>
      <input
        value={search}
        onChange={(e) => {
           setSearch(e.target.value)
           setFilterProducts(filterData)
        }}
      />
      <input
        type="checkbox"
        onChange={(e) => {
          console.log(e.target.checked);
          if (e.target.checked) {
            let stockeditems = ProductList.filter((item) => {
              if (item.stocked == true) {
                return item;
              }
            });
            console.log(stockeditems);
            setFilterProducts(stockeditems);
          } else {
            setFilterProducts(ProductList);
          }
        }}
      />
      <table className="table">
        <tbody>
          {filterProducts.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  backgroundColor: item.stocked == false ? "blue" : "green",
                  color: item.stocked == false ? "red" : "blue",
                }}
              >
                {item.name}
              </td>
              <td style={{ color: item.price == false ? "red" : "blue" }}>
                {item.price}
              </td>
              <td>{item.stocked ? "available" : "not available"}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}