import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#d1d1d1',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#0ab101",
    alignItems: "center"
  },
  buttonClear: {
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#e61e29",
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  textSpace:{
      marginTop:10
  },
  textSpaceEndTotalNeg:{
    marginTop:10,
    color: "#e61e29" 
  },  
  
} ));