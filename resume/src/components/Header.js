import React, { Component } from 'react';

export default class Header extends Component {
  animation = () => {
    let el = document.getElementById("#home");
    el.style.backgroundColor = "#fff"
  }

  mouseEnter = () => {
    let el = document.getElementById("image-div");
    console.log(el);
    const children = el.childNodes;
    // children[0].style.zoom = '0.00001';
    children[0].style.animation = "scale-animation 2s   alternate";
    children[0].setAttribute("src", "images/Sajad2.jpg");
    children[0].style.zoom = '0.3';
    children[0].style.filter = 'grayscale(0)';




    // children[1].style.zoom = '0.3';
   


    
  }

  mouseLeave = () => {
    let el = document.getElementById("image-div");
    const children = el.childNodes;
    // children[0].style.zoom = '0.00001';
    children[0].style.animation = "translate-animation 3s   alternate";
    children[0].setAttribute("src", "images/Sajad.jpg");
    children[0].style.zoom = '0.1';
    children[0].style.filter = 'grayscale(100%)'



   

  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      
      <React.Fragment>
    
      <header id="home">
    
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
         <div className="header-container"  >
            <div id="image-div" className="bg-img-div" onMouseEnter={()=>this.mouseEnter()}  onMouseLeave={()=>this.mouseLeave()}>
              <img src="images/Sajad.jpg" alt="" className="bg-img" />
              <img src="images/Sajad2.jpg" alt="" className="bg-img2"  />

            </div>
            <div className="banner-text">
              <h1 className="responsive-headline">I am {resumeData.name}.</h1>
              <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr/>
              <ul className="social">
                  {
                  <ul className="social-links">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                      return(
                        <li>
                          <a href={item.url}>
                          <i className={item.className} />
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
                  }
               </ul>
            </div>
            <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         </div>

         

      </header>
      </React.Fragment>
    );
  }
}