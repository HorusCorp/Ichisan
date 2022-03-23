import React, {useState,useEffect} from 'react'
import '../CSS/YuGiOhBanner.css';
import '../CSS/PokemonBanner.css';
import img from '../images/everfest.png'
import img2 from '../images/rhinarvsdori.png'

function FabProductsList() {

    var displayList;
    const [searchValue,setSearchValue] = useState(0)
    const [listToDisplay,setListToDisplay] = useState(0)
    
    const [products, setProducts]= useState([
        {key:1 ,name:'Deck Dorinthea vs Rhinar EN',         price:'44,99', url:img2},
        {key:2 ,name:'Everfest Booster Box EN',        price:'79,99', url:img},
        
    ])

    useEffect(() => {
    }, [displayList])

    function setFilter (filterValue) {
        setSearchValue(filterValue.toUpperCase())
        setListToDisplay(1)
    }
    if(listToDisplay === 0){
        displayList = products.map(e =>{
            return<div className='product__card' key={e.key}>
                        <img className='product__picture' src={e.url} alt='SD assaut d albaz'></img>
                        <h3>{e.name}</h3>
                        <p>{e.price}$</p>
                        <div className='buybutton'>Ajouter au panier</div>
                  </div>
        })}
    else if(listToDisplay===1){
        displayList = products.filter(e => e.name.toUpperCase().includes(searchValue)).map(e =>{
            return<div className='product__card' key={e.key}>
                        <img className='product__picture' src={e.url} alt='SD assaut d albaz'></img>
                        <h3>{e.name}</h3>
                        <p>{e.price}$</p>
                        <div className='buybutton'>Ajouter au panier</div>
                  </div>
       })}

  return (
    <div className='FabProductsList'>
                        <div className='cardsRow__searchDiv'>
                            <input className='cardsRow__searchInput'type='text' placeholder='Search' onChange={(e)=>setFilter(e.target.value)}/>
                        </div>
                        <div className='YuGiOhProductsList'>
        {/* {
                    products.map(item =>(
                        <div className='product__card' key={item.key}>
                            <img className='product__picture' src={require('../images/starEtincelante.png')} alt='SD assaut d albaz'></img>
                            <h3>{item.name}</h3>
                            <p>189,99$</p>
                            <div className='buybutton'>Add to Cart</div>
                        </div>
                    ))
        } */}
        {displayList}
        </div>
    </div>
  )
}

export default FabProductsList