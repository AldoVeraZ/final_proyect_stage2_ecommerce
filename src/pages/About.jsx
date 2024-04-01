// En el archivo About.jsx del Proyecto 2
import React, { useState, useEffect, useRef } from "react";
// Importaciones de imágenes desde la carpeta 'img'. Asegúrate de que las rutas sean correctas.
import alfredAndBruce from "../img/alfred and bruce.webp";
import jillValentine from "../img/jill valentine.jpg";
import batmanArmour from "../img/batman armour.jpg";
import claire from "../img/claire.jpg";
import lara from "../img/lara.webp";
import jaxteller from "../img/jaxteller.avif";
import k1 from "../img/k1.jpg";
import k2 from "../img/k2.jpeg";
import k3 from "../img/k3.jpg";
import k4 from "../img/k4.jpeg";
import k5 from "../img/k5.jpg";
import k6 from "../img/k6.jpeg";
import k61 from "../img/k6.1.jpg";

function About() {
  const sliderRef = useRef(null); // Ref para acceder directamente al elemento DOM del slider.
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true); // Estado para manejar si el autoplay está activado o no.

  useEffect(() => {
    // Efecto para manejar la lógica del slider
    const nextSlide = () => {
      if (isAutoplayEnabled && sliderRef.current) {
        const slider = sliderRef.current; // Accede al elemento del slider
        const currentTransformValue = getComputedStyle(slider).transform; // Obtiene el valor actual de transformación del slider
        const matrix = new DOMMatrix(currentTransformValue); // Crea una matriz DOM para interpretar el valor de transformación
        const currentTranslateX = matrix.m41; // Extrae el valor de traslación en X
        const slideWidth = slider.clientWidth; // Obtiene el ancho del contenedor del slider

        // Aplica una transición para mover el slider
        slider.style.transition = "transform 0.4s ease-in-out";
        slider.style.transform = `translateX(${
          currentTranslateX - slideWidth
        }px)`;

        // Después de la transición, reajusta los elementos para un bucle infinito
        setTimeout(() => {
          slider.appendChild(slider.firstElementChild); // Mueve el primer elemento al final
          slider.style.transition = "none"; // Elimina la transición para que el cambio sea instantáneo
          slider.style.transform = "translateX(0)"; // Restablece la transformación
        }, 400);
      }
    };

    const intervalId = setInterval(nextSlide, 5000); // Establece un intervalo para cambiar de slide automáticamente

    // Limpieza: elimina el intervalo cuando el componente se desmonta o el autoplay se desactiva
    return () => clearInterval(intervalId);
  }, [isAutoplayEnabled]);

  // Función para activar/desactivar el autoplay
  const toggleAutoplay = () => setIsAutoplayEnabled(!isAutoplayEnabled);

  return (
    <div>
      <div className="horizontal-padding vertical-padding">
        <div className="info">
          <h2>
            Somos aficionados por la colección de figuras, contamos con la mejor
            calidad de juguetes de colección, con distintos tamaños a escala y
            nivel de realismo, contamos con un catálogo de figuras de colección,
            para quienes quieran disfrutar de este hobby, Somos ©Toys Collection
            From Hell.
          </h2>
          <p className="heroes">
            Vigilantes, Antiheroes y Supervivientes, ¿escoges a los buenos de la
            película?
          </p>
        </div>
        <div className="slider-container">
          <div className="slider" ref={sliderRef} onClick={toggleAutoplay}>
            <img
              className="slide"
              src={alfredAndBruce}
              alt="Alfred and Bruce"
            />
            <img className="slide" src={jillValentine} alt="Jill Valentine" />
            <img className="slide" src={batmanArmour} alt="Batman Armour" />
            <img className="slide" src={claire} alt="Claire" />
            <img className="slide" src={lara} alt="Lara" />
            <img className="slide" src={jaxteller} alt="Jax Teller" />
          </div>
        </div>
      </div>

      <div className="horizontal-padding vertical-padding">
        <div className="info">
          <h2>
            En la vida real hay abominaciones que existieron en el pasado, que
            marcaron la humanidad con su maldad, son sujetos que han sido
            estudiados tanto por científicos, médicos e incluso han influenciado
            la cultura como el cine.
          </h2>
          <p className="blood">
            Asesinos seriales de los 70-80, ¡coleccionalos, ojo! solo para
            personas con criterio formado.
          </p>
        </div>
        <div className="image-grid">
          <img className="wide tall grid-item" src={k1} alt="K1" />
          <img className="grid-item" src={k2} alt="K2" />
          <img className="grid-item" src={k3} alt="K3" />
          <img className="grid-item" src={k4} alt="K4" />
          <img className="grid-item" src={k5} alt="K5" />
          <img className="grid-item" src={k6} alt="K6" />
          <img className="grid-item" src={k61} alt="K61" />
        </div>
      </div>
    </div>
  );
}

export default About;
