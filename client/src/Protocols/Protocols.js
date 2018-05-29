import React, { Component } from 'react';
import styled from 'styled-components';

const CreateButton = styled.button`
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid;
    background-color: inherit;
    color: midnightblue;
    outline: none;
    font-size: 1.0em;
    width:10%;
`;

const ButtonBox = styled.div`
    width: 100%;
`;

const TableEntry = styled.div`
    width: 40%
    padding: 10px;
    margin 10px auto;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
`;

const HorizontalDivider = styled.div`
    width: 100%;
    padding: 1px;
    background-color: #eee;
`;

const TextBox = styled.p`
    overflow-wrap: break-word;
`;

const LabelsBox = styled.div`
`;

class Protocols extends Component {
    render() {
        return (
            <div>
                <ButtonBox>
                    <CreateButton>Submit</CreateButton>
                    <CreateButton>Search</CreateButton>
                </ButtonBox>
                <TableEntry>
                    <TextBox>
                        text info. alkfjaslfj sajj klfajl sjøkfjaflksj flsjk lfjalslj dflkjsjkldj jksl
                        sfslkjfjjsldklfkjsf
                        sfklsljfksjkdllfkjskjsljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj skjlfsjd
                    </TextBox>
                    <HorizontalDivider/>
                    <div>
                        lables
                    </div>
                </TableEntry>
            </div>
        );
    }
}

export default Protocols;