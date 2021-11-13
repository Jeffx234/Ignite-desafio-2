import { GenreResponseProps } from '../../../App'

export interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton:  (genreId: number) => void;
}