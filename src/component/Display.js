import {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import "./Display.css"
import DisplayTable from './DisplayTable';

const Display = () => {
    
    const [search, setSearch] = useState("");
    const [type, setType] = useState("none");
    const [resultsets, setResultsets] = useState([])

    const fetch = async () => {
        const data = {
            search: search ,
            type: type
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
        const resultset = await response.json();
        setResultsets(resultset);
        alert("your data has been submited");
    }
    const searchFuction = () => {
        console.log("clicked");
        fetch();
    } 
    return (
    <div className="Display">
        <h1 className="text-center">
        <span className="font-weight-bold">virtusa</span>
      </h1>
      <div className="Form">
        <Form inline>
        <FormGroup>
          <Col> <Label>Search</Label> </Col>
          <Col>
          <Input placeholder="Search" value={search} onChange={(e) => {
                    setSearch(e.target.value);
                }}/>
            </Col>
            <Col>
        <Label>Type</Label>
        </Col>
        <Col>
        <Input type="select" onChange={(e) => {
                    setType(e.target.value);
                }}>
          <option value="--not selected--">--not selected--</option>
          <option value="name">Name</option>
          <option value="certname">Certificate Name </option>
          <option value="level">level</option>
          <option value="CSP">CSP</option>
        </Input>
        </Col>
        <Col>
        <Button className="btn-lg btn-dark" onClick={searchFuction}>Search</Button>
        </Col>
        </FormGroup>
        </Form>
        </div>
        <div className="Table">
            <Table>
                <thead>
                    <tr>
                    <th>Employee Name</th>
                    <th>Email id</th>
                    <th>CSP</th>
                    <th>Certification level</th>
                    <th>Certification Name</th>
                    <th>Certification id</th>
                    <th>Certification Date</th>
                    <th>Expiry Date</th>
                    <th>Validity</th>
                    </tr>
                </thead>
                    <DisplayTable resultsets={resultsets}/>
            </Table>
        </div>
    </div>
    );
}
export default Display;