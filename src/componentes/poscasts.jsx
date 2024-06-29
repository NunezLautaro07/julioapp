import React, { useState, useEffect } from "react";
import fisica3 from "./imagenes/fisica3.jpg";
import fisicamodernapdf from "./imagenes/fisicamodernapdf.pdf";
import fisica2 from "./imagenes/fisica2.mp3"
import fisica1 from "./imagenes/fisica1.mp3"
import "../style.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faFilePdf } from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlay, faFilePdf);

function Podcasts() {
  const [posts, setPosts] = useState([]);
  const [durations, setDurations] = useState({});

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

  useEffect(() => {
    posts.forEach((post) => {
      const audio = document.querySelector(`#audio_podcast_${post.id}`);
      if (audio) {
        audio.onloadeddata = () => {
          setDurations((prevDurations) => ({
            ...prevDurations,
            [post.id]: audio.duration,
          }));
        };
      }
    });
  }, [posts]);

  const activarAudio = (id) => {
    const audio = document.querySelector(`#audio_podcast_${id}`);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="container-fluid margen-arriba-nav">
      {posts.map((post) => {
        const audioFileName = `${post.nombre.split(' ').join('').toLowerCase()}`;
       
        return (
          <div key={post.id}>
            <hr className="mb-4" />
            <div className="row g-2">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-4">
                <img src={fisica3} className="imagen-podcast" alt="podcast" />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8">
                <div>
                  <span className="fw-bold">{post.nombre}</span>
                  <br />{post.descripcion}
                  <br />
                  <div className="mt-2">
                    <a href={fisicamodernapdf} download className="">
                      <FontAwesomeIcon
                        icon="file-pdf"
                        size="xl"
                        className="margen-pdf"
                      />
                    </a>

                    <FontAwesomeIcon
                      className="ml-1"
                      icon={faCirclePlay}
                      size="xl"
                      id="audio_fa"
                      onClick={() => activarAudio(post.id)}
                    />
                    
                    <audio
                      src={fisica1}
                      type="audio/mpeg"
                      id={`audio_podcast_${post.id}`}
                    ></audio>
      
                    {durations[post.id] && (
                      <p className="d-inline disabled small blockquote-footer">
                        {Math.round(durations[post.id])} segundos
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-3" />
          </div>
        );
      })}
    </div>
  );
}

export default Podcasts;
