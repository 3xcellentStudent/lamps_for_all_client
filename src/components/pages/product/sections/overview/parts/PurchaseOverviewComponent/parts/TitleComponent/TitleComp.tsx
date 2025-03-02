import RatingComp from "@/components/pages/product/common/RatingComp/RatingComp";
import { ProductDataType } from "@/types/main/productData.type";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function TitleComp(){

  const {category, title, rating, price, countOfReviews} = useSelector(({
    productData: {title, rating, stockInfo}
  }: {productData: ProductDataType}) => ({title, rating, ...stockInfo}))

  const sxBox = {display: "flex", justifyContent: "space-between", width: "min-content", flexDirection: "column", alignItems: "start"}

  return(
    <Box sx={sxBox}>
      <div className="flex flex-row items-end mb-2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-xs uppercase mb-1 ml-3 whitespace-nowrap">{category}</h3>
      </div>
      <RatingComp size="medium" rating={rating} content={`${countOfReviews} reviews`} />

      <h5 className="uppercase mt-4 text-3xl" >${price} CAD</h5>

      <div className="w-[100px] "></div>
    </Box>
  )
}