import React, {Component} from 'react';
import styled from 'styled-components';

import RecordList from './RecordList';

const StyledWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 1;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
`;
//#3c763d
const StyledHeading = styled.h2`
    padding-top:10px;
    color: white;
`;

export default class App extends Component {
    render() {
        return (
            <StyledWrapper>
                <StyledHeading>
                    <span className="glyphicon glyphicon-home">&nbsp;RecordList in albhabetical order</span><hr></hr>
                </StyledHeading>
                <RecordList />
            </StyledWrapper>
        );
    }
}
