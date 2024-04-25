import React from 'react'
import Navbar from "./Navbar";
import Sphere from "../Assets/sphere-dynamic-gradient.png"
import MusicNote from "../Assets/music-dynamic-color.png"
import Mic from "../Assets/mic-dynamic-premium.png"
import Headphone from "../Assets/headphone-dynamic-color.png"

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <>
        <div>
        <div id="content_div1" className="sections" >
            <section className="leftsection">
                <h1 className="heading txtanim">Heading 1</h1>
                <article className="txtanim"><span><b>L</b></span>orem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam minus error explicabo dolor omnis iusto? Suscipit, voluptas, nemo aspernatur vero fugit quisquam voluptatem id ad accusantium aliquid qui iure repudiandae atque ratione!</article>
            </section>
            <section className="rightsection">
                <img className="rtimgs" src={MusicNote} alt="notes" id="mnote" />
                <img id="sphere" src={Sphere} alt="sphere" />
            </section>
        </div>
        <div id="content_div2" className="sections">
            <section id="lftsct2" className="fade-in">
                <img id="headphones" src={Headphone} alt="headphones" height="600" width="600" />
                <img src={Sphere} alt="sphere" id="sphere2" />
            </section>
            <section id="rtsct2">
                <h1 className="heading txtanim">Heading 2</h1>
                <article className="txtanim"><span><b>L</b></span>orem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam minus error explicabo dolor omnis iusto? Suscipit, voluptas, nemo aspernatur vero fugit quisquam voluptatem id ad accusantium aliquid qui iure repudiandae atque ratione!</article>
            </section>
        </div>
        <div id="content_div3" className="sections">
            <section id="ltsct3" className="leftsection">
                <h1 className="heading txtanim">Heading 3</h1>
                <article className="txtanim"><span><b>L</b></span>orem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam minus error explicabo dolor omnis iusto? Suscipit, voluptas, nemo aspernatur vero fugit quisquam voluptatem id ad accusantium aliquid qui iure repudiandae atque ratione!</article>
            </section>
            <section id="rtsct3"  className="fade-in">
                <img id="mic" className="rtimgs" src={Mic} alt="mic" height="600px" width="600px" />
                <img id="sphere" src={Sphere} alt="sphere" />
            </section>
            </div>
        </div>
        </>
    </div>
  );
};

export default Home