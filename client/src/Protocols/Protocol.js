import React, { Component } from 'react';
import styled from 'styled-components';

import Labels from './Labels';
import HorizontalDivider from '../Common/Divider';
import { TableEntry, TextBox } from '../Common/TextCommons';
import { CommonButton } from '../Common/Button';
import Page from '../Common/Page';

class Protocol extends Component {

    state = {
        _id: '',
        text: '',
        labels: [],
        comments: [],
        removable: false,
        textEditable: false
    }

    getMockData = (id) => {
        if (id === "1") {
            return {
                _id: "1",
                text: "hei hå test blalsls",
                labels: [
                    {
                        _id: "1",
                        name: "label A"
                    },
                    {
                        _id: "2",
                        name: "label B"
                    }
                ]
            };
        }
        return {};
    }

    getMockComments = (id) => {
        if (id === "1") {
            return [{
                _id: "1",
                text: "mornings mann",
                protocolId: "1",
                created: "blabla",
                edited: '',
                user: "Marius Fagerland"
            },
            {
                _id: "2",
                text: "mornings mann 2",
                protocolId: "1",
                created: "blabla",
                edited: '',
                user: "Espen"
            }]
        }
        return [];
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        console.log(id);
        const protocol = this.getMockData(id);
        const comments = this.getMockComments(id);
        this.setState({...protocol, comments: comments});
    }

    render() {
        const { text, labels } = this.state;
        console.log(labels)
        return (
            <Page>
                <TableEntry>
                    <TextBox>
                        {text}
                    </TextBox>
                </TableEntry>
                <HorizontalDivider/>
                <TableEntry>
                    <Labels labels={labels} removable={this.state.removable}/>
                </TableEntry>
                <HorizontalDivider/>
                <CommonButton>
                    Comments
                </CommonButton>
            </Page>
        );
    }
}

export default Protocol;