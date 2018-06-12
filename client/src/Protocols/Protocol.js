import React, { Component } from 'react';
import styled from 'styled-components';

class Protocol extends Component {

    state = {
        _id: '',
        text: '',
        labels: []
    }

    getMockData = (id) => {
        if (id === 1) {
            return {
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
            };
        }
        return {};
    }

    getMockComments = (id) => {
        if (id === 1) {
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

    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default Protocol;