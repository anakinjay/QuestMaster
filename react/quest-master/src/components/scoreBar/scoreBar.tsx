import React from 'react'
import {useSelector, useDispatch } from 'react-redux';
import {Nav, Navbar, Icon, Dropdown,  Grid, Row, Col, Button} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';


const ScoreBar = (props) => {

    const questionState:any = useSelector(state => state);
    const dispatch = useDispatch();

    const loadFile = () => {
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e:any)=>{
  
            let reader = new FileReader();
            reader.readAsText(e.target.files[0]);

            reader.onload=(e:any)=>{
           
                dispatch({type:'fileSelected',payload:e.target.result});
            };

      
          //  
        };
        input.click();
        
    }

    console.log("QSTATE ", questionState);

    return (
        <div>
            <Grid fluid>
                <Row className="qmHeader">
                <Col  xs={5}><img className='qmLogo' src='qmlogo.png'></img></Col>
    <Col  xs={4}>Score: {questionState.correct}/{questionState.attempted}</Col>
                <Col xs={4} xsPush={12}><Button onClick={(e)=>loadFile()}>Load Question File</Button> </Col>
                </Row>
            </Grid>
           
        </div>
    )
}

export default ScoreBar

