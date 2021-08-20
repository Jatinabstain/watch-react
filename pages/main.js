import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import bennerWatch from '../public/assets/images/header.png'
import login from '../public/assets/images/digital-money.png'
import login_open from '../public/assets/images/login.png'
import cart from '../public/assets/images/shopping-cart.png'
import feature from '../public/assets/images/feature.png'
import about from '../public/assets/images/about-1.png'
import about2 from '../public/assets/images/about-2.png'
import product from '../public/assets/images/product-1.png'
import author from '../public/assets/images/author-1.jpg'
import logo from '../public/assets/images/logo.png'

export const Main = () => {

    return (
        <div className="layout">
            <Head>
                <title>Watch</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrap">
                <section className="banner" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="header-content">
                                    <h2>
                                        <span>Present your</span>
                                        <br />
                                        Awesome product
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum necessitatibus praesentium voluptatum deleniti atque corrupti, quos dolores eos.</p>
                                    <div className="buy-button">
                                    <Link href="#!">
                                        <a className="btn-buynow">Purchase Now</a>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="slider-image">
                                    <Image src={bennerWatch} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="step-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="step-container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="step-single">
                                                <div className="icon-box">
                                                    <Image src={login} className="img-fluid login_icon" width="60" height="60" /> 
                                                </div>
                                                <h3>Create a Account</h3>
                                                <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="step-single">
                                                <div className="icon-box">
                                                    <Image src={login_open} className="img-fluid" width="60" height="60" alt="login" />
                                                </div>
                                                <h3>Login in Website</h3>
                                                <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="step-single">
                                                <div className="icon-box">
                                                    <Image src={cart} className="img-fluid login_icon" width="60" height="60" />
                                                </div>
                                                <h3>Purchase Now</h3>
                                                <p>The alien mothership is in orbit here. If we can hit that bullseye.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features" id="feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>Explore the Awesome</p>
                                    <h2>Product Features</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-single feature-right">
                                    <div className="icon-box img_g">
                                        <img src="https://img.icons8.com/color/48/000000/processor.png"/>
                                    </div>
                                    <h3>Dual Processor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-right">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/emoji/48/4a90e2/watch-emoji.png"/>
                                    </div>
                                    <h3>Gold aluminum</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-right">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/emoji/48/4a90e2/magnifying-glass-tilted-right-emoji.png"/>
                                    </div>                              
                                    <h3>Ion-X glass</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-right">
                                    <div className="icon-box">
                                    <img src="https://img.icons8.com/office/80/4a90e2/infrared-beam-sending.png"/>
                                    </div>
                                    <h3>Heart rate sensor</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-image">
                                    <Image src={feature} className="img-fluid" alt="feature" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-single feature-left">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/office/80/4a90e2/flash-light.png"/>
                                    </div>
                                    <h3>Force Touch</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-left">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/ios-glyphs/60/4a90e2/visible--v1.png"/>
                                    </div>
                                    <h3>Retina display</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-left">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/ios/50/4a90e2/room-sound.png"/>
                                    </div>
                                    
                                    <h3>Fire Speaker</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                                <div className="feature-single feature-left">
                                    <div className="icon-box">
                                        <img src="https://img.icons8.com/color/48/000000/wifi-logo.png"/>
                                    </div>
                                    
                                    <h3>Bluetooth &amp; Wi-Fi</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-product" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title ">
                                    <p>Beauty meets functionality</p>
                                    <h2>About Product</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                                <div className="col-md-12">
                                    <div className="about-product-single">
                                        <div className="row">
                                            <div className="col-md-7 col-sm-7">
                                                <div className="about-entry">
                                                    <h4>Fresh News From The Labs</h4>
                                                    <h3>Different preset Signup &amp; Order forms ready to use.</h3>
                                                    <p>Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has.</p>
                                                    <a href="#" className="btn-buynow">Purchase Now</a>
                                                </div>
                                            </div>
                                            <div className="col-md-5 col-sm-5">
                                                <div className="about-image">
                                                    <Image src={about} className="img-fluid" alt="watch" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-product-single">
                                        <div className="row">
                                            <div className="col-md-5 col-sm-5">
                                                <div className="about-image">
                                                    <Image src={about2} className="img-fluid" alt="watch" />
                                                </div>
                                            </div>
                                            <div className="col-md-7 col-sm-7 float-right">
                                                <div className="about-entry">
                                                    <h4>Fresh News From The Labs</h4>
                                                    <h3>Different preset Signup &amp; Order forms ready to use.</h3>
                                                    <p>Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has.</p>
                                                    <a href="#" className="btn-buynow">Purchase Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className="about-facts parallaxie">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>User Experience</p>
                                    <h2>The Facts about</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">2485</h3>
                                    <p>People Buy</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">458</h3>
                                    <p>Users</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">885</h3>
                                    <p>Comments</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="facts-single">
                                    <h3 className="counter">561</h3>
                                    <p>Premium Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products" id="products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>Our Most Popular</p>
                                    <h2>Awesome Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="product-single">
                                    <div className="product-box">
                                        <div className="front">
                                            <Image src={product} className="img-fluid" alt="product" />
                                            <h3>$240 <del>$349</del></h3>
                                        </div>
                                        <div className="back">
                                            <div className="product-info">
                                                <h3>Blue Apple Watch</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                                                <a href="#" className="btn-ordernow">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-single">
                                    <div className="product-box">
                                        <div className="front">
                                            <Image src={product} className="img-fluid" alt="product" />
                                            <h3>$240 <del>$349</del></h3>
                                        </div>
                                        <div className="back">
                                            <div className="product-info">
                                                <h3>Blue Apple Watch</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                                                <a href="#" className="btn-ordernow">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-single">
                                    <div className="product-box">
                                        <div className="front">
                                            <Image src={product} className="img-fluid" alt="product" />
                                            <h3>$240 <del>$349</del></h3>
                                        </div>
                                        <div className="back">
                                            <div className="product-info">
                                                <h3>Blue Apple Watch</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                                                <a href="#" className="btn-ordernow">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-single">
                                    <div className="product-box">
                                        <div className="front">
                                            <Image src={product} className="img-fluid" alt="product" />
                                            <h3>$240 <del>$349</del></h3>
                                        </div>
                                        <div className="back">
                                            <div className="product-info">
                                                <h3>Blue Apple Watch</h3>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s</p>
                                                <a href="#" className="btn-ordernow">Order Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonials parallaxie" id="testimonial">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>Feedback</p>
                                    <h2>What our clients say</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="testimonial-slide">
                                            <div className="author-info">
                                                <Image src={author} className="img-fluid"  />
                                            </div>
                                            <div className="testimonial-entry">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <h4>Harshad Patel <span>/ Web Designer</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="testimonial-slide">
                                            <div className="author-info">
                                                <Image src={author} className="img-fluid"  />
                                            </div>
                                            <div className="testimonial-entry">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <h4>Harshad Patel <span>/ Web Designer</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="testimonial-slide">
                                            <div className="author-info">
                                                <Image src={author} className="img-fluid"  />
                                            </div>
                                            <div className="testimonial-entry">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                <h4>Harshad Patel <span>/ Web Designer</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing" id="pricing">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>Our Affordable Best</p>
                                    <h2>Pricing Plan</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="pricing-single">
                                    <div className="pricing-header">
                                        <div className="icon-box">
                                            <i className="flaticon-tea-time"></i>
                                        </div>
                                        <h3>Beginner Package</h3>
                                        <p>$9</p>
                                        <a href="#" className="btn-buynow">Order Now</a>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li><span>Maximum</span> converting layout</li>
                                            <li><span>Pre made</span> signup forms</li>
                                            <li><span>Best support</span> options</li>
                                            <li><span>No coding</span> experience needed</li>
                                            <li><span>More pre-made</span> elements</li>
                                            <li><span>Additional</span> demo layouts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing-single recommended">
                                    <div className="pricing-header">
                                            <div className="icon-box">
                                                <i className="flaticon-gold-medal"></i>
                                            </div>
                                            <h3>Premium Package</h3>
                                            <p>$19</p>
                                            <a href="#" className="btn-buynow">Order Now</a>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li><span>Maximum</span> converting layout</li>
                                            <li><span>Pre made</span> signup forms</li>
                                            <li><span>Best support</span> options</li>
                                            <li><span>No coding</span> experience needed</li>
                                            <li><span>More pre-made</span> elements</li>
                                            <li><span>Additional</span> demo layouts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="pricing-single">
                                    <div className="pricing-header">
                                        <div className="icon-box">
                                            <i className="flaticon-package"></i>
                                        </div>
                                        <h3>Unlimited Package</h3>
                                        <p>$49</p>
                                        <a href="#" className="btn-buynow">Order Now</a>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            <li><span>Maximum</span> converting layout</li>
                                            <li><span>Pre made</span> signup forms</li>
                                            <li><span>Best support</span> options</li>
                                            <li><span>No coding</span> experience needed</li>
                                            <li><span>More pre-made</span> elements</li>
                                            <li><span>Additional</span> demo layouts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="newsletter-feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <p>Newsletter</p>
                                    <h2>Join with Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="newsletter-form">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <input className="form-control shadow-none" name="your-email" id="your-email" type="email" placeholder="Enter Your Email address" required="" />
                                            <button className="btn-subscribe">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contactus" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section-title">
                                    <p>Contact Us</p>
                                    <h2>Keep in touch</h2>
                                </div>
                                <div className="contact-form">
                                    <form>
                                        <div className="row">
                                            <div className="form-group col-md-6 col-sm-6">
                                                <input type="text" className="form-control custom_footer shadow-none" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="form-group col-md-6 col-sm-6">
                                                <input type="email" className="form-control custom_footer shadow-none" placeholder="Your Email Address" />
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12">
                                                <input type="text" className="form-control custom_footer shadow-none" placeholder="Subject" />
                                            </div>
                                            <div className="form-group col-md-12 col-sm-12">
                                                <textarea rows="8" className="form-control custom_footer shadow-none" placeholder="How can i help you?"></textarea>
                                            </div>
                                            <div className="col-md-12 col-sm-12">
                                                <button type="submit" className="btn-contact disabled" title="Submit Your Message!">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-info">
                                    <Image src={logo} className="img-fluid" alt="logo" />
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                                    <div className="contactinfo-single">
                                        <h3>Phone Number</h3>
                                        <p>+9 022 345 67891</p>
                                    </div>
                                    <div className="contactinfo-single">
                                        <i className="fa fa-envelope "></i>
                                        <h3>Email Support</h3>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="contactinfo-single">
                                        <i className="fa fa-map-marker"></i>
                                        <h3>Location</h3>
                                        <p>Abu Dhabi, UAE</p>
                                    </div>
                                    <div className="footer-social">
                                        <a href="#"><img src="https://img.icons8.com/material-outlined/24/4a90e2/facebook-f.png"/></a>
                                        <a href="#"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>
                                        <a href="#"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="jumptotop btn-active" id="back-to-top">
                                    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/triangle-stroked.png"/></a>
                                </div>
                                <div className="footer-siteinfo">
                                    <p>Copyright © 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Main