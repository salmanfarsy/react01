import React, { Component } from 'react'
import Card from './component/card';
import { Animes } from './data'
import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      animes: Animes
    }
  }
  
  render() {
    const cards = this.state.animes.map((anime, i) => (<Card key={i} {...anime} />) )
    return (
      <div>
        <h1>Welcome to Anime Library</h1> 
        <span>Every information is based Anime Website MyAnimeList </span>   
        <main>
          {cards}
        </main>     
      </div>
    )
  }
}
