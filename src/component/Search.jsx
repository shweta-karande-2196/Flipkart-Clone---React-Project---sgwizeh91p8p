import styled from '@emotion/styled'
import { InputBase } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`
const InputSearchBase = styled(InputBase)`
  font-size : unset;
  width : 100%;
  padding-left : 20px

`
const Searchicon = styled(SearchIcon)`
// background : gray;
height : 100%;
color : blue;
display : flex;
`

const Search = () => {

  const [search, setSearch]= useState('')
  

  return (
   
    <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <Box>
            <Searchicon />
        </Box>
    </SearchContainer>
  )
}

export default Search