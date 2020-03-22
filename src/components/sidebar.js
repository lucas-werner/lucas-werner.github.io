import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Lucas Werner</a></h1>
              <span className="email"><i className="icon-mail"></i> lucas.1werner@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introdução</a></li>
                  <li><a href="#about" data-nav-section="about">Sobre mim</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Linha do tempo</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://github.com/lucas-werner" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://medium.com/@dev.werner" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
                <li><a href="https://www.linkedin.com/in/wernerlucas/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>                
                <li><a href="https://twitter.com/devwerner1" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/oficial.werner/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>                 
                  Obrigado <a href="https://www.betrybe.com/" target="_blank" rel="noopener noreferrer">Trybe</a><i className="icon-heart" aria-hidden="true" /> pela formação
              </small> 
              <br></br>             
             </p>
              {/* <p><small>
                Something coming soon !!
              </small></p> */}
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
