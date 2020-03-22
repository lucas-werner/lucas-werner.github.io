import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Sobre mim</span>
                    <h2 className="colorlib-heading">Quem sou eu?</h2>
                    <p>Atualmente, sou estudante de desenvolvimento de software na Trybe.
                      </p>
                    <p>
                    Advogado de formação, mudar de carreira foi a melhor decisão que eu já tomei. Gosto de explorar novas tecnologias e aprender novas ferramentas para desenvolver melhor.  Eu conto mais um pouco <a href="https://medium.com/@dev.werner">aqui</a>.</p>
                    <p>
                    Autor de dois livros, recentemente comecei a transcrever minhas reflexõs para artigos do medium. Você pode me escrever de volta, terei prazer em responder :)</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">O que eu faço?</span>
                <h2 className="colorlib-heading">Um pouco do meu stack</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>FRONT-END</h3>
                    <p>Tenho experiência utilizando JavaScript(ES6, ESNext), React, HTML e CSS. </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>BACK-END</h3>
                    <p>Tenho experiência utilizando Nodejs, Express.js e SQL.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>METOLOGIAS ÁGEIS</h3>
                    <p>Experiência com as metologias ágeis Kanban e Scrum, bem como as ferramentas de trabalho Trello, Zoom e Slack</p>
                </div>
                </div>
            </div>            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>METODOLOGIA DO ENSINO</h3>
                    <p>Professor de inglês, monitor na UFMG e bolsista de pesquisa. Tenho formação em metodologia do ensino.</p>
                </div>          
                </div>                
            </div> 
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-world" />
                </span>
                <div className="desc">
                    <h3>IDIOMAS</h3>
                    <p>Inglês (C1), francês (B1). Experiência como voluntário na França. </p>
                </div>
                </div>
            </div>                       
            </div>
        </div>
        </section>
      </div>
    )
  }
}
