import React from 'react';
import { Button } from 'react-bootstrap';
import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import '../Stylesheets/Notes.css';
const Notes = ({notes , setNotes})=> {
  // const text=props.text;
  // const content=props.content;
  // console.log(text);
  // console.log(content);
 
  const deleteSlide = (index) =>{
    var dispArray=[];
    for(let i=0;i<index;i++)
       dispArray.push(notes[i]);

    for(let i=index+1;i<notes.length;i++)
       dispArray.push(notes[i]);

       setNotes(dispArray);
  }

  // function deleteSlide(index){

  //   for(let i=0;i<index;i++)
  //   setNotes(notes=> [notes[i]]);

  //   for(let i=index+1;i<notes.length;i++)
  //   setNotes(notes=>[...notes,notes[i]]);
  // }

  return( <div className="notes">
        
    {
      notes.map((slide,index) =>{
        return(
        
          <div key={index} className="eachNotes">
              <h2 className="notesTitle">{slide.text}</h2>
              <p className="notesContent">{slide.content}</p>
              <Button id="delete" onClick={ ()=> deleteSlide(index)}>DELETE</Button>
              
          </div>
          
        )
      })
    }

  </div>);
}
export default Notes;