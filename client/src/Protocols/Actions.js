import React from 'react';
import styled from 'styled-components';

import { CommonButton } from '../Common/Button';

const ButtonBox = styled.div`
    width: 100%;
`;

const Actions = () => {
    return (
        <ButtonBox>
            <CommonButton>Submit</CommonButton>
            <CommonButton>Search</CommonButton>
        </ButtonBox>
    );
}

export default Actions;