import {useState} from "react"

export default function Urlap(props){

    const [obj, setObj] = useState({title: "", date: "", price: ""})


    function kuld(event){
        event.preventDefault()
        console.log(obj)
        props.kuld(obj)

    }    
    function adatValt(event){
        //console.log(event.target)
        //console.log(event.target.value)
        //console.log(event.target.id)

        const masolat = {...obj}
        masolat[event.target.id] = event.target.value
        setObj(masolat)
    }

    return(
        <>
        <h2>Új adat rögzítése</h2>
            <form onSubmit={kuld} className="">

            <div className="form-group">
            <label htmlFor="title" >Title</label>
            <input type="text"  className="form-control" onChange={adatValt} id="title" placeholder="" name="title" value={obj.title} />
            </div>

            <div className="form-group">
            <label htmlFor="date" >Date</label>
            <input type="date" className="form-control" onChange={adatValt} min="2000"  max="2024" id="date" placeholder="2000" name="date" value={obj.date}/>
            </div>

            <div className="form-group">
            <label htmlFor="price" >Price</label>
            <input type="number" className="form-control" onChange={adatValt} min="2000"  max="2024" id="price" placeholder="" name="price" value={obj.price}/>
            </div>

            <input type="submit" id="submit" value="OK" className="btn btn-primary"/>

            
            </form>
        </>
    )


}