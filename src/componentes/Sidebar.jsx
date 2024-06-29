import React, { useState, useEffect } from 'react';
import "../style.css"

function Sidebar(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/podcast")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

    return(
        <>
        <div className="estatico-sidebar   margen-arriba-nav-sidebar" >
       <p className='text-center fw-bold'>Temas</p>
       <hr />
         
          <ul className="list-unstyled ">
            {posts.map((post)=>(
             
              <li className="mb-1 " key={post.id}>
              <button
                className="btn border-0   text-start"
                >
                {post.tema}
              </button>
            </li>
          
            ))}
        
          
           
          </ul>
        </div>
       
        </>
    )

}
export default Sidebar;