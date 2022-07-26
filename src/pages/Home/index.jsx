import React from 'react' 
import {Button} from "@material-ui/core";
import { Link} from "react-router-dom";

function Home() {

  return (
    <>
    <div><center>
      <h1>Вас приветствует Фонд социальной защиты населения</h1>
    <img src={"https://glusk.gov.by/uploads/images/fzn.jpg"} alt="Logo" />
    <h1>Интернет-ресурс для расчета государственных пособий и социальных выплат в Республике Беларусь</h1>
    <div color='red'>
            <Button color="inherit" component={Link} to="/calculator">
              <b>Посчитать</b>
            </Button>
              </div>
    </center>
    </div>
   
    </>
  );
}

export default Home;