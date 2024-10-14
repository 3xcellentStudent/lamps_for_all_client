import { Grid } from "@mui/material";
import SpecificationsList from "../parts/Specifications/SpecificationsList";
import { FieldItemType } from "@/types/storeTypes";

interface Props {fields: FieldItemType[]}

export default function ItemSpecificationsList({fields}: Props){

  return(
    <Grid className="w-[240px] text-center flex items-center">
      <SpecificationsList fields={fields} />
    </Grid>
  )
}