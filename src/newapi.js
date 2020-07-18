import React from 'react';
import { Component } from 'react';
 import axios from 'axios'
// import axios, { AxiosResponse, AxiosInstance } from 'axios';
class Newapi extends Component
{
    constructor()
        {
            super()
            this.state={person:[]}
        }
        componentDidMount()
        {   
            axios.get('http://localhost:3000/getAllUser')
            .then(response =>{
                console.log("our api response")
                console.log(response);
                // this.setState({person:response.data})
            })
            .catch(error =>{console.log(error)})
            
        }
    
    render()
    {
        const {person}=this.state
        return(
            <div>
            
                 <ul>
                    {/* {this.state.person.title} */}
                    {/* {this.response} */}
                    {person.length ? person.map(person=><div>{person.name}</div>):null}
                    {/*+ {this.state.person.map(person =>{person.id })} */}
                    </ul>
                </div>
        )
    }
}
export default Newapi;

// person=[{},{}];
// if(person.length){
// for(let i=0;i<person.length;i++){
//     print (person[i].title)
// }
// }