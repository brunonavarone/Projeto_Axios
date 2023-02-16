import axios from "axios";

import blogFetch from "../axios/config";

import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import "./Home.css"


import { motion } from 'framer-motion'

import image1 from '../../src/images/image1.png'
import image2 from '../../src/images/image2.png'
import image3 from '../../src/images/image3.png'
import image4 from '../../src/images/image4.png'

const images = [image1, image2, image3, image4]

function App() {
  return 
}

const Home = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async() => {
    try {
      const response = await blogFetch.get('/Produtos');
      const data = response.data;
      console.log(data)

      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    getPosts()
  }, [])

  return <main className="home">
      <h1>Home</h1>
      {posts.length === 0 ? (<p>Carregando...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.tipo}</h2>
            <p>R${(post.preco *1).toFixed(2)}</p>
            <Link to = {`/posts/${post.id}`} className="btn">Ler mais</Link>
          </div>
          
        ))
      )
     
      } </main>;




      <div className="carousel">

      <motion.div className="carousel" whileTap={{ cursor: "grabbing"}}>

        <motion.div className="inner"
        drag="x"
        dragConstraints={{ right: 400, left: -400}}
        initial={{ x:100}}
        animate={{ x:350 }}
        transition={{ duration: 0.8 }}
        >
          

          {images.map(image => (
            <motion.div className = "item" key={image}>
              <img src={image} alt="texto"/>
            </motion.div>
            
          ))}

        </motion.div>

      </motion.div>

      </div>






       </main>;

    }
export default Home;