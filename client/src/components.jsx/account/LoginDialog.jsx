import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../../constants/Data'
import {GoogleLogin} from '@react-oauth/google'


const Component = styled(Box)`
    display : flex
`

const Container = styled(Box)`
    padding : 56px 0px 56px 56px
`

const QrCode = styled('img')({
    height : 264,
    width : 264,
    margin : '50px 0px 0px 50px'
});

const Title = styled(Typography)`
    font-size:26px;
    margin-bottom : 25px
`

const ListStyle = styled(List)`
    & > li {
    padding : 0;
    margin-top :15px;
    font-size : 18px;
    line-height : 28px;
    color : #4a4a4a;
    }
`

const dialogStyle = {
    height : '96%',
    marginTop : '12%',
    width : '60%',
    maxWidth : '100%',
    maxHeight : '100%',
    boxShadow : 'none',
    overflow : 'hidden'
}


const LoginDialog = () => {
    const onLoginSuccess = () => {};
    const onLoginError = () => {};



  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use Whatsapp on your Computer</Title>
          <ListStyle>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>2. Tap menu settings and select whatsapp web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </ListStyle>
        </Container>

        <Box style={{position:'relative'}}>
          <QrCode src={qrCodeImage} alt="qr code" />
          <Box style={{position:'absolute', top:'50%',transform:'translateX(25%)'}}>
            <GoogleLogin
                onSuccess={onLoginSuccess}
                onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog