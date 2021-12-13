import React,{useContext, useState} from "react";
import { prodContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Addpro(){

    let context = useContext(prodContext);
    let navigate = useNavigate()

  async  function saveHandeler(){
       let respon = await axios.post('https://614eacb5b4f6d30017b4833b.mockapi.io/products',{
           name,
           price,
           model,
           units
       })
       

        navigate('/all')
    }
    
    let [name,setname]=useState();
    let [price,setprice]=useState();
    let[model,setmodel]=useState();
    let[units,setunits]=useState();

    return(
        <div className="add-product col-8 mt-5">
            <h2 className="mb-4">Add Product</h2>
  <div class="form-group">
    <label for="exampleInputname">Product Name</label>
    <input type="text" class="form-control" onChange={(e)=>setname(e.target.value)} id="exampleInputname" aria-describedby="emailHelp"/>
    
    <label for="exampleInputnum">Product Price</label>
    <input type="Number"  class="form-control" onChange={(e)=>setprice(e.target.value)} id="exampleInputnum" aria-describedby="emailHelp"/>
    
    <label for="exampleInputdis">Product model</label>
    <input type="text" class="form-control" onChange={(e)=>setmodel(e.target.value)} id="exampleInputdis" aria-describedby="emailHelp"/>

    <label for="exampleInputnum">No Units</label>
    <input type="Number"  class="form-control" onChange={(e)=>setunits(e.target.value)} id="exampleInputnum" aria-describedby="emailHelp"/>
    
  </div>

  <button type="submit" className="btn btn-primary" onClick={saveHandeler} >Add product</button>

        </div>
    )
}