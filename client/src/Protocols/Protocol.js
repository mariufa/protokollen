import React, { Component } from "react";
import styled from "styled-components";

import Labels from "./Labels";
import HorizontalDivider from "../Common/Divider";
import { TableEntry, TextBox } from "../Common/TextCommons";
import { CommonButton } from "../Common/Button";
import Page from "../Common/Page";

const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
  resize: none;
`;

const SaveBox = styled.div`
  width: 100%;
  display: inline-block;
`;

const SaveButton = CommonButton.extend`
  float: right;
`;

class Protocol extends Component {
  state = {
    _id: "",
    text: "",
    labels: [],
    comments: [],
    removable: false,
    textEditable: false
  };

  getMockData = id => {
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
  };

  getMockComments = id => {
    if (id === "1") {
      return [
        {
          _id: "1",
          text: "mornings mann",
          protocolId: "1",
          created: "blabla",
          edited: "",
          user: "Marius Fagerland"
        },
        {
          _id: "2",
          text: "mornings mann 2",
          protocolId: "1",
          created: "blabla",
          edited: "",
          user: "Espen"
        }
      ];
    }
    return [];
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    const protocol = this.getMockData(id);
    const comments = this.getMockComments(id);
    this.setState({ ...protocol, comments: comments });
  };

  onClickText = () => {
    if (this.state.textEditable === false) {
      this.setState({ textEditable: true });
    }
  };

  onClickLabels = () => {
    this.setState({ removable: !this.state.removable });
  };

  onClickSaveText = () => {
    // put api
    this.setState({ textEditable: false });
  };

  onChangeTextArea = e => {
    this.setState({ text: e.target.value });
  };

  addLabel = (labelText) => {
    if (labelText && labelText.length > 0) {
      let labels = this.state.labels;
      const newLabel = {
        _id: "123",
        name: labelText
      };
      labels.push(newLabel);
      this.setState({ labels: labels });
    }
  };

  removeLabel = (labelId) => {
      console.log("hei");
      let idxToRemove = -1;
      let labels = this.state.labels;
      labels.forEach(label => {
          if (label._id ===labelId) {
              idxToRemove = label._id;
          }
      })
      labels.splice(idxToRemove,1);
      this.setState({labels: labels});
  }

  render() {
    const { text, labels, textEditable } = this.state;
    return (
      <Page>
        <TableEntry onClick={this.onClickText}>
          {!textEditable && <TextBox>{text}</TextBox>}
          {textEditable && (
            <div>
              <TextArea
                value={text}
                onChange={this.onChangeTextArea}
                wrap="off"
                rows="3"
              />
              <SaveBox>
                <SaveButton onClick={this.onClickSaveText}>Save</SaveButton>
              </SaveBox>
            </div>
          )}
        </TableEntry>
        <HorizontalDivider />
        <TableEntry onClick={this.onClickLabels}>
          <Labels labels={labels} editable={true} addLabel={this.addLabel} removeLabel={this.removeLabel} />
        </TableEntry>
        <HorizontalDivider />
        <CommonButton>Comments</CommonButton>
      </Page>
    );
  }
}

export default Protocol;
