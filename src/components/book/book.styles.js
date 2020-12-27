import styled from 'styled-components'
import arrowDropdown from '../../icons/arrow-drop-down.svg'


export const BookContainer = styled.div`
width: 8.75rem;
`
export const BookTop = styled.div`
position: relative;
  height: 12.5rem;
  display: flex;
  align-items: flex-end;
`
export const BookCover = styled.div`
  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);
  background: #eee;
  background-repeat: no-repeat;
  background-size:cover;
  background-position:center;
`
export const BookShelfChanger = styled.div`
 position: absolute;
  right: 0;
  bottom: -0.625rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #03a9f4;
  background-image: url(${arrowDropdown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.25rem;
  box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.23);

  select {
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-family: 'raleway';

  option:checked {
  color: red;
 }
}
`
export const BookTitle = styled.div`
 margin-top: 0.625rem;
 font-size: 0.8rem;
`
export const BookAuthors = styled.div`
 color: #555;
 font-size: 0.8rem;
`