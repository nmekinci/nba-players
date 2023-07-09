import { data } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
    const [result, setResult] = useState(data);

    const handleSearch = (e) => {
        e.preventDefault()
        setResult(
            data.filter( (item) => item.name.toUpperCase().includes(e.target.value.toUpperCase()) )
        )
        // console.log(result);
    }
  return (
    <>
      <Form.Control
        style={{ marginBottom: "40px" }}
        type="text"
        placeholder="Search Player..." onChange={handleSearch}
      />
      <Row className="g-5">
      {result.length === 0 ? <p>there is no rsult</p> : result.map((item,i) => (
          <Col key= {i} xs={6} lg={3} md = {4}>
        <PlayerCard  name = {item.name} img = {item.img} statistics={item.statistics}/>
        </Col>)  
        
        )}

        {/* {result.map((item,i) => (
          <Col key= {i} xs={6} lg={3} md = {4}>
        <PlayerCard  name = {item.name} img = {item.img} statistics={item.statistics}/>
        </Col>)  
        
        )} */}
      </Row>
    </>
  );
};

export default CardContainer;
