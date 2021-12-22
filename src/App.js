import React from 'react';
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { useState } from 'react';
import monthDiff from './components/monthDiff';
import axios from "axios"


const App = () => {

             const [product, setProduct] = useState([]);
             const [search, setSearch] = useState("");
 
             const getProductData = async () => {
        try {
              const data = await axios.get(
              "https://60d075407de0b20017108b89.mockapi.io/api/v1/animals"
            );
              console.log(data.data);
              setProduct(data.data);
            }
        catch (e) {
              console.log(e);   
            }
            };
            useEffect(() => {
            getProductData();
            }, []);

        return (
          <div className='App'>
            
            <input type='text'
            className='input'
            placeholder='search....'
            onChange={event => { setSearch(event.target.value) }} />
            {
            product.filter((val) => {
            if (search === "")
            {
        return val
            }
            else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val
            }
        else
        return false
          }).map((val) =>
          {
        return (
            <div className='user' >
            <p>{val.name}</p>
            <p>age: { monthDiff(val.bornAt)   } months</p>

            </div>
          );
          })}
            
          </div>
  );
};


export default App;
