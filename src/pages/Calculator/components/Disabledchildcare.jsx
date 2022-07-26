import React from 'react'
import {InputLabel, FormControl, Select,MenuItem} from "@material-ui/core";
import { useState } from 'react';

const   Disabledchildcare = () => {
    const [child, setChild] = useState('')

const vipl = (child)=>{
switch(child){
    case 'onetwostep': return 311.15;
    case 'threefourstep': return 373.38;
    default:return 0
}
}
  return (
    <>
    <FormControl fullWidth >
  <InputLabel id='selector' >Степень инвалидности</InputLabel>
  <Select labelId='selector' onChange={(e)=>{setChild(e.target.value)}}>
      <MenuItem value="onetwostep">с I и II степенью утраты здоровья до исполнения ребенку 18 лет и с III и IV степенью утраты здоровья до исполнения ребенку возраста 3 лет</MenuItem>
      <MenuItem value="threefourstep">с III и IV степенью утраты здоровья после исполнения ребенку возраста 3 лет</MenuItem>
  </Select>
</FormControl>
<h1> Размер выплат: {vipl(child)} руб.</h1>
    </>
  )
}

export default  Disabledchildcare