import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    //color: theme.palette.getContrastText('rgba(127 ,190 , 38)'[500]),
    backgroundColor: 'rgba(127 ,190 , 38)',
    '&:hover': {
      backgroundColor: 'rgba(156 ,214 , 74)'
    },
  }));

export default function ContainedButtons(prop) {
    return ( 
        <ColorButton variant="contained" onClick={prop.onClick}>Contained</ColorButton>    )
}