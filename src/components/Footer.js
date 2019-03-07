/* eslint-disable */
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section>
                {/* Footer region */}

                <footer className="region-10 block-10 bg-color-grayDark1 text-color-light">
                    <div className="container">
                        <div className="row">

                            <div id="footer-left-region" className="footer-left region-bottom-sm-0 text-center-sm footer_left col-xs-12 col-md-6">
                                <div className="region region-footer-left">

                                    <div id="block-block-10" className="block block-block">


                                        <div className="content">
                                            <div className="copyright">
                                                <p>Website built and maintained by <a href="http://newfrontdoor.org" target="_blank" rel="noreferrer noopener">New Front Door</a></p>
                                            </div> {/* /copyright */}  </div>
                                    </div>  </div>
                            </div> {/* /footer-left-region */}

                            <div id="footer-right-region" className="footer-right region-top-sm-0 text-right text-center-sm footer_right col-xs-12 col-md-6">
                                <div className="region region-footer-right">

                                    <div className="block block-block">


                                        <div className="content">
                                            <div className="social-networks-footer">
                                                <a href="https://www.facebook.com/NewFrontDoorIT/" target="_blank" rel="noreferrer noopener"><i className="icon ion-social-facebook"></i></a>
                                                <a href="https://twitter.com/NewFrontDoorIT" target="_blank" rel="noreferrer noopener"><i className="icon ion-social-twitter"></i></a>
                                                <a href="mailto:contactus@newfrontdoor.org" target="_blank" rel="noreferrer noopener"><i className="icon ion-email"></i></a>
                                            </div> {/* /social-networks-footer */}  </div>
                                    </div>  </div>
                            </div> {/* /footer-right-region */}

                        </div> {/* /row */}
                    </div> {/* /container */}
                </footer>

                {/* /Footer region */}

                {/* Back to top button  */}
                <div id="back-to-top">
                    <i className="ion-ios7-arrow-up"></i>
                </div>
                {/* End of Back to top button */}
            </section>
        );
    }
}

export default Footer;
