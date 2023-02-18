import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { Button, TextField, Typography, styled } from '@mui/material';

const Component = styled(Box)`
    height : 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;

`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;


const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 80%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;
const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;


const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signUpInitialValues ={
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    phone : ''

}
const LoginDialog = ({open, setOpen}) => {
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [signUp , setSignUp] = useState(signUpInitialValues)


    const handleClose = () =>{
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    const toggleSignup =()=>{
            toggleAccount(accountInitialValues.signup)
    }

    const onInputChange = (e)=>{
            setSignUp({...signUp, [e.target.name] : e.target.value})
    }

    

  return (
    <Dialog open={open} onClick={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>  
            {/* open is prop on diolog como in MI */}
                <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Image>
                    
                    {
                        account.view === 'login' ? 
                    <Wrapper>
                        <TextField label="Enter Email/Mobile number" variant="standard"></TextField>
                        <TextField label="Enter Password" variant="standard"></TextField>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton>Login</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>

                        </Wrapper>
                        
                        :
                         
                        
                     <Wrapper>
                         <TextField variant="standard" onChange={()=>onInputChange()} name='firstname' label='Enter Firstname' />
                         <TextField variant="standard" onChange={()=>onInputChange()} name='lastname' label='Enter Lastname' />
                         <TextField variant="standard" onChange={()=>onInputChange()} name='username' label='Enter Username' />
                         <TextField variant="standard" onChange={()=>onInputChange()} name='email' label='Enter Email' />
                         <TextField variant="standard" onChange={()=>onInputChange()} name='password' label='Enter Password' />
                         <TextField variant="standard" onChange={()=>onInputChange()} name='phone' label='Enter Phone' />
                         <LoginButton>Continue</LoginButton>
                     </Wrapper>

                    }
                    </Box>
                </Component>
    </Dialog>
  )
}

export default LoginDialog