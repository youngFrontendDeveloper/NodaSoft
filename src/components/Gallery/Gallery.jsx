import "./Gallery.css";
import { useRef } from "react";

function Gallery() {

  return (
    <section className="gallery">

        <div className="gallery-item-block">
          <div className="gallery-item-inner">
            <div className="gallery-item"
              // ref={divRef1}
            >

            </div>
          </div>
        </div>

        <div className="gallery-item-block">
          <div className="gallery-item-inner">
            <div className="gallery-item"
              // ref={divRef2}
            >

            </div>
          </div>
        </div>

        <div className="gallery-item-block">
          <div className="gallery-item-inner">
            <div className="gallery-item"
              // ref={divRef1}
            >

            </div>
          </div>
        </div>
        <div className="gallery-item-block">
          <div className="gallery-item-inner">
            <div className="gallery-item"
              // ref={divRef1}
            >

            </div>
          </div>
        </div>


    </section>
  );
}

export default Gallery;