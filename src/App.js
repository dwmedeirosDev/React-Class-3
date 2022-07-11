import React from "react"

export default class App extends React.Component{
  state = {
    name: "David Medeiros"
  }
  render(){
    return(
      <h1>Olá Mundo, {this.state.name}</h1>
    )
  }
}