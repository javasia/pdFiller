import React from 'react';
import B from '../components/B'

class A extends React.Component{
  constructor (props){
    super(props);
    this.state = {
        name: 'DefaultName', 
    isAnon: false
  };
    console.log('A constructor method fired');
  }
  handleChange = event => {
    this.setState({
        name: event.target.value,
        isAnon: event.target.value === 'anonymous',
    });
  }
  componentDidMount() {
      console.log("A componentDidMount fired")
  }
  shouldComponentUpdate(){
      console.log("A shouldComponentUpdate fired")
      return true;
  }
  componentDidUpdate() {
      console.log("A componentDidUpdate fired")
  }
  render() {
    console.log("A render method fired");
    const warningMsg = this.state.isAnon && "Be careful! This is Anonymous!!!";
    return (
        <>
            <input type="text" onChange={this.handleChange}/>
            <B 
            isAnon={this.state.isAnon}
            componentName={this.state.name} 
            />
            <div>{warningMsg}</div>
        </>
    );
  }
}

A.getDerivedStateFromProps = () => {
    console.log("A getDerivedStateFromProps fired")
    return null;
  }

export default A;
