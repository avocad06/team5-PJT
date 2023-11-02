import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Container = styled('div')({
    width: 406,
    height: 68,
  });
    
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgba(128 ,190 , 38)',
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(128 ,190 , 38 , 0.5)',
    },
    '&:focus': {
        backgroundColor: 'rgba(128 ,190 , 38 , 0.3)',
        color: 'rgba(232, 227, 219, 1)',
        boxShadow: 'none',
        borderColor: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#rgba(128 ,190 , 38 , 1)',
        borderColor: 'none',
      },
  }));
  
  export default function RandomButton() {
    return (
      <Stack spacing={2} direction="row">
        <Container>
        <ColorButton variant="contained">랜덤으로 결과 보기</ColorButton>
        </Container>
      </Stack>
    );
  }