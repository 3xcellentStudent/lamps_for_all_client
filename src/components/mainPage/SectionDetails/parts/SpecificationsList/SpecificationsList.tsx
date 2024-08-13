import { ListItem, Typography, styled } from "@mui/material"

interface Props {
  sx: {sxList: {}, sxItem: {}, sxText: {}}
  items: {name: string, value: string}[]
}

const CustomList = styled("ul")({})

export default function SpecificationsList({sx: {sxList, sxItem, sxText}, items}: Props){

  return( 
    <CustomList style={{"--maxHeight": `${items.length * 38}px`}} 
    sx={sxList} className="details_part_element_accordion w-full">
      {items.map(({name, value}, idx) => {
        return(
          <ListItem className={`${idx < items.length - 1 ? "border-b-2" : ""} 
          flex w-full min-w-[300px] px-2`} key={idx} sx={sxItem} >
            <Typography sx={sxText} className='flex-1 text-sm'>{name}:</Typography>
            <Typography sx={sxText} className='flex-1 text-sm'>{value}</Typography>
          </ListItem>
        )
      })}
    </CustomList>
  )
}