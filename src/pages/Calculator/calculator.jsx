import {makeStyles, Container,Select, MenuItem, InputLabel, FormControl} from "@material-ui/core";
import {useState} from 'react'
import Babycare from "./components/Babycare";
import Birthofachild from "./components/Birthofachild";
import Breadwinner from "./components/Breadwinner";
import Disability from "./components/Disability";
import Disabledchildcare from "./components/Disabledchildcare";
import Pregnancy from "./components/Pregnancy";
import Womeninhelthcareorg from "./components/Womeninhelthcareorg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Calculator() {
  const classes = useStyles();
  const [statePayments, setPay] = useState('')
  const fun = (e)=>{
setPay(e.target.value)
  }

  const changeForm = ()=>{
    switch(statePayments){
      case 'babycare':return <Babycare/>
      case 'disability': return <Disability/>
      case 'pregnancy' : return <Pregnancy/>
      case 'birthofachild': return <Birthofachild/>
      case 'womeninhealthcare': return <Womeninhelthcareorg/>
      case 'disabledchildcare': return <Disabledchildcare/>
      case 'breadwinner': return <Breadwinner/>
      default :return<></>
    }
  }


  return (
    <Container maxWidth="sm" className={classes.root}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Пособие</InputLabel>
    <Select
    label="payments" 
    labelId="demo-simple-select-label"
    onChange={(e)=>{fun(e)}}>
      <MenuItem value="disability">По нетрудоспособности</MenuItem>
      <MenuItem value="pregnancy">По беременности и родам</MenuItem>
      <MenuItem value="birthofachild">В связи с рождением ребенка</MenuItem>
      <MenuItem value="womeninhealthcare">Женщине, ставшей на учет в организации здравоохранения до 12-недельного срока беременности</MenuItem>
      <MenuItem value="babycare">По уходу за ребенком в возрасте до 3 лет (ежемесячное)</MenuItem>
      <MenuItem value="disabledchildcare">По уходу за ребенком-инвалидом в возрасте до 18 лет</MenuItem>
      <MenuItem value="breadwinner">По случаю потери кормильца</MenuItem>
    </Select>
    </FormControl>
    {changeForm()}
    </Container>
  );
}

export default Calculator;