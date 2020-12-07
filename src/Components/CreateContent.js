import React,{ Component } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button, Checkbox } from '@material-ui/core'
import { Add} from '@material-ui/icons'

class CreateContent extends Component {
  render(){
    return (
      <article>
        <h2>Create</h2> 
          <form action="/create_process" method="post"
            onSubmit={function(e){
                //debugger;
                e.preventDefault(); 
                this.props.onSubmit(e.target[0].value,e.target[1].value);
            }.bind(this)}
          >

            <TableHead>
              <TableRow>
                <TableCell>제목 <Checkbox value="checkedA" name="A" inputProps={{ 'aria-label': 'Checkbox A' }} /> </TableCell>
                <TableCell>설명</TableCell>
                <TableCell>기능</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                  <TableCell>
                    <input type="text" name="title" placeholder="title"></input>
                  </TableCell>              
                  <TableCell>
                  <textarea name="desc" placeholder="description"></textarea>
                  </TableCell>              
                  <TableCell><Button variant="contained" type="submit" startIcon={<Add />}>ADD</Button></TableCell>
              </TableRow>   
            </TableBody>
            
          </form>
      </article>
    );
  }
}

export default CreateContent;