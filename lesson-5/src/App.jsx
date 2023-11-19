import { useState, useEffect } from 'react'
import "./app.css"




function App() {
  
  const [number, setNumber] = useState("")
  const [data, setdata] = useState({})
  const [filterData, setFilter] = useState([])

  async function fetchData (){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
    const list = await response.json()
    setdata(list)
   
   

  }

  // async function filterF(){
  //   const responseS = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  //   const listS = await responseS.json()
  //   setFilter(listS)

  //   // listS.filter((el)=>{

      
  //   //   // const lengs = el.title.length

  //   //   if (number == 20 && el.title.length < 20){
  //   //     console.log(el.title.length)
        
  //   //   } 
 
  //   // }) 

   
   
  // }

  function filterF(){
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res)=> res.json())
    .then((data)=> {
      
     const filterED = data.filter((el)=> el.title.length < number)
     setFilter(filterED)
   
      
      
    })
    .catch((error)=>{
      console.log(error, "error")
    })

    
  }

  



 


  // useEffect (()=>{
  //   filterF()
  //   // console.log(filterData, 'dgshdghs')
  // },[])


  
  return (
    <>
 
    
    <div>
     number : {number}
     <br/>
     title : {data.title}
     <br/>
    <input type="number" onChange={(event) => setNumber(event.target.value)}/>
    <button onClick={()=>fetchData()}>Search</button>
    <button onClick={()=> filterF()}>SearchFilter</button>
    
    </div>


    <section className='lengsSection'>
    <div className='lengs'>
      <p>lengs : 20 </p>
      <div>

      {filterData.map((el,index)=>{
        if (filterData[index].title.length < 20 ){
          return(
            <div key={index}>
             <p>{el.title}</p>
            </div>
          )
        }

      })}
      
      </div>
      
    </div>
    <div className='lengs'>
      <p>lengs : 50</p>
      <div>

      {filterData.map((el,index)=>{
        
        if (filterData[index].title.length > 20 && filterData[index].title.length < 50){
          return(
            <div key={index}>
             <p>{el.title}</p>
            </div>
          )
        }

      })}
      
      </div>
    </div>
    <div className='lengs'>
      <p>lengs : 100</p>
      <div>
      {filterData.map((el,index)=>{
       
        if (filterData[index].title.length > 50){
          return(
            <div key={index}>
             <p>{el.title}</p>
            </div>
          )
        }

      })}
      </div>
    </div>
    </section>
    
    </>
    
  )
  
  }
  
  


export default App
