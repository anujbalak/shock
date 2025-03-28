import { Component } from "react";
import styled from "styled-components";
import Countdown from "react-countdown"
import { Clock } from "lucide-react";

const TimerComponent = styled.span`
    position: absolute;
    font-size: 1.5rem;
    color: #ff1c42;
    font-weight: 700;
    transform: rotate(15deg);
    translate: -1.4em -0.6em;
`

class Timer extends Component {
    constructor(props) {
        super(props)

        this.renderer = this.renderer.bind(this)
    }

    renderer({minutes, seconds, completed}) {
        if (completed) {
            return
        }
        return `${minutes}:${seconds}`
    }

    render() {
        return (
            <TimerComponent>
                <Clock />
                <Countdown 
                    date={Date.now() + 1000*2000} 
                    daysInHours={false}
                    renderer={this.renderer}
                />                
            </TimerComponent>
        )
    }
}

export default Timer