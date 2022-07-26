import { FormControl, Input, InputLabel } from '@material-ui/core'
import React, {useState} from 'react'

const Pregnancy = () => {
const [firstZp, setFirstZp] = useState(0)
const [secondZp, setSecondZp] = useState(0)
const [thirdZp, setThirdZp] = useState(0)
const [fourthZp, setFourthZp] = useState(0)
const [fifthZp, setFifthZp] = useState(0)
const [sixthtZp, setSixthZp] = useState(0)

const result = ()=>{
    return Math.trunc(((firstZp + secondZp + thirdZp + fourthZp + fifthZp + sixthtZp)/6)*100)/100
}

  return (
   <>
   <FormControl fullWidth>
   <InputLabel id='SredZP6'>Средняя заработная плата за 6 месяцев до отпуска </InputLabel>
        <Input labelId='SredZP6' type='number'onChange={(e)=>{setFirstZp(+e.target.value)}}/>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id='SredZP5'>Средняя заработная плата за 5 месяцев до отпуска</InputLabel>
        <Input labelId='SredZP5' type='number' onChange={(e)=>{setSecondZp(+e.target.value)}}/>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id='SredZP4'>Средняя заработная плата за 4 месяцев до отпуска</InputLabel>
        <Input labelId='SredZP4' type='number' onChange={(e)=>{setThirdZp(+e.target.value)}}/>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id='SredZP3'>Средняя заработная плата за 3 месяцев до отпуска</InputLabel>
        <Input labelId='SredZP3' type='number' onChange={(e)=>{setFourthZp(+e.target.value)}}/>
        </FormControl>
        <FormControl fullWidth>
        <InputLabel id='SredZP2'>Средняя заработная плата за 2 месяцев до отпуска</InputLabel>
        <Input labelId='SredZP2' type='number' onChange={(e)=>{setFifthZp(+e.target.value)}}/>
        </FormControl>  
        <FormControl fullWidth>
        <InputLabel id='SredZP1'>Средняя заработная плата за месяц до отпуска</InputLabel>
        <Input labelId='SredZP1' type='number' onChange={(e)=>{setSixthZp(+e.target.value)}}/>
   </FormControl>
   <h1>Размер выплат: {result()} руб.</h1>
   </>
  )
}

export default Pregnancy