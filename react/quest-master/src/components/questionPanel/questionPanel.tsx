import React from 'react'
import {useSelector, useDispatch } from 'react-redux';
import {ButtonGroup, Button, Grid, Col, Row, Panel, PanelGroup } from 'rsuite';

const QuestionPanel = (props) => {
    const questionState:any = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(props.question);
    let qtext = props.question.questionText.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
    });

    let feedback:any = [];
    if (questionState.lastQuestion) {
        feedback = <div>{questionState.lastQuestion.message}</div>;
    }


    let ablocks = props.question.answers.map((e, i)=>{
        let payload = {
            type:'incorrect',
            correctAnswer: props.question.answers[props.question.correctAnswer]
        }
        if (i == props.question.correctAnswer) {
            payload.type = 'correct';
        }
    return <Col key={i}><Panel className='answerPanel' shaded key={i}  onClick={(e)=>dispatch({type:'questionAnswered',payload:payload})}>{e}</Panel></Col>
    });

    return (
        <div>
            <Panel >
            {feedback}
                <span className='questionText'>
            {qtext}
            </span>
            <Grid>
                    <Row>
                      {ablocks}
                    </Row>
                </Grid>

            </Panel>
            
        </div>
    )
}

export default QuestionPanel;
