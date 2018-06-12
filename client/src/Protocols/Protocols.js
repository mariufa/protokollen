import React, { Component } from 'react';
import styled from 'styled-components';

import Labels from './Labels';
import Actions from './Actions';
import HorizontalDivider from '../Common/Divider';
import { TableEntry, TextBox } from '../Common/TextCommons';
import Page from '../Common/Page';


class Protocols extends Component {

    state = {
        protocols: []
    }

    componentDidMount = () => {
        this.getProtocols();
    }

    getMockData = () => {
        const p1 = {
            _id: "1",
            text: "hei hå test blalsls",
            labels: [
                {
                    _id: 1,
                    name: "label A"
                },
                {
                    _id: 2,
                    name: "label B"
                }
            ]
        }
        const p2 = {
            _id: "2",
            text: "Marius morn du der uute i skogen",
            labels: [
                {
                    _id: 3,
                    name: "label c"
                },
                {
                    _id: 2,
                    name: "label B"
                }
            ]
        }
        return [p1, p2];
    }

    getProtocols = () => {
        const protocols = this.getMockData();
        this.setState({ protocols: protocols });
    }

    render() {
        const { protocols } = this.state;
        return (
            <Page>
                <Actions/>
                {protocols.map(element =>
                    <TableEntry key={element._id}>
                        <TextBox>
                            {element.text}
                        </TextBox>
                        <HorizontalDivider />
                        <Labels labels={element.labels} />
                    </TableEntry>
                )}
            </Page>
        );
    }
}

export default Protocols;