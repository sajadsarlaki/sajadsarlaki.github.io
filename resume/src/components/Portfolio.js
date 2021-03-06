import React, { Component } from 'react';
export default class Porfolio extends Component {
   
   
  render() {
  
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>  
          <div className="" id="modal-01"></div>  
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {

            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                    <div  className='card' onClick={()=> window.open(`${item.github}`, `${item.title}`)}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                        <div className="portfolio-description">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                      </div>
                    </div>
                 
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}