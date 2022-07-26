import { FormControl, Input, InputLabel } from '@material-ui/core'
import React, {useState} from 'react'

const Disability = () => {
const [date, setDate] = useState(['00-00-00','00-00-00'])
const [zp, setZp] = useState(0)

const rangeF = ()=>{
  let range = [],
  start = new Date(date[0]),
  end = new Date(date[1]);


for (let unix = start.getTime();
   unix <= end.getTime();
   unix += 86400000) {
let thisDay = new Date(unix);
range.push(thisDay);

}

if(range.length <=12 && zp !== 0){
return Math.round(zp*range.length*0.8)
}else if(range.length >12 && zp !== 0){
return Math.round(12*zp*0.8+(range.length - 12)*zp)
}else return 0
}

console.log(date)
  return (
      <>
    <FormControl fullWidth>
        <h4>Начало периода нетрудоспособности</h4>
        <Input type='date' id='startDisability' onChange={(e)=>{setDate([e.target.value, date[1]])}}/>
        <h4>Окончание периода нетрудоспособности</h4>
       <Input type='date' id='startDisability' onChange={(e)=>{setDate([date[0], e.target.value])}}/>
       <FormControl>
       <InputLabel id="my-input">Дневная ЗП</InputLabel>
  <Input labelId="my-input"  type='number' onChange={(e)=>{setZp(e.target.value)}}/>
       </FormControl>
    </FormControl>
    <h1> Размер выплат: {rangeF()} руб</h1>
    </>
  )
}

export default Disability