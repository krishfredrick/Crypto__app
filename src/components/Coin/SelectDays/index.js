import { MenuItem, Select } from '@mui/material';
import React from 'react';
import './styles.scss'

const SelectDays = ({noText, days, handleChange}) => {
  return (
    <div className='select__div'>
      {!noText ? <p>Price change in the last</p> :<></>}
      <Select
        value={days}
        onChange={handleChange}
        className='select__coin'
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  )
}

export default SelectDays
