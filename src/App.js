import React,{ Component } from 'react';
import './App.css';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Control from './Components/Control';
import ReadContent from './Components/ReadContent';
import CreateContent from './Components/CreateContent';
import UpdateContent from './Components/UpdateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.max_contents_id = 3;
    this.state ={
      mode:'read',
      selected_content_id:2,
      welcome:{title:'Welcome!', desc:'Welcome to react world!!!!'},
      Subject:{title:'WEB', sub:'world wide web!!'},
      Content:{title:'HTML1', desc:'HTML is HyperText Markup Language..'},
      Contents: [
        {id:1,title:'HTML', desc:'HTML is for information.'},
        {id:2,title:'CSS', desc:'CSS is for design.'},
        {id:3,title:'JavaScript', desc:'JavaScript is for interactive.'}
      ]
    }
  }

  getReadContent(){
      var i=0;
      while(i < this.state.Contents.length)
      {
        var data = this.state.Contents[i];
        if(data.id === this.state.selected_content_id) {
          return data;
        }
        i += 1;
      }
  }

  getContent(){    
    var _title,_desc = null;
    var _mode = this.state.mode;
    var _article = null;
    if(_mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(_mode === "read"){
      var _content = this.getReadContent();      
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(_mode === "create")
    {
      _article = <CreateContent 
                      onSubmit={function(_title,_desc){
                        this.max_contents_id += 1;
                        //console.log('_title/_desc='+_title+'/'+_desc);
                        /* this.state.Contents.push(
                          {id:this.max_contents_id, title:_title, desc:_desc}); */
                        // var _contents = this.state.Contents.concat(
                        //   {id:this.max_contents_id, title:_title, desc:_desc}
                        // );                                 
                        var _contents = Array.from(this.state.Contents);
                        _contents.push({id:this.max_contents_id, title:_title, desc:_desc});

                        this.setState({
                          mode:"read",
                          selected_content_id:this.max_contents_id,
                          Contents:_contents                          
                        });
                      }.bind(this)} 
                      title={_title} 
                      desc={_desc}></CreateContent>;
    }else if(_mode === "update")
    {
      _content = this.getReadContent();
      //console.log('update >> _content.title='+_content.title+'/_content.desc='+_content.desc);
      _article = <UpdateContent 
                      data = {_content}
                      onSubmit={function(_id,_title,_desc){
                        var _contents = Array.from(this.state.Contents); 
                        var i=0;
                        while(i < _contents.length)
                        {
                          //var data = _contents[i];
                          if(_contents[i].id === _id) {
                            _contents[i] = {id:_id, title:_title, desc:_desc};
                            break;
                          }
                          i += 1;
                        }

                        this.setState({
                          mode:"read",
                          Contents:_contents
                        });
                      }.bind(this)} 
                  ></UpdateContent>;
    }
    // else if(_mode === "delete")
    // {
    //   _article = <CreateContent title={_title} desc={_desc}></CreateContent>;
    // }

    return _article;
  }

  render(){    
    console.log('App render');    
    return (
      <div className="App">
        <Subject 
          title={this.state.Subject.title} 
          sub={this.state.Subject.desc}
          onChangePage={function(){
            this.setState({ mode:'welcome'});
            //console.log('App-Subject onChangePage..mode='+this.state.mode);
          }.bind(this)}
        ></Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({ mode:'read', selected_content_id:Number(id)});
            //console.log('App-TOC onChangePage..mode/id='+this.state.mode+'/id='+id);
          }.bind(this)}
          data={this.state.Contents}
        ></TOC>
        <Control
          onChangeMode={function(_mode){
              if(_mode === 'delete'){
                  if(window.confirm('Really')){
                    //alert("삭제합니다.");
                    var _contents = Array.from(this.state.Contents);
                    var i=0;
                    while(i < _contents.length)
                    {
                      if(_contents[i].id === this.state.selected_content_id) {
                        _contents.splice(i,1);
                        break;
                      }
                      i += 1;
                    }
                    this.setState({ mode:'welcome', Contents: _contents });
                  }
              }
              else {
                this.setState({
                  mode:_mode
                });
              }
          }.bind(this)}
          
        ></Control>
        {this.getContent()} 
      </div>
    );
  }
}

export default App;
