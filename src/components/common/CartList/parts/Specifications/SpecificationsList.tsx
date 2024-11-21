import FilledCircleSVG from "@/components/common/Radio/SelectionIcon"
import { FieldItemType } from "@/types/storeTypes"
import { ListItem, Tooltip, Typography } from "@mui/material"

interface Props {
  fields: FieldItemType[]
}

export default function SpecificationsList({fields}: Props){

  const specificationsCls = `border-solid border border-black rounded-md 
  font-bold mr-1 text-xs w-min whitespace-nowrap px-1 py-0.5 h-min`

  return(
    <ul className="inline-flex flex-wrap items-center py-1 w-[313px]">
      {fields.map(({type, value, background, boxShadow}, idx) => {
        if(type === 'color'){
          return(
            <ListItem key={idx} className="p-0 flex flex-row h-min w-min">
              <Tooltip key={idx} title={value} placement='top' arrow disableInteractive>
                <Typography component="div" sx={{boxShadow}} 
                className="relative rounded-full w-[21px] 
                h-[21px] p-0 rounded-full overflow-hidden">
                  <FilledCircleSVG props={{fill: background, stroke: background}} />
                </Typography>
              </Tooltip>
            </ListItem>
          )
        }
        else return <li key={idx} className={specificationsCls}>{value}</li>
      })}
    </ul>
  )
}