import React from 'react';
import Link from 'next/link';
import { routes } from '../../routes';


const websiteRoutes = [
  { name: 'Home', route: routes.entry.path },
  { name: 'AboutUs', route: routes.aboutUs.path },
];

export default function Header() {
  return (
    <header class="navbar navbar-inverse navbar-fixed-top wet-asphalt" role="banner">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            {/* <li class="active"><a href="index.html">Home</a></li> */}
            <Link href={routes.entry.path}>
             <li class="active"><a href="index.jsx">Home</a></li>
            </Link>
            {/* <li><a href="about-us.html">About Us</a></li> */}
            <Link href={routes.aboutUs.path}>
              <li><a href="about-us.jsx">About Us</a></li>
            </Link>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <i class="icon-angle-down"></i></a>
              <ul class="dropdown-menu">
                <li><a href="career.html">Career</a></li>
                <li><a href="blog-item.html">Blog Single</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="404.html">404</a></li>
                <li><a href="registration.html">Registration</a></li>
                <li class="divider"></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="terms.html">Terms of Use</a></li>
              </ul>
            </li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact-us.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
