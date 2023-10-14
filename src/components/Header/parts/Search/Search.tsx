import SearchIcon from '@mui/icons-material/Search';
import './Search.scss'

export default function Search(){
  
  return(
    <div className="header_search">
      <div className="header_search_icon_wrapper">
        <SearchIcon htmlColor='#2196F3' />
      </div>
      <input className='header_search_input' type="text" placeholder="Search…" />
    </div>
  )
}