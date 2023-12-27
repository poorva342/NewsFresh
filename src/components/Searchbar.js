import React, {useState} from 'react'
import "./SearchBar.css"




export default function Searchbar({articles}) {
  
    
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
    
        const newFilter = articles.filter((element) => {
          return element.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };
      
    const [wordEntered, setWordEntered] = useState("");
  
    return (

      <div className='search'>
    <div className="searchInputs">
    
      <div class="d-flex" style={{width:"500px"}}>
        <input className="form-control me-2 centered-placeholder" type="search" placeholder="search" aria-label="Search" style={{marginTop:"67px"}} onChange={handleFilter}/>
        <button className="btn btn-outline-success" type="submit" style={{marginTop:"67px"}}>Search</button>
        </div>
       
       {filteredData.length !=0 &&(
        <div className="dataResult " >
       {filteredData.map((element) => {
           return (
                   <a className="dataItem" href={element.url} target='_blank' key={element.url} style={{textDecoration:'none'}}> <p> {element.title}</p>
                  </a>
               
               );
            })}
           
             </div>
             )}
             </div>
   </div>
     
    )
  
}

