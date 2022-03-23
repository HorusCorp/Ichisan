import React, {useState,useEffect} from 'react'
import '../CSS/YuGiOhBanner.css';
import '../CSS/PokemonBanner.css';
import img from '../images/starEtincelante.png'
import img2 from '../images/regnedeglace.png'
import img3 from '../images/poingdefusion.png'
import img4 from '../images/styledecombat.png'
import img5 from '../images/fantome2nd.png'
import img6 from '../images/freresdelegende.png'
import img7 from '../images/OrMaximum.png'

function PokemonProductsList() {

    var displayList;
    const [searchValue,setSearchValue] = useState(0)
    const [listToDisplay,setListToDisplay] = useState(0)
    
    const [products, setProducts]= useState([
        {key:1 ,name:'Stars Etincelantes Booster Box VF',        price:'12,99', url:img},
        {key:2 ,name:'Règne de Glace Booster Box VF',         price:'84,91', url:img2},
        {key:3 ,name:'Poing de Fusion Booster Box VF',           price:'14,99', url:img3},
        {key:4 ,name:'Styles de Combat Booster Box VF',     price:'84,99', url:img4},
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
    <div className='PokemonProductsList'>
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

export default PokemonProductsList