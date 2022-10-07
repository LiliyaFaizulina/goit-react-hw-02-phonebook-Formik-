import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
margin-bottom: 30px;
    padding: 30px 50px;
    border: 1px solid ${p => p.theme.colors.darkBlue};
    border-radius: 2px;
`;

export const Label = styled.label`
    &:not(:last-child){
        margin-bottom: 25px;
    }
    position: relative;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: ${p => p.theme.colors.blue};
`;

export const Input = styled(Field)`
    height:25px;
`

export const Warning = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    padding: 2px;
    border-radius: 2px;
    width: 100%;
    color: ${p => p.theme.colors.pink};
    background-color: ${p => p.theme.colors.violet};
    font-size: 12px;
    line-height: 1;
    text-align: end;
`;

export const FormButton = styled.button`
    display: block;
    margin: 20px auto 0;
    padding: 5px 10px;
    border-radius: 2px;
    line-height: 1.4;
    background-color: ${p => p.theme.colors.darkBlue};
    color: ${p => p.theme.colors.light};
    transition: color ${p => p.theme.animation}, background-color ${p => p.theme.animation};

    &:focus, &:hover{
        background-color: ${p => p.theme.colors.blue};
        color: ${p => p.theme.colors.darkBlue};
    }
`