import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    @media (min-width: 320px) and (max-width: 480px){
    flex-direction: column;
}

`
export const Left = styled.div`
flex: 1;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const Right = styled.div`
flex: 1;
`
export const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: 0.5px solid #333;
    margin-bottom: 10px;
    
`
export const Textarea = styled.textarea`
   height: 150px;
   outline: none;
   margin-bottom: 50px;
   border-radius: 5px;
`
export const Button = styled.input`
   background-color: #009572;
   color: #fff;
   padding: 10px;
   border-radius: 10px;
   border: 0.5px solid #333;
   cursor: pointer;

   &:hover{
       background-color: #333;
   }
`

