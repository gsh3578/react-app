import React,{ Component } from 'react';

class TOC extends Component {
  shouldComponentUpdate(newProps,newState){
    console.log('>>>>>TOC..shouldComponentUpdate...');
    if(newProps.data === this.props.data){
      return false;
    }

    return true;
  }

  render(){
    console.log('TOC render');
    var lists=[];
    var data = this.props.data;
    var i=0;
    while(i < data.length){
      lists.push(
        <li key={data[i].id}>
          <a href={"content/"+data[i].id} 
             data-id = {data[i].id} 
             onClick={function(id,e){
               //debugger;
               e.preventDefault(); 
               //this.props.onChangePage(e.target.dataset.id);               
               this.props.onChangePage(id);               
              }.bind(this,data[i].id)}>{data[i].title}
          </a> 
        </li>
      );
      i += 1
    }

    return (
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;