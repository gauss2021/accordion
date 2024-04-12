import { useState } from "react";
import data from "../config/data";
import './../styles/style.css';

export default function Accordion(){

    const [selected,setSelected]=useState([]);

    const [typeOfAccordion,setTypeOfAccordion]=useState(0);


    function handleActifAccordion(id){

        console.log('On clique');
        if(selected.includes(id)){
          const filterArray= selected.filter((identifiant)=>identifiant!=id);
          console.log('filter Array',filterArray);
          setSelected(...filterArray);
        }else{
            selected.push(id);
        }
        
        console.log(selected)

        
    }

    function changeTypeOfAccordion(type){
        setTypeOfAccordion(type);
    }

    return (<div className="app">
        <h5>Ceci est un accordion</h5>

        <p>Le but de ce mini projet est d'appliquer mes connaissance en react js, donc ce projet consite a creer un accordeon qui par defaut ne permet d'ouvrir qu'un seul accordeon, neanmoins on peut ouvrir jusqu'a deux accordeons en cliquant sur le boutton multiple accordeons </p>

        <div className="bouttons">
            <button onClick={()=>{changeTypeOfAccordion(0)}}>Mono accordion</button>

            <button onClick={()=>{changeTypeOfAccordion(1)}}>Multiple accordeons</button>
        </div>
       
       <hr style={{marginTop:"8px"}} />

        <div className="accordions"> 

           {data.length > 0 ? 

            data.map(item=> <div key={"item"+item.id} className="accordion">
                <div onClick={()=>handleActifAccordion(item.id)} className="accordion--header">
                    <span>+</span>
                    <h3>{item.title}</h3>
                   
                </div>

                {/* {selected.includes(item.id) ? (<div className="accordion--body">
                    <p>{item.description}</p>
                </div>):null} */}

            </div>)
           
           
           :<div>
           <h3>No data</h3></div>}

        </div>
    </div>);
}