import React, { Component } from 'react'
import Card from './component/card';
import { Animes } from './data'
import './App.css';
import Cart from './component/cart';
import Header from './component/header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart)
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      animes: Animes,
      selectedAnime: null,
      animeInCart:[]
    }
  }
  addToCart = (title) =>{
    const selectedAnime = this.state.animes.filter(a => a.title === title);
    const animeInCart= [...this.state.animeInCart, ...selectedAnime];
    this.setState({selectedAnime, animeInCart}, ()=>{ console.log(this.state.selectedAnime)})
   ;
;  }
closeCard = () =>{
  this.setState({selectedAnime: null, animeInCart:[]})
}
  render() {
    const fanNumbers = this.state.animeInCart.map(a => parseInt(a.members));
    const totalFans = fanNumbers.reduce((a, c)=> (a + c), 0);
    console.log(totalFans);
    const cards = this.state.animes.map((anime, i) => (<Card key={i} {...anime} addBtn={this.addToCart}/>) )
    return (
      <div className='App'>
        <Header/>
        <h1>Welcome to Anime Library</h1> 
        <span>Every information is based Anime Website MyAnimeList </span>   
        <div className='container'>
        <main>
          {cards}
        </main> 
        <aside>
        <Cart animeInCart ={this.state.animeInCart} totalFans={totalFans} anime={this.state.selectedAnime} closeBtn ={this.closeCard}/>
        </aside>
        </div>
          
      </div>
    )
  }
}
