import React, {useState} from 'react'
import './Contact.scss'
import {useFirestore} from 'reactfire'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


function Contact() {
    const ContactUs_Collection = useFirestore().collection('Contact Us')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function Send() {
        await ContactUs_Collection.add({
            Name: name,
            Email: email,
            Message: message,
        })
        setIsSubmitted(true);
    }

    function Reset() {
        setIsSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="leftSide-col">
                        <br/>
                        <h1><b>Contact Us!</b></h1>
                        <form>
                            <FormControl>
                                <InputLabel style={{fontSize: 15}}>Name</InputLabel>
                                <Input
                                    id="FullName"
                                    placeholder="Enter your full name"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </FormControl>
                            <br/>

                            <FormControl>
                                <InputLabel style={{fontSize: 15}} htmlFor="my-input">Email address</InputLabel>
                                <Input
                                    id="my-input"
                                    aria-describedby="my-helper-text"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </FormControl>
                            <br/>

                            <FormControl>
                                <FormLabel style={{padding: 10}}>What would you like to tell us?</FormLabel>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Write your answer here"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </FormControl>
                            <div>
                                <br/>
                                {!isSubmitted ? <Button color="primary" variant="outlined" size="large" onClick={Send}>
                                    Send
                                </Button> : <div>
                                    <div>Thank you! We will review your message</div>
                                    <Button color="primary" variant="outlined" size="large" onClick={Reset}>Reset</Button></div>}

                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                    <div className="rightSide-col">
                        <div className="hidden-md">
                            <img alt="contact" src="/pictures/content/contact.png" width="400px" height="400px"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Contact
