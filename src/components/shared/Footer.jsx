import React, { Fragment } from 'react';

export default function Footer() {
    return (
        <Fragment>
            <footer id="footer" class="midnight-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            &copy; 2013 <a target="_blank" href="http://shapebootstrap.net/" title="Free Twitter Bootstrap WordPress Themes and HTML templates">ShapeBootstrap</a>. All Rights Reserved.
                </div>
                        <div class="col-sm-6">
                            <ul class="pull-right">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Faq</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a id="gototop" class="gototop" href="#"><i class="icon-chevron-up"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>

    );
}


