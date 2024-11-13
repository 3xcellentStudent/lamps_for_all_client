import RatingComp from "@/components/pages/productPage/common/RatingComp";
import { TitleCompType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp";
import { Box } from "@mui/material";

interface Props {
  titleC: TitleCompType
  category: {id: string, name: string}
  title: string
  rating: number
  price: string
}

export default function TitleComp({titleC: {ratingC}, category, title, rating, price}: Props){

  const sxBox = {display: "flex", justifyContent: "space-between", width: "min-content", flexDirection: "column", alignItems: "start"}

  return(
    <Box sx={sxBox}>
      <div className="flex flex-row items-end mb-2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <h3 className="text-xs uppercase mb-1 ml-3 whitespace-nowrap">{category?.name}</h3>
      </div>
      <RatingComp size="medium" rating={rating} props={ratingC}/>

      <h5 className="uppercase mt-6 text-3xl" >${price} CAD</h5>

      <div className="w-[100px] "></div>
    </Box>
  )
}