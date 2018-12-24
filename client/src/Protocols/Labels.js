import React, { Component } from "react";
import styled from "styled-components";

const LabelsBox = styled.div`
  margin: 10px;
  overflow: hidden;
`;

const LabelName = styled.div`
  margin: 10px 10px;
  padding: 5px 10px;
  color: white;
  background-color: midnightblue;
  border-radius: 5px;
  float: left;
`;

const Icon = styled.span`
  margin-left: 10px;
`;

const CreateLabelName = LabelName.extend`
  color: midnightblue;
  background-color: white;
  border: 1px dotted midnightblue;
`;

const InputLabel = styled.input`
  margin: 0px 1px;
  outline: none;
  box-sizing: border-box;
`;

class LabelItem extends Component {
  constructor(props) {
    super(props);
    this.removeLabel = props.removeLabel;
    this.editable = props.editable;
    this.state = {
      name: props.label.name
    };
  }

  render() {
    return (
      <LabelName>
        {this.state.name}
        {this.editable && (
          <Icon>
            <i className="fa fa-times" aria-hidden="true" />
          </Icon>
        )}
      </LabelName>
    );
  }
}

class CreateLabel extends Component {
  constructor(props) {
    super(props);
    this.addLabel = props.addLabel;
    this.state = {
      lableInputTextOpen: false
    };
  }

  onCreate = () => {
    this.setState({ lableInputTextOpen: true });
  };

  onEnter = e => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      this.addLabel(e.target.value);
      this.setState({ lableInputTextOpen: false });
    }
  };

  render() {
    return (
      <div>
        {!this.state.lableInputTextOpen && (
          <CreateLabelName onClick={this.onCreate}>
            Create
            <Icon>
              <i className="fa fa-plus" aria-hidden="true" />
            </Icon>
          </CreateLabelName>
        )}
        {this.state.lableInputTextOpen && (
          <CreateLabelName>
            <InputLabel onKeyPress={this.onEnter} />
          </CreateLabelName>
        )}
      </div>
    );
  }
}

class Labels extends Component {
  constructor(props) {
    super(props);
    this.labels = props.labels;
    this.editable = props.editable;
    this.addLabel = props.addLabel;
    this.removeLabel = props.removeLabel;
  }

  onClickLabel = (e) => {
    console.log(e);
  }

  render() {
    return (
      <LabelsBox>
        {this.labels.map(label => (
          <LabelItem
            key={label._id}
            label={label}
            editable={this.editable}
            onClick={this.onClickLabel}
          />
        ))}
        {this.editable && <CreateLabel addLabel={this.addLabel} />}
      </LabelsBox>
    );
  }
}

export default Labels;
