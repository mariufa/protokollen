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

class CreateLabel extends Component {

    constructor(props) {
        super(props);
        this.addLabel = props.addLabel;
        this.state = {
            lableInputTextOpen : false
        };
    }

    onCreate = () => {
        this.setState({lableInputTextOpen: true});
    }

    onEnter = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value)
            this.addLabel(e.target.value);
            this.setState({lableInputTextOpen: false})
        }
    }

    render() {
        return (
            <div>
            { !this.state.lableInputTextOpen &&
                <CreateLabelName onClick={this.onCreate}>
                    Create
                    <Icon>
                        <i className="fa fa-plus" aria-hidden="true" />
                    </Icon>
                </CreateLabelName>
            }
            { this.state.lableInputTextOpen &&
                <CreateLabelName>
                    <InputLabel onKeyPress={this.onEnter}></InputLabel>
                </CreateLabelName>
            }
            </div>
            
        
        );
    }
}

const Labels = ({ labels, editable, addLabel }) => {
  return (
    <LabelsBox>
      {labels.map(label => (
        <LabelName key={label._id}>
          {label.name}
          {editable && (
            <Icon>
              <i className="fa fa-times" aria-hidden="true" />
            </Icon>
          )}
        </LabelName>
      ))}
      {editable && <CreateLabel addLabel={addLabel} />}
    </LabelsBox>
  );
};

export default Labels;
