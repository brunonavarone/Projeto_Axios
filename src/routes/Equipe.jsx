import React from 'react';

import "./Equipe.css"

import blogFetch from '../axios/config';

import {useState, useEffect} from 'react';

const Equipe = () => {
  const [team, setTeam] = useState([])
    const getTeam = async() => {
      try{
        const response = await blogFetch.get('/Usuarios');
        const data = response.data;

        setTeam(data);
      } catch(error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getTeam()
    }, [])
    return (
      <div className='team-main-container'>
        <h1>Equipe</h1>
        
            )
            )
          )
          }
        </div>
      </div>
    ) 
}




export default Equipe;