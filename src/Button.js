import React, { Component } from "react"

class Button extends Component
{
    constructor()
    {super()
    this.state={count:0}
this.countIterator=this.countIterator.bind(this)}
countIterator()
{
    this.setState((state)=>({count:state.count+1}))
}
   render(){
       return(<div>
           <h3>Count meter :{this.state.count}</h3>
           <button onClick={this.countIterator}>Click me!</button>
           </div>
       )
   } 
}
export default Button