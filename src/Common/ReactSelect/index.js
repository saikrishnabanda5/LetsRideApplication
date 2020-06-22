import React from 'react';
import Select from 'react-select';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

@observer
class ReactSelect extends React.Component {
    @observable selectedOption
    @observable options
    constructor(props){
        super(props);
        this.selectedOption=null;
        this.reactOptions = [];
    }
  state = {
    selectedOption: null,
  };
  
  selectAValue=()=>{
       this.props.listOfAssets.map((item)=>{
          // console.log("oprtsvd",this.reactOptions);
          const  forLabel = item.toUpperCase();
          // console.log("lbel",forLabel)
          this.reactOptions.push({ value:{item},label:forLabel});
        });
        return this.reactOptions;
    }
  
  handleChange = selectedOption => {
      this.selectedOption = selectedOption;
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;
    this.selectAValue()
// console.log("react select",this.props)
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.reactOptions}
      />
    );
  }
}
export default ReactSelect;