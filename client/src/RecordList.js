import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
  
  const StyledTreeNode = styled.div`
    line-height: 80%;
    display: block;
    align-items: center;
    padding: 5px 8px;
    &:hover {
      background: lightgray;
    }
  `;

  const StyledChildNode = styled.div`
  line-height: 80%;
  display: block;
  align-items: center;
  padding: 15px 18px 15px 18px;
  &:hover {
    background: lightgray;
  }
`;

const StyledSubChildNode = styled.div`
  line-height: 0%;
  display: block;
  align-items: center;
  padding: 25px 28px 25px 28px;
  &:hover {
    background: lightgray;
  }
`;

export default class RecordList extends Component {
    constructor() {
        super();

        this.state = {
            records: []
        }
    }

    async componentWillMount() {
        try {
            const res = await axios.get('/api/list-records');
            console.log('res: ', res.data);
            this.setState({records: res.data});
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
             <div className="container">
                {this.state.records.map(item => (
                    <StyledTreeNode>
                        <h4>{item.key}</h4>
                                {(
                                    item.value.map(i => (
                                        <StyledChildNode>
                                            {i.name}
                                            <StyledSubChildNode>
                                                {i.festivalName} festival
                                            </StyledSubChildNode>
                                        </StyledChildNode>
                                    ))                                        
                                )}
                    </StyledTreeNode>
                ))}
             </div>
        )
    }
}
