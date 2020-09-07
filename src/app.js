import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";

const pos1 = { top: "0px", left: "0px" };
const pos2 = { top: "0px", left: "205px" };
const pos3 = { top: "0px", left: "410px" };
const pos4 = { top: "205px", left: "0px" };
const pos5 = { top: "205px", left: "205px" };
const pos6 = { top: "205px", left: "410px" };
const pos7 = { top: "410px", left: "0px" };
const pos8 = { top: "410px", left: "205px" };
const pos9 = { top: "410px", left: "410px" };

const posArray = [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9];

const imgPosition = [];

for (let index = 0; index < 9; index++) {
    const randNum = Math.floor(Math.random() * (9 - index));
    const randPos = posArray.splice(randNum, 1);
    imgPosition.push(randPos);
}

const initialState = {
    one: imgPosition[0][0],
    two: imgPosition[1][0],
    three: imgPosition[2][0],
    four: imgPosition[3][0],
    five: imgPosition[4][0],
    six: imgPosition[5][0],
    seven: imgPosition[6][0],
    eight: imgPosition[7][0]
};

const initialTimer = {
    seconds : 0,
    isActive : false
}

function App() {
    const [state, setState] = useState(initialState);
    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(initialTimer);

    const { one, two, three, four, five, six, seven, eight } = state;

    const imgClicked = e => {
        let stateProperty = e.target.className.slice(4);
        move(state[stateProperty], setState, stateProperty);
    };

    const getSeconds = (s) => {
        return `0${timer.seconds % 60}`.slice(-2)
    }

    const getMinutes = (s) => {
        return Math.floor(timer.seconds / 60)
    }

    const setOurState = () => {
        if(!timer.isActive) {
            setInterval(() => {
                setTimer(prvTimer => ({ ...prvTimer, isActive: true , seconds : prvTimer.seconds + 1 }))
            }, 1000);
        }
        setMoves(prvMoves => prvMoves + 1)
    }

    const move = (x, setState, stateProperty) => {
        if (x === pos1) {
            if (
                one !== pos2 &&
                two !== pos2 &&
                three !== pos2 &&
                four !== pos2 &&
                five !== pos2 &&
                six !== pos2 &&
                seven !== pos2 &&
                eight !== pos2
            ) {
                setState({...state, [stateProperty]: pos2 });
                setOurState()
            } else if (
                one !== pos4 &&
                two !== pos4 &&
                three !== pos4 &&
                four !== pos4 &&
                five !== pos4 &&
                six !== pos4 &&
                seven !== pos4 &&
                eight !== pos4
            ) {
                setState({...state, [stateProperty]: pos4 });
                setOurState()
            }
        } else if (x === pos2) {
            if (
                one !== pos1 &&
                two !== pos1 &&
                three !== pos1 &&
                four !== pos1 &&
                five !== pos1 &&
                six !== pos1 &&
                seven !== pos1 &&
                eight !== pos1
            ) {
                setState({...state, [stateProperty]: pos1 });
                setOurState()
            } else if (
                one !== pos3 &&
                two !== pos3 &&
                three !== pos3 &&
                four !== pos3 &&
                five !== pos3 &&
                six !== pos3 &&
                seven !== pos3 &&
                eight !== pos3
            ) {
                setState({...state, [stateProperty]: pos3 });
                setOurState()
            } else if (
                one !== pos5 &&
                two !== pos5 &&
                three !== pos5 &&
                four !== pos5 &&
                five !== pos5 &&
                six !== pos5 &&
                seven !== pos5 &&
                eight !== pos5
            ) {
                setState({...state, [stateProperty]: pos5 });
                setOurState()
            }
        } else if (x === pos3) {
            if (
                one !== pos2 &&
                two !== pos2 &&
                three !== pos2 &&
                four !== pos2 &&
                five !== pos2 &&
                six !== pos2 &&
                seven !== pos2 &&
                eight !== pos2
            ) {
                setState({...state, [stateProperty]: pos2 });
                setOurState()
            } else if (
                one !== pos6 &&
                two !== pos6 &&
                three !== pos6 &&
                four !== pos6 &&
                five !== pos6 &&
                six !== pos6 &&
                seven !== pos6 &&
                eight !== pos6
            ) {
                setState({...state, [stateProperty]: pos6 });
                setOurState()
            }
        } else if (x === pos4) {
            if (
                one !== pos1 &&
                two !== pos1 &&
                three !== pos1 &&
                four !== pos1 &&
                five !== pos1 &&
                six !== pos1 &&
                seven !== pos1 &&
                eight !== pos1
            ) {
                setState({...state, [stateProperty]: pos1 });
                setOurState()
            } else if (
                one !== pos5 &&
                two !== pos5 &&
                three !== pos5 &&
                four !== pos5 &&
                five !== pos5 &&
                six !== pos5 &&
                seven !== pos5 &&
                eight !== pos5
            ) {
                setState({...state, [stateProperty]: pos5 });
                setOurState()
            } else if (
                one !== pos7 &&
                two !== pos7 &&
                three !== pos7 &&
                four !== pos7 &&
                five !== pos7 &&
                six !== pos7 &&
                seven !== pos7 &&
                eight !== pos7
            ) {
                setState({...state, [stateProperty]: pos7 });
                setOurState()
            }
        } else if (x === pos5) {
            if (
                one !== pos2 &&
                two !== pos2 &&
                three !== pos2 &&
                four !== pos2 &&
                five !== pos2 &&
                six !== pos2 &&
                seven !== pos2 &&
                eight !== pos2
            ) {
                setState({...state, [stateProperty]: pos2 });
                setOurState()
            } else if (
                one !== pos6 &&
                two !== pos6 &&
                three !== pos6 &&
                four !== pos6 &&
                five !== pos6 &&
                six !== pos6 &&
                seven !== pos6 &&
                eight !== pos6
            ) {
                setState({...state, [stateProperty]: pos6 });
                setOurState()
            } else if (
                one !== pos8 &&
                two !== pos8 &&
                three !== pos8 &&
                four !== pos8 &&
                five !== pos8 &&
                six !== pos8 &&
                seven !== pos8 &&
                eight !== pos8
            ) {
                setState({...state, [stateProperty]: pos8 });
                setOurState()
            } else if (
                one !== pos4 &&
                two !== pos4 &&
                three !== pos4 &&
                four !== pos4 &&
                five !== pos4 &&
                six !== pos4 &&
                seven !== pos4 &&
                eight !== pos4
            ) {
                setState({...state, [stateProperty]: pos4 });
                setOurState()
            }
        } else if (x === pos6) {
            if (
                one !== pos3 &&
                two !== pos3 &&
                three !== pos3 &&
                four !== pos3 &&
                five !== pos3 &&
                six !== pos3 &&
                seven !== pos3 &&
                eight !== pos3
            ) {
                setState({...state, [stateProperty]: pos3 });
                setOurState()
            } else if (
                one !== pos5 &&
                two !== pos5 &&
                three !== pos5 &&
                four !== pos5 &&
                five !== pos5 &&
                six !== pos5 &&
                seven !== pos5 &&
                eight !== pos5
            ) {
                setState({...state, [stateProperty]: pos5 });
                setOurState()
            } else if (
                one !== pos9 &&
                two !== pos9 &&
                three !== pos9 &&
                four !== pos9 &&
                five !== pos9 &&
                six !== pos9 &&
                seven !== pos9 &&
                eight !== pos9
            ) {
                setState({...state, [stateProperty]: pos9 });
                setOurState()
            }
        } else if (x === pos7) {
            if (
                one !== pos4 &&
                two !== pos4 &&
                three !== pos4 &&
                four !== pos4 &&
                five !== pos4 &&
                six !== pos4 &&
                seven !== pos4 &&
                eight !== pos4
            ) {
                setState({...state, [stateProperty]: pos4 });
                setOurState()
            } else if (
                one !== pos8 &&
                two !== pos8 &&
                three !== pos8 &&
                four !== pos8 &&
                five !== pos8 &&
                six !== pos8 &&
                seven !== pos8 &&
                eight !== pos8
            ) {
                setState({...state, [stateProperty]: pos8 });
                setOurState()
            }
        } else if (x === pos8) {
            if (
                one !== pos7 &&
                two !== pos7 &&
                three !== pos7 &&
                four !== pos7 &&
                five !== pos7 &&
                six !== pos7 &&
                seven !== pos7 &&
                eight !== pos7
            ) {
                setState({...state, [stateProperty]: pos7 });
                setOurState()
            } else if (
                one !== pos5 &&
                two !== pos5 &&
                three !== pos5 &&
                four !== pos5 &&
                five !== pos5 &&
                six !== pos5 &&
                seven !== pos5 &&
                eight !== pos5
            ) {
                setState({...state, [stateProperty]: pos5 });
                setOurState()
            } else if (
                one !== pos9 &&
                two !== pos9 &&
                three !== pos9 &&
                four !== pos9 &&
                five !== pos9 &&
                six !== pos9 &&
                seven !== pos9 &&
                eight !== pos9
            ) {
                setState({...state, [stateProperty]: pos9 });
                setOurState()
            }
        } else if (x === pos9) {
            if (
                one !== pos6 &&
                two !== pos6 &&
                three !== pos6 &&
                four !== pos6 &&
                five !== pos6 &&
                six !== pos6 &&
                seven !== pos6 &&
                eight !== pos6
            ) {
                setState({...state, [stateProperty]: pos6 });
                setMoves(prvMoves => prvMoves + 1)
            } else if (
                one !== pos8 &&
                two !== pos8 &&
                three !== pos8 &&
                four !== pos8 &&
                five !== pos8 &&
                six !== pos8 &&
                seven !== pos8 &&
                eight !== pos8
            ) {
                setState({...state, [stateProperty]: pos8 });
                setMoves(prvMoves => prvMoves + 1)
            }
        }
    };

    return ( 
        <div className='my-5'>
            <Container fluid>                
                <h1 className='text-center font-weight-bold py-5'>Arrange Game</h1>
                <Row>
                    <Col className='text-center'>
                        <Row className='bg'>
                            <Col md={6} className='move font-weight-bold my-2'>Number of Moves = {moves}</Col>
                            <Col md={6} className='time font-weight-bold my-2'>Timer = {getMinutes(timer.seconds)}:{getSeconds(timer.seconds)}</Col>
                        </Row>
                        <Row>
                            <div className = "orginal">
                                <h2>Original Image</h2>
                                <img src='https://picsum.photos/600' alt='random picsum.photos website' />
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <div className = "puzzel-container" >
                            <div className = "puzzel" >
                                <div className = "box one" onClick = { imgClicked } style = { one }  />
                                <div className = "box two" onClick = { imgClicked } style = { two }  />
                                <div className = "box three" onClick = { imgClicked } style = { three } />
                                <div className = "box four" onClick = { imgClicked } style = { four } />
                                <div className = "box five" onClick = { imgClicked } style = { five } />
                                <div className = "box six" onClick = { imgClicked } style = { six } />
                                <div className = "box seven" onClick = { imgClicked } style = { seven } />
                                <div className = "box eight" onClick = { imgClicked } style = { eight } />
                            </div >
                        </div >
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;