import React from 'react';
import styled from 'styled-components';

const LabelsBox = styled.div`
    margin: 10px;
    display: float;
`;

const LabelName = styled.div`
    margin: 0 10px;
    padding: 5px 10px;
    color: white;
    background-color: midnightblue;
    border-radius: 5px;
`;

const Icon = styled.span`
    margin-left: 10px;
`;

const Labels = ({ labels, removable }) => {
    return (
        <LabelsBox>
            {labels.map(label =>
                <LabelName key={label._id}>
                    {label.name}
                    {removable && 
                    <Icon>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </Icon>
                    }
                </LabelName>
            )}
        </LabelsBox>
    );
}

export default Labels;
