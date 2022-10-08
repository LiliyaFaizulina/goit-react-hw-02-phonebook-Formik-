import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { AddContactForm, FormButton, Label, Warning, Input } from "./ContactForm.styled";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';


const INITIAL_STATE = {
    name: '',
    number: '',
}

const nameCheckMessage = "Name may contain only letters, dash and spaces.";
const telCheckMessage = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

const schema = yup.object().shape({
    name: yup.string().matches("^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", nameCheckMessage ).min(2, "Too short!").required('Required'),
    number: yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, telCheckMessage).min(5, 'Too short!').required('Required!')
})

export const ContactForm=({updateContactList, contactList})=>{

    const addContact = (values, {resetForm}) => {
        const normalizedName = values.name.toLowerCase();
        
        if (contactList.some(contact => contact.name.toLowerCase() === normalizedName)) {
            alert(`${values.name} is already in contacts`);
            return;
        }

        const newContact = {
            id: nanoid(),
            ...values,
        }

        updateContactList(newContact);
        resetForm();
    }

    return (
        
        <Formik
            initialValues={{ ...INITIAL_STATE }}
            onSubmit={addContact}
            validationSchema={schema}
        >
            <AddContactForm>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        title={nameCheckMessage}
                    />
                    <ErrorMessage name="name" component={Warning} />
                   
                </Label>
                <Label>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        title={telCheckMessage}
                    />
                    <ErrorMessage name="number" component={Warning}/>
                   
                </Label>
                <FormButton type="submit">Add contact</FormButton>
            </AddContactForm>
            </Formik>
            
    );
}

ContactForm.propTypes = {
        updateContactList: PropTypes.func.isRequired,
        contactList: PropTypes.arrayOf(PropTypes.object).isRequired
    }