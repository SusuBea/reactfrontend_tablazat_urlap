export default function Elem(props) {
    
  

    function kattintas(){
        
        console.log(props.obj.artist_id)
        props.kattintas(props.obj.artist_id)
    }


    return(
        
        <tr className="elem" > 
        {

            Object.keys(props.obj).map((kulcs,index)=>{
              
                  
             
                    return <td className='txt' key={index}>{props.obj[kulcs]}</td>
              
                
            }) 
        }

             <td><button onClick={kattintas}  >Szerkeszt</button> </td> <td><button onClick={kattintas}  >Töröl</button> </td>
        </tr>
       
    )
     
}
