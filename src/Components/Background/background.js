import React from 'react';

import './style.css'


class Background extends React.Component{

    constructor(props){
        super(props);
        this.state={
            SelectedColor:"white"
        }
    }
 changebackground = (event) =>{

   
     this.setState({

        SelectedColor : event.target.value
     })
      
 }
render(){


    return (
        <div style={{
            
            backgroundColor: this.state.SelectedColor
        }} className="back-cont">
          
          <div className="color-box">
              <h2>Choose a color</h2>
              <input onChange={this.changebackground} type="color"/>
              <p>{this.state.SelectedColor}</p>

          </div>

        </div>
    )
}

}
export default Background