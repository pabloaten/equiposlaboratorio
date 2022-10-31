import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Footer from './Footer';
import Slider from './Slider';
import discover from './discovery.png';


const Nav = () => {


    const fecha = new Date(Date.now())
    return (
        <div>

            <nav>
                <div className="uk-flex uk-flex-around uk-padding">
                    <div>
                        <img src="http://www.taisl.com/pc/Imagenes/logotaisl.jpg" />
                    </div>

                    <p className="menu">INICIO</p>
                    <p className="menu">RMN</p>
                    <p className="menu">NIR</p>
                    <p className="menu">MILWAUKEE</p>
                    <p className="menu">MEDIDORES</p>
                    <p className="menu">COMUNICAR</p>
                    <p className="menu">SERVICIOS</p>
                    <p className="menu">SITEMAP</p>


                </div>





            </nav>
            <div className="uk-background-cover uk-background-muted menu-img">
                <h1 uk-scrollspy="cls:uk-animation-fade" className="uk-text uk-text-center titulo">Técnicas Asociadas de Instrumentación, S.L.</h1>
            </div>


            <h2>{fecha.toDateString()}</h2>
           <div  uk-scrollspy="cls:uk-animation-fade" className=" uk-padding uk-text-center"><h1>SLIDER</h1></div>
            <div  uk-scrollspy="cls:uk-animation-fade" className="inicio uk-padding uk-flex uk-flex-around">
                <img uk-scrollspy="cls:uk-animation-fade" width="50%" src={discover}/>
                <p className="uk-flex uk-flex-center uk-flex-middle">	Agradecemos su visita a nuestro sitio web donde encontrará una amplia gama de equipos para el laboratorio y el campo.</p>
          </div>
            <div uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500;" className="uk-flex uk-flex-around uk-flex-middle uk-flex-row uk-padding">


                <div class="uk-card uk-card-default uk-width-1-5">
                    <div class="uk-card-media-top uk-inline-clip uk-transition-toggle">
                        <img src="http://www.taisl.com/pc/Draminski/Imagenes/draminski-gmm.jpg" width="300" height="400" alt="" />
                        <div class="uk-position-center">
                <i class="uk-transition-fade fa fa-search fa-6" style={{color:"white",fontSize:'40px'}}aria-hidden="true"></i>
            </div>
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Media Top</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div class="uk-card uk-card-default uk-width-1-5">
                    <div class="uk-card-media-top uk-inline-clip uk-transition-toggle">
                        <img src="http://www.taisl.com/pc/Draminski/Imagenes/draminski-gmm.jpg" width="300" height="400" alt="" />
                        <div class="uk-position-center">
                <i class="uk-transition-fade fa fa-search fa-6" style={{color:"white",fontSize:'40px'}}aria-hidden="true"></i>
            </div>
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Media Top</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div class="uk-card uk-card-default uk-width-1-5">
                    <div class="uk-card-media-top uk-inline-clip uk-transition-toggle">
                        <img src="http://www.taisl.com/pc/Draminski/Imagenes/draminski-gmm.jpg" width="300" height="400" alt="" />
                        <div class="uk-position-center">
                <i class="uk-transition-fade fa fa-search fa-6" style={{color:"white",fontSize:'40px'}}aria-hidden="true"></i>
            </div>
                    </div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">Media Top</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>



            </div>
            <div className="uk-flex uk-flex-around uk-flex-middle uk-padding mapa-container">
                <iframe uk-scrollspy="cls:uk-animation-slide-left" src="https://maps.google.com/maps?q=C/%20Mar%C3%ADa%20Teresa,%2017%20-%202C%2028028&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" ></iframe>

                <div  uk-scrollspy="cls:uk-animation-slide-right" id="mapa" className="uk-flex uk-flex-column"><p>
                    T.A.I.S.L.
                </p>

                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> C/ María Teresa, 17 - 2C
                        28028    MADRID
                    </p>

                    <p><i class="fa fa-phone" aria-hidden="true"></i>  Tel: (91) 546 17 72</p>

                    <p><i class="fa fa-envelope" aria-hidden="true"></i> E-mail: info@taisl.com</p>

                    <p><i class="fa fa-hourglass-start" aria-hidden="true"></i> Oficina: 10:00 a 17:00 h
                        de lunes a viernes</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Nav