
import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Notes from './Notes';
import '../Stylesheets/Home.css'
import Header from './Header';
import Footer from './Footer';


function Home(props) {

  const[text,setText]=useState(' ')
  const[con,setCon]=useState(' ')
  const[notes,setNotes]=useState([]);

 const handleChange1 = (event)=>{
     setText(event.target.value);
     
 }

 const handleChange2 = (event) =>{
     setCon(event.target.value);
 }
 
 const inputReturn = ()=>{
  //  const textx=text;
  //  const conx=con;
 
     const details = {
       text:text,
       content:con
     }
     
     setNotes(notes=>[...notes,details]);
     console.log(text);
     console.log(con);
     setText(" ");
     setCon(" ");
     document.getElementById("change").reset();

     
 }

// const handleChange1 = (event)=>{
//     const tit=event.target.value;
//     console.log(tit);
// }

// const handleChange2 = (event)=>{
//     const con=event.target.value;
//     console.log(con);
// }

// const inputReturn = ()=>{
  // document.getElementById("change").reset();
// }


  return( <div>
 

<Header></Header>
   

   <div className="main_card">
   <form id="change">
       <h2><input id="title" onChange={handleChange1} placeholder='Title'></input></h2>
       <textarea id="content" onChange={handleChange2} placeholder='Take a note...'></textarea>
       <Button id="click" className="addbtn"onClick= {()=>inputReturn()}>Add</Button>
       </form>
    </div>

    <br></br>

    <Notes notes={notes} setNotes={setNotes}/>

    <br></br>
    <br></br>
    <Footer></Footer>
    
  </div>);
}
export default Home