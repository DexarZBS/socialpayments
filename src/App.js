import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
    
  },
  leftToolbar: {
    flexGrow: 1,
    marginLeft: theme.spacing(-80),
  },
  
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Калькулятор социальных выплат
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              Главная страница
            </Button>
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
              <div className={classes.leftToolbar}>
            <Button color="inherit" component={Link} to="/law">
              Закондательная сводка
            </Button>
              </div>
              <div className={classes.leftToolbar}>
            <Button color="inherit" component={Link} to="/calculator">
              Расчет социальных выплат
            </Button>
              </div>
                <Button color="inherit" component={Link} to="/profile">
                  {auth.user.firstName} {auth.user.lastName}
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Войти
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Регистрация
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

      <Routes />
    </div>
  );
}

export default App;
