import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
//import { deepPurple } from '@material-ui/core/colors';


// export default WhiteTextTypography = withStyles({
//   root: {
//     color: "#0074ad"
//   }
// })(Typography);

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    
    padding: '10px 50px',

  },
  
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  homeBox: {
    color: "#ffffff",
    backgroundColor: "#e61e29",
  }, 
  historyBox: {
    color: "#000000",
    backgroundColor: "#d1d1d1",
  }, 
  grahpBox: {
    color: "#ffffff",
    backgroundColor: "#0074ad",
  }, 
  devBox: {
    color: "#ffffff",
    backgroundColor: "#cc28a9",
  }, 
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },

}));