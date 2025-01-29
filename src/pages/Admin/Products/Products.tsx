import { useEffect, useState } from "react";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../../component/dataTable/DataTable";
import Add from "../../../component/Add/Add";
import { products } from "../../../data";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux_hooks";
import { getProducts } from "../../../redux/features/products/thunk";
const Products = () => {
  const [open, setOpen] = useState<any>(false);
  const dispatch = useAppDispatch()
  const {allproduct} = useAppSelector(s=>s.productData)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 150,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 150,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 150,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

  console.log(allproduct,'allproduct')

  useEffect(()=>{
    dispatch(getProducts(null))
  },[])

  return (
    <>
      <div className="products">
        <div className="info">
          <h1>Products</h1>
          <button onClick={() => setOpen(true)}>Add new Product</button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
        {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
      </div>
    </>
  );
};

export default Products;
