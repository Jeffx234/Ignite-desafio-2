import { Button } from '../Button'
import { SideBarProps } from './@interface/index'

import '../../styles/sidebar.scss'


export function SideBar({genres, selectedGenreId, handleClickButton}: SideBarProps) {


  // Complete aqui
  return(
    <nav className="sidebar">
      <span> 
        Watch<p>Me</p>
      </span>


      <div className="buttons-container">
     {genres.map((genre) => (
       <Button 
        id={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
       />
     ))}
   
      </div>
    </nav>
  )
}