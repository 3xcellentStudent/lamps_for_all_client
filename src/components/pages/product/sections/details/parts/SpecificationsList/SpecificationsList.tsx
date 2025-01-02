import { ListItem, Typography, styled } from "@mui/material"

interface Props {
  array: {name: string, value: string}[]
}

const CustomList = styled("ul")({})

export default function SpecificationsList({array}: Props){

  return( 
    <CustomList style={{"--maxHeight": `${array.length * 48}px`}} className="details_part_element_accordion w-full">
      {array.map(({name, value}, idx) => {
        return(
          <ListItem className={`${idx < array.length - 1 ? "border-b-2" : ""} 
          flex w-full min-w-[300px] px-2 h-[48px]`} key={idx} >
            <Typography className='flex-1 text-sm'>{name}:</Typography>
            <Typography className='flex-1 text-sm'>{value}</Typography>
          </ListItem>
        )
      })}
    </CustomList>
  )
}