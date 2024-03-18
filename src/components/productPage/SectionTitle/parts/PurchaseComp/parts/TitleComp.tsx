import TypographyComp from "@/components/common/TypographyComp";
import RatingComp from "@/components/productPage/common/RatingComp";
import { TitleCompType } from "@/types/productPage.types/sectionTitle/purchasePart/purchaseComp";

interface Props {
  titleC: TitleCompType
  category: {id: string, name: string}
  title: string
  rating: number
}

export default function TitleComp({titleC: {sxBox, ratingC}, category, title, rating}: Props){

  return(
    <TypographyComp cls='' sx={sxBox} comp="div" >
      <h3 className="text-xs uppercase">{category?.name}</h3>
      <h2 className="text-3xl font-bold">{title}</h2>
      <RatingComp size="small" clsBox="mt-3" rating={rating} props={ratingC}/>
    </TypographyComp>
  )
}