import { makeStyles, Container, Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Law() {
  const classes = useStyles();

  return (
  <><h1><center>Здесь вы можете ознакомиться c основными нормативными актами</center></h1>
    <Container maxWidth="sm" className={classes.root}>
      
      <Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/zakon-respubliki-belarus-6-janvarja-1999-g-n-230-z.pdf" color="inherit">
      Закон Республики Беларусь 6 января 1999 г. N 230-З
</Link>
<h4>Об индивидуальном (персонифицированном) учете в системе государственного социального страхования</h4>
<hr></hr>
<Link href="https://ssf.gov.by/uploads/folderForLinks/h12100118-1626728400.pdf" color="inherit" target="_blank">Закон Республики Беларусь 15 июля 2021 г. № 118-З</Link>
<h4>"О взносах в бюджет государственного внебюджетного фонда социальной защиты населения Республики Беларусь"</h4>
<hr></hr>
<Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/zakon-respubliki-belarus-ot-05-01-2008-n-322-z-red-ot-15.pdf" color="inherit">Закон Республики Беларусь от 05.01.2008 № 322-З</Link>
<h4>"О профессиональном пенсионном страховании"</h4>
<hr></hr>
<Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/zakon-rb.PDF" color="inherit">Закон Республики Беларусь от 10 декабря 2020 г. №68-З</Link>
<h4>Об изменении Законов по вопросам пенсионного обеспечения и государственного социального страхования</h4>
<hr></hr>
<Link target="_blank" href="https://pravo.by/document/?guid=12551&p0=H11700033&p1=1" color="inherit">Закон Республики Беларусь от 29.12.2012 № 7-З</Link>
<h4>О государственных пособиях семьям, воспитывающим детей</h4>
<hr></hr>
<Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/11.pdf" color="inherit">Закон Республики Беларусь от 29 февраля 1996 г. № 138-XІІІ (утратил силу с 21.01.2022)
</Link>
<h4>Об обязательных страховых взносах в бюджет государственного внебюджетного фонда социальной защиты населения Республики Беларусь</h4>
<hr></hr>
<Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/12.pdf" color="inherit">Закон Республики Беларусь от 31 января 1995 г. № 3563-XII</Link>
<h4>Об основах государственного социального страхования</h4>
<hr></hr>
<Link target="_blank" href="https://ssf.gov.by/uploads/folderForLinks/zakon-rb-55-z.pdf" color="inherit">Закон Республики Беларусь от 12.11.2001 № 55-З</Link>
<h4>О погребении и похоронном деле</h4>
    </Container>
    </>
  );
  
}

export default Law;