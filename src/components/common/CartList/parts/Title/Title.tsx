import Link from "next/link";
import { OpenInNew as OpenInNewIcon, } from "@mui/icons-material";

interface Props {
  productId: string
  productName: string
}

export default function Title({productId, productName}: Props){
  return(
    <h6 className="w-min flex items-center">
      <Link href={`http://localhost:3000/pages/product/${productId}`}
      className="truncate hover:text-blue-600 duration-200">
        {productName}
        <OpenInNewIcon className="ml-2 w-4 h-4 pb-0.5" />
      </Link>
      {/* <div className="mb-2 w-full h-[2px] bg-blue-600"></div> */}
    </h6>
  )
}