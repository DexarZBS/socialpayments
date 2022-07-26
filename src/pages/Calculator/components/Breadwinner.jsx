import { FormControl, Input, InputLabel } from '@material-ui/core'
import React, { useState } from 'react'

const Breadwinner = () => {
    const [sredZp, setSredZp] = useState(0)

  return (
    <>
    <FormControl fullWidth>
    <InputLabel id='SredZp'>Среднемесячный заработок кормильца </InputLabel>
        <Input labelId='SredZp' type='number'onChange={(e)=>{setSredZp(+e.target.value)}}/>
    </FormControl>
    <h1>Размер выплат: {Math.trunc((sredZp*0.4)*100)/100} руб.</h1>
    </>
  )
}

export default Breadwinner