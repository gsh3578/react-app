import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';

class Control extends Component {
  render(){    
    return (
        <div>
            <Button 
                   onClick={function(e){
                       e.preventDefault(); 
                       this.props.onChangeMode('create');
                    }.bind(this)}
                    variant="contained">Create</Button>
            <p/>
            <Button
                   onClick={function(e){
                      e.preventDefault(); 
                      this.props.onChangeMode('update');
                  }.bind(this)}
                  variant="contained" >Update</Button>
            <p/>                  
            <Button
                  onClick={function(e){
                       e.preventDefault(); 
                       this.props.onChangeMode('delete');
                    }.bind(this)}
                    variant="contained" >Delete</Button> 
            
        </div>
    );
  }
}

export default Control;