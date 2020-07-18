import React, { Component } from 'react';
class Demo extends Component
{
    constructor(props)
    {
        super(props)
        this.state={name:''}
        this.changename=this.changename.bind(this)
        this.buttonchange=this.buttonchange.bind(this)
    }
    changename(e)
    {
        this.setState({name:e.target.value})
    }
    buttonchange(e)
    {
        this.setState({name:this.state.name})
        const a =this.state.name;
        console.log(a)
        let user={}
        user.name= a
        console.log(user)
    }
    
    render()
    {
        
        return(
            <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.changename} placeholder="name"/>
                <button onClick={this.buttonchange}>click</button>
                </div>

        )
    }
}
export default Demo;