import React from 'react'

const Footer = () => {
    return (
        <div className="pie uk-padding">

            <div className="uk-flex uk-flex-around uk-flex-middle">
                <li><a href="http://www.taisl.com/pc/index.html"> Inicio </a></li>
                <li><a href="http://www.taisl.com/pc/sitemap.html"> | Sitemap </a></li>
                <li><a href="http://www.taisl.com/pc/quienes_somos.htm">| Acerca nosotros </a></li>
                <li><a href="http://www.taisl.com/pc/datos.htm">| Protección Datos </a></li>
                <li><a href="http://www.taisl.com/pc/registrar.htm">| Distribuidores </a></li>
                <li><a href="http://www.taisl.com/pc/comunicar.htm">| Comunicar con nosotros </a></li>
                <li><a href="http://www.taisl.com/pc/servicios.htm">| Servicios clientes </a></li>
            </div>
            <div className="uk-text-center uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-margin" >
                <br/>
                <p><i class="fa fa-copyright" aria-hidden="true"></i> Copyright © 2002 - 2022 . Todos los derechos reservados.</p>
                <p>Técnicas Asociadas de Instrumentación, S.L.</p></div>


        </div>
    )
}

export default Footer