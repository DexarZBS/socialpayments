import React from 'react'
import {InputLabel, FormControl, Select,MenuItem} from "@material-ui/core";
import { useState } from 'react';

const Birthofachild = () => {
    const [child, setChild] = useState('')

const vipl = (child)=>{
switch(child){
    case 'oneyear': return 3111.50;
    case 'twoyears': return 4356.10;
    default:return 0
}
}

  return (
    <>
    <FormControl fullWidth >
  <InputLabel id='selector' >Пособие на</InputLabel>
  <Select labelId='selector' onChange={(e)=>{setChild(e.target.value)}}>
      <MenuItem value="oneyear">Первого ребенка</MenuItem>
      <MenuItem value="twoyears">Второго ребенока и последующих детей</MenuItem>
  </Select>
</FormControl>
<h1> Размер выплат: {vipl(child)} руб.</h1>
    </>
  )
}

export default Birthofachild