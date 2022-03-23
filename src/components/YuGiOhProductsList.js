import React, {useState,useEffect,} from 'react'
import '../CSS/YuGiOhBanner.css';
import img from '../images/grandscreateurs.png'
import img2 from '../images/DSAlbaz.png'
import img3 from '../images/arsenalmyst.png'
import img4 from '../images/battaillechaos.png'
import img5 from '../images/fantome2nd.png'
import img6 from '../images/freresdelegende.png'
import img7 from '../images/OrMaximum.png'

function YuGiOhProductsList() {
    var displayList;
    const [searchValue,setSearchValue] = useState(0)
    const [listToDisplay,setListToDisplay] = useState(0)
    
    const [products, setProducts]= useState([
        {key:1 ,name:'Structure Deck Assaut d Albaz VF',        price:'12,99', url:img2},
        {key:2 ,name:'Grands Créateurs Booster Box VF',         price:'84,91', url:img},
        {key:3 ,name:'Coffret Arsenal Mystérieux VF',           price:'14,99', url:img3},
        {key:4 ,name:'La Bataille du Chaos Booster Box VF',     price:'84,99', url:img4},
        {key:5 ,name:'Fantômes du passé saison 2 VF',           price:'24,99', url:img5},
        {key:6 ,name:'Frères de Légende Booster Box VF',        price:'89,99', url:img6},
        {key:7 ,name:'Coffret Or Maximum VF',                   price:'24,99', url:img7},
        {key:8 ,name:'Coffret Or Maximum EN',                   price:'24,99', url:img7},
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
                        <img className='product__picture' src={e.url} alt={e.name}></img>
                        <h3>{e.name}</h3>
                        <p>{e.price}$</p>
                        <div className='buybutton'>Ajouter au panier</div>
                  </div>
       })}

  return (
    <div className='YuGiOhProductsList'>
        
                    
                        <div className='cardsRow__searchDiv'>
                            <input className='cardsRow__searchInput'type='text' placeholder='Search' onChange={(e)=>setFilter(e.target.value)}/>
                        </div>
                        <div className='YuGiOhProductsList'>
                        {/* <div className='product__card' key={products[0].key}>
                            <img className='product__picture' src={require('../images/DSAlbaz.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[0].name}</h3>
                            <p>{products[0].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[1].key}>
                            <img className='product__picture' src={require('../images/grandscreateurs.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[1].name}</h3>
                            <p>{products[1].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[2].key}>
                            <img className='product__picture' src={require('../images/arsenalmyst.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[2].name}</h3>
                            <p>{products[2].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[3].key}>
                            <img className='product__picture' src={require('../images/battaillechaos.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[3].name}</h3>
                            <p>{products[3].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[4].key}>
                            <img className='product__picture' src={require('../images/fantome2nd.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[4].name}</h3>
                            <p>{products[4].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[5].key}>
                            <img className='product__picture' src={require('../images/freresdelegende.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[5].name}</h3>
                            <p>{products[5].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[6].key}>
                            <img className='product__picture' src={require('../images/OrMaximum.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[6].name}</h3>
                            <p>{products[6].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div>
                        <div className='product__card' key={products[7].key}>
                            <img className='product__picture' src={require('../images/OrMaximum.png')} alt='SD assaut d albaz'></img>
                            <h3>{products[7].name}</h3>
                            <p>{products[7].price}$</p>
                            <div className='buybutton'>Ajouter au panier</div>
                        </div> */}
                        {displayList}
                    </div>
                        
                    
        
    </div>
  )
}

export default YuGiOhProductsList