import {useState} from 'react';
import {Button, Form, FormFeedback, FormGroup, FormText, Input, Label} from 'reactstrap';
import './Signin.css';
const Signin = ({setLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async () => {
        const data = {
            email: email,
            password: password
        }
        const request = {
            method : 'POST', 
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        console.log(request);
        const response = await fetch(`http://localhost:8000/signin`,request);
        console.log(response);
        const res = await response.json();
        if(res.status === "matched"){
            setLogin(true);
        }
        else{
            alert("email and password does not match");
        }
        alert("your data has been submited");
    }

    const submit = () => {
        login();
    }

    return (
    <div className="Signin">
        <h1 className="text-center">
        <span className="font-weight-bold">virtusa</span>
      </h1>
      <Form>
        <FormGroup>
          <Label>Email Id</Label>
          <Input type="email" value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
          <FormFeedback></FormFeedback>
          <FormText>Email must be in virtusa domain</FormText>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
          <FormFeedback></FormFeedback>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" onClick={submit}>Sign in</Button>
        </Form>
    </div>
    );
}
export default Signin;