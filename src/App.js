// App.js
import './App.css';
import { useState } from 'react';
import Ahmed from './ahmed';  // Import the Ahmed component
import Post from './post';
let pa=4
function App() {
  const [Values , setValues]=useState({
    firstname:'',
    lastname:'',
    tel:'',
    text:'',
    student:false,
    matiere:'',opt:''
    })
    function Ahmed(event){
      setValues({...Values,student:event.target.checked})
      
    }
    const[products,setproducts]=useState([
      { title: 'Cabbage', id: 1 },
      { title: 'Garlic', id: 2 },
      { title: 'Apple', id: 3 },
      { title: 'qfqfdqDqd', id: 4 }
    ])
    
    

    const listItems = products.map(product =>
      <li key={product.id}>
        {product.title}
        <button onClick={() => {delita(product.id)}}>delette</button>
      </li>
    );
    function delita(ida){
      const yo = [...products]
      /*let index=0
      let sel=0
      for(let device of yo){
        if(device.id == ida){
          sel=index
        }
        index++
      }
      yo.splice(sel,1)*/
      const yoo = yo.filter((div) => {return div.id !== ida})
      setproducts(yoo)
      
    }

    function change(){
      pa=pa+1
      setproducts([...products, {title : Ah , id:pa}])
      
    }
   const [Ah , setAh ]=useState("")



   

    
  
  return (
    <div className="App" >
      <h1>form in react</h1>
      <form onSubmit={(event) => {event.preventDefault();console.log(Values)}}>
        <label htmlFor='firstname'>votre prenom :</label>
        <input type='texte' placeholder='entre votre prenom' name='firstname' value={Values.name} onChange={(event) => {const newa={...Values}; newa.firstname=event.target.value;setValues(newa)}}/><br/>
        <label htmlFor='lastname'>votre nom :</label>
        <input type='texte' placeholder='entre votre nom' name='lastname' onChange={(event) => {const ha={...Values}; ha.lastname=event.target.value; setValues(ha)}}/><br/>

        <label htmlFor='adresse'>votre e-mail :</label>
        <input type='email' placeholder='entre votre e_mail onChange={(e) => handleChnages(e)}'/><br/>

        <label>are you student<input type='checkbox' value={Values.student} onChange={Ahmed}></input></label><br/>

        <label htmlFor='tel'>votre numero de telephone :</label>
        <input type='tel' placeholder='Entrer votre numero' onChange={(event) => {const a={...Values};a.tel=event.target.value;setValues(a)}}/><br/>

        <label>votre opinion de notre companie</label><br></br>
        <textarea value={Values.text}  onChange={(event)=> {const h={...Values};h.text=event.target.value;setValues({...Values,text:event.target.value})}}></textarea>

        <label htmlFor='genre'>genre :</label>
        <input type='radio' name='a' value="male" onChange={(event) => {setValues({...Values,opt:event.target.value})}}/>male
        <input type='radio' name='a' value='female' onChange={(event) => {setValues({...Values,opt:event.target.value})}}/>female<br/>

        <label htmlFor='subject'>
          <select value={Values.matiere} onChange={(event) => {setValues({...Values,matiere:event.target.value})}}>
            <option value="math">math</option>
            <option>physique</option>
            <option>Francais</option>
          </select>

        </label><br/>

        <label htmlFor='resume'>resume</label>
        <input type='file' placeholder='choisir un file'></input><br/>

        <label placeholder="URL" htmlFor='for'></label>
        <input type='texte' placeholder='donner un lien de votre profil'/><br/>

        <label htmlFor='textera' >About</label>
        <textarea rows="10" cols="30"></textarea><br/>
        <button type='reset'>Reset</button>
        <button type='submit'>submit</button>
      </form><br/>
      <ul>{listItems}</ul>
      <label><input value={Ah} onChange={(event) => {setAh(event.target.value)}}></input><button onClick={change}>ajouter</button></label>
      
      
      
      
    </div>
  );
}

export default App;

