/*import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/style.css';


function PaginaWeb() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    $('#ingresarModal').on('show.bs.modal', function (e) {
      // Aquí puedes agregar código para cuando se abre el modal
    });
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <div>
      <header className="encabezado">
        <div className="contenido">
          <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <a className="navbar-brand" href="#principal">
              <img src="img/menuImg.png" alt="" className="img-fluid" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#principal">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#catalogo">
                    Catálogo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#quienes-somos">
                    Quiénes Somos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nuestros-servicios">
                    Nuestros Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    id="ingresar"
                    onClick={handleModalOpen}
                  >
                    Ingresar
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

  
     
      
      <div className="slider">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={require('../img/frijol.jpg')} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../img/frijol1.jpg')} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require('../img/frijol2.jpg')} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        <section id="principal" className="principal-section">
            <div className="container">
                <div className="content">
                    <div className="image-container">
                        <img src={require('../img/bonanza.png')}  alt="Imagen Principal" />
                    </div>
                    <div className="text-container">
                        <h1>¡Bienvenidos a Multigranos Bonanza!</h1>
                        <p>Bonanza, ubicada en el kilómetro 20.7 de Carretera a El Salvador, se dedica principalmente a la distribución de granos básicos y otros productos de primera necesidad.</p>
                        <br />
                        <p>El proceso de producción de los diversos granos inicia mediante la selección en campo de las mejores cosechas nacionales, obteniendo producto altamente calificado el cual se dispone en bodega para iniciar con un proceso de delicada limpieza y curación. Luego se realiza 
                            una clasificación industrial, seguido por un procedimiento de pulido del grano y por último un control de calidad supervisando el cumplimiento de los principales atributos del 
                            producto final para trasladar al respectivo empaque a sus diferentes presentaciones y finalmente a distribución.</p>
                        <br />
                        <p>Se tiene la capacidad instalada para suministrar a nivel nacional frijol y arroz, gracias a la infraestructura de equipo y personal altamente calificado para el manejo de productos de primera necesidad.</p>
                    </div>
                </div>
            </div>
        </section>
        <main>
            <section id="inicio" className="hero">
                <div className="container">
                    <h2></h2>
                    <div className="features">
                        <div className="feature">
                            <i className="fas fa-tractor"></i>
                            <p>Seleccionamos las mejores cosechas nacionales, obteniendo producto altamente calificado el cual se dispone en bodega para iniciar con un proceso de delicada limpieza y curación.</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <p>Se tiene la capacidad instalada para suministrar a nivel nacional, gracias a la infraestructura de equipo y personal altamente calificado para el manejo de productos de primera necesidad.</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-clock"></i>
                            <p>Suministramos los productos a tiempo de acuerdo a las necesidades del mercado en todo momento, velando por la calidad y comprometida con ofrecer producto hecho en Guatemala.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="catalogo" className="container">
                <h2>Catálogo</h2>
                <div className="product-container">
                    <div className="product">
                        <img src={require('../img/frijol.jpg')}  alt="Frijol 1" />
                        <h3>Frijol Rojo</h3>
                    </div>
                    <div className="product">
                        <img src={require('../img/frijol2.jpg')}  alt="Frijol 2" />
                        <h3>Frijol Negro</h3>
                    </div>
                    <div className="product">
                        <img src={require('../img/frijol3.jpg')}  alt="Frijol 3" />
                        <h3>Frijol Pinto</h3>
                    </div>
                    <div className="product">
                        <img src={require('../img/frijol4.jpg')}  alt="Frijol 4" />
                        <h3>Frijol Blanco</h3>
                    </div>
                </div>
            </section>

            <section id="quienes-somos" className="quienes-somos-section">
                <div className="container">
                    <div className="content">
                        <div className="image-container">
                            <img src={require('../img/quines.jpg')} alt="Imagen de empresa de granos" />
                        </div>
                        <div className="text-container">
                            <h2>Bonanza: Una Trayectoria de Calidad</h2>
                            <p>Bonanza es una empresa fundada en noviembre de 1996 ante la oportunidad de promover y distribuir productos nacionales. En sus inicios, su principal producto fue el frijol, tanto para mayoristas como minoristas, logrando una alta aceptación en el mercado.</p>
                            <p>La alta demanda de productos de primera necesidad permitió concretar nuevas oportunidades y aumentar la variedad de productos, introduciendo el arroz y arroz precocido, dando vida a la marca La Nacional, categorizada de primera calidad y con distribución en los principales supermercados del país.</p>
                            <p>Durante el paso de los años se han adherido productos al catálogo como gran variedad de granos, especias, cereales, pastas y salsas, resultado de la alta capacidad de atención y mantenimiento de la calidad. En Bonanza lo principal es suministrar los productos a tiempo de acuerdo a las necesidades del mercado en todo momento, velando por la calidad y comprometida con ofrecer productos hechos en Guatemala.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="nuestros-servicios" className="container">
                <h2>Nuestros Servicios</h2>
                <div className="product-container">
                    <div className="product">
                        <h3>Misión</h3>
                        <p>Mejorar continuamente y mantener actualizados los procesos para el procesamiento de granos, a través de alianzas estratégicas con proveedores de nuevas tecnologías. Garantizar sostenidamente la calidad de los productos y velar por el crecimiento y desarrollo de los principales productores nacionales con quienes sostenemos vínculos comerciales estrechos. Velar por el progreso y beneficio de nuestros colaboradores, clientes, proveedores, socios comerciales y accionistas.</p>
                    </div>
                    <div className="product">
                        <h3>Visión</h3>
                        <p>Alinearnos como líderes en la distribución de granos a nivel nacional, manteniendo altos estándares de calidad, eficiencia y responsabilidad social. Expandir nuestra presencia en nuevos mercados, diversificar nuestra oferta de productos y fortalecer nuestra red de distribución para satisfacer las demandas cambiantes de nuestros clientes y socios comerciales.</p>
                    </div>
                    <div className="product">
                        <h3>Defensa de Marca</h3>
                        <p>Proteger y fortalecer la reputación de Multigranos Bonanza como una marca de confianza y calidad. Implementar estrategias de posicionamiento en el mercado que resalten nuestros valores, compromiso con la excelencia y responsabilidad en cada paso de la cadena de suministro. Garantizar la autenticidad y trazabilidad de nuestros productos.</p>
                    </div>
                    <div className="product">
                        <h3>Proyección</h3>
                        <p>Expandir nuestras operaciones a nivel internacional, estableciendo alianzas estratégicas con distribuidores y productores en otros países. Introducir nuevas líneas de productos innovadores y sostenibles, que se adapten a las tendencias y necesidades del mercado global. Consolidar nuestra posición como referente en la industria de granos y productos básicos.</p>
                    </div>
                </div>
            </section>

            <section id="contacto" className="container">
                <h2>Contacto</h2>
                <div className="contact-info">
                    <div className="info-item">
                        <p><strong>Dirección:</strong> Km. 20.7 Carretera a El Salvador Bodega 2 B, Fraijanes Guatemala</p>
                    </div>
                    <div className="info-item">
                        <p><strong>Teléfonos:</strong> +502 2267-9529, +502 2267-9532, +502 2267-9534</p>
                    </div>
                    <div className="info-item">
                        <p><strong>Email:</strong> ventas@dbonanza.com</p>
                    </div>
                    <div className="info-item">
                        <p><strong>Horarios:</strong> Lunes a Viernes, 08:00 AM a 05:00 PM</p>
                    </div>
                </div>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m181m121m31d3866.82736832856632d-90.420474385873943d14.5098351809110432m31f02f03f03m21i10242i7684f13.13m31m21s0x8589179f5b9c29b9%3A0x2d70772a05af8a712sMultigranos%20Bonanza5e03m21ses2sgt4v16280428657525m21ses2sgt" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
            </section>

            <i id="whatsapp" className="fa-brands fa-whatsapp" style={{ fontSize: 50, color: 'rgb(12, 123, 19)' }} />
        </main>

        <footer>
            <div className="container">
                <p>&copy; 2024 Multigranos Bonanza</p>
            </div>
        </footer>
    </div>
    
  );
}

export default PaginaWeb;
*/