/* eslint-disable */
import React, { Component } from 'react';
import logo from '../assets/img/LyleLogo.png';

class Navigation extends Component {
  render() {
    return (
      <header className="header-1 region-0 block-0">
        <div className="container">
          <div className="row">

            <div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
              <a href="/"><img src={logo} alt="Home" className="logo img img-responsive" /></a>
            </div> {/* /logo-region */}

            <div id="menu-region" className="col-xs-12 col-md-9">
              <div className="region region-header">

                <div className="block block-menu hidden-md hidden-lg">


                  <div className="content">

                    <nav className="navbar nestor-main-menu" role="navigation">
                      {/* Menu button for mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">MENU</button>
                      </div>


                    </nav>
                  </div>
                </div>

                <div className="block block-tb-megamenu">


                  <div className="content">
                    <div className="tb-megamenu tb-megamenu-main-menu">
                      <div className="nav-collapse  always-show">
                        <ul className="tb-megamenu-nav nav level-0 items-5">
                          {/* <li className="tb-megamenu-item level-1 mega dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">

                              Visit Us         <span className="caret"></span>
                            </a>
                            <div style={{ width: "750px" }} className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child">
                              <div className="mega-dropdown-inner">
                                <div className="tb-megamenu-row row-fluid">
                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <div className="tb-megamenu-block tb-block tb-megamenu-block">
                                        <div className="block-inner">

                                          <div className="block block-block">


                                            <div className="content">
                                              <h3 className="text-gray">Welcome to Redeemer Church Mandurah...</h3>  </div>
                                          </div>  </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="Sundays">Sundays</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" >Sunday Service</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" >Sermons</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" >Children</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>


                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="About">About</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" title="Welcome">Welcome</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" >Vision</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/" >What We Believe</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          */}


                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Sermons" >Sermons</a>
                          </li>


                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Contact" title="Contact Us">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div> {/* /menu-region */}

          </div> {/* /row */}
        </div> {/* /container */}
      </header>
    );
  }
}

export default Navigation;
