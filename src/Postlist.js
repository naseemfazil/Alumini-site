import React, { Component } from 'react'
import axios  from 'axios'
// import './st.css'

class Postlist extends Component
{
    constructor()
    {
        super();
        this.state={post:[]}
    }

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response) 
            this.setState({post : response.data})})
        .catch(error => {console.log(error)})
        
    }
    renderTableData()
    {
       return this.state.post.map(post => <div>
           <tr>
           <td>{post.id}</td>
           <td>{post.title}</td>
           <td>{post.body}</td>
           </tr></div>)
    }

   render()
   {
       return(<div>
               
                  {this.renderTableData()}
       </div>)
   }

}

export default Postlist;