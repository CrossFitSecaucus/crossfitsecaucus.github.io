import React from 'react';
import { Helmet } from 'react-helmet';

const ApparelPage = () => (
  <div className="product-page">
    <div className="section section-gray" style={{paddingTop: 100, paddingBottom: 500}}>
      <main className="container" style={{maxWidth: 1000}}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CrossFit Secaucus Apparel</title>
          <meta name="description" content="Get your CrossFit Secaucus apparel today." />
          <meta property="og:title" content="CrossFit Secaucus Apparel" />
          <meta property="og:description" content="Get your CrossFit Secaucus apparel today." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://crossfit-secaucus.com/apparel" />
          <meta property="og:image" content="https://crossfit-secaucus.com/img/products/2020/tshirts.png" />
        </Helmet>



        <div className="main main-raised main-product">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-content">
                <div className="tab-pane show active" id="red">
                  <img src="/img/products/2020/T-red.jpg" />
                </div>
                <div className="tab-pane" id="blue">
                  <img src="/img/products/2020/T-blue.jpg" />
                </div>
                <div className="tab-pane" id="charcoal">
                  <img src="/img/products/2020/T-charcoal.jpg" />
                </div>
              </div>
              <div className="nbs-flexisel-container">
                <div className="nbs-flexisel-inner">
                  <ul className="nav flexi-nav nbs-flexisel-ul" data-tabs="tabs">
                    <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                      <a href="#blue" className="nav-link" data-toggle="tab">
                        <img src="/img/products/2020/T-blue.jpg" />
                      </a>
                    </li>
                    <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                      <a href="#charcoal" className="nav-link" data-toggle="tab">
                        <img src="/img/products/2020/T-charcoal.jpg" />
                      </a>
                    </li>
                    <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                      <a href="#red" className="nav-link" data-toggle="tab">
                        <img src="/img/products/2020/T-red.jpg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title"> Vintage T-shirt </h2>
              <h3 className="main-price">$25</h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10668" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
              </p>

              <div id="tshirtAccordion" role="tablist">
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#tshirtCollapseOne" aria-expanded="false" aria-controls="tshirtCollapseOne" className="collapsed">
                        Description
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="tshirtCollapseOne" className="collapse show" role="tabpanel" data-parent="#tshirtAccordion">
                    <div className="card-body">
                      <p>
                        Printed on the softest and most comfortable tri-blend material, this T-shirt wicks sweat and dries fast.
                        You might never want to take it off again.
                      </p>
                      <p>
                        <em>Sizing is the same <strong>unisex/men's sizing</strong> as the T-shirts we usually have.</em>
                      </p>
                      <p>
                        <strong>Available Colors:</strong> blue, charcoal and red
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a className="collapsed" data-toggle="collapse" href="#tshirtCollapseTwo" aria-expanded="false" aria-controls="tshirtCollapseTwo">
                        Vintage Print
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="tshirtCollapseTwo" className="collapse" role="tabpanel" data-parent="#tshirtAccordion">
                    <div className="card-body">
                      This T-shirt undoubtedly has a retro feel, which is accentuated by the vintage print which
                      is super soft and makes the T-shirt look like it has been worn for years.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised main-product" style={{top: 100}}>
          <div className="row">
            <div className="col-md-6">
              <div className="tab-content">
                <div className="tab-pane show active" id="pull-over">
                  <img src="/img/products/2020/pull-over.jpg" />
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <h2 className="title"> Pull-Over Hoodie </h2>
              <h3 className="main-price">$40</h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10660" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
              </p>
              <div id="pullOverAccordion" role="tablist">
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#pullOverCollapseOne" aria-expanded="false" aria-controls="pullOverCollapseOne" className="collapsed">
                        Description
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="pullOverCollapseOne" className="collapse show" role="tabpanel" data-parent="#pullOverAccordion">
                    <div className="card-body">
                      <ul>
                        <li>6.5 oz pre-laundered 80/20 cotton/polyester</li>
                        <li><strong>unisex, slim fit</strong></li>
                        <li>pouch pocket</li>
                        <li>1x1 ribbing at cuffs, waistband, and pocket openings</li>
                        <li>plastic tipped white round drawcord</li>
                        <li>double needle splitstitched throughout</li>
                      </ul>
                      <p>
                        This black camo pull-over hoodie rocks a vintage design on the front.
                      </p>
                      <p className="text-warning">
                        <strong>This hoodie is different from the black camo hoodie sold in 2019. It's more light weight,
                        and sizing is more similar to the red/blue/gray/green hoodies we had in 2018.</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a className="collapsed" data-toggle="collapse" href="#pullOverCollapseTwo" aria-expanded="false" aria-controls="pullOverCollapseTwo">
                        Vintage Print
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="pullOverCollapseTwo" className="collapse" role="tabpanel" data-parent="#pullOverAccordion">
                    <div className="card-body">
                      This hoodie undoubtedly has a retro feel, which is accentuated by the vintage print which
                      is super soft and makes the hoodie look like it has been worn for years.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="main main-raised main-product" style={{top: 200}}>
          <div className="row">
            <div className="col-md-6">
              <div className="tab-content">
                <div className="tab-pane show active" id="zip-up-front">
                  <img src="/img/products/2020/zip-up-front.jpg" />
                </div>
                <div className="tab-pane" id="zip-up-back">
                  <img src="/img/products/2020/zip-up-back.jpg" />
                </div>
              </div>
              <div className="nbs-flexisel-container">
                <div className="nbs-flexisel-inner">
                  <ul className="nav flexi-nav nbs-flexisel-ul" data-tabs="tabs">
                    <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                      <a href="#zip-up-front" className="nav-link" data-toggle="tab">
                        <img src="/img/products/2020/zip-up-front.jpg" />
                      </a>
                    </li>
                    <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                      <a href="#zip-up-back" className="nav-link" data-toggle="tab">
                        <img src="/img/products/2020/zip-up-back.jpg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title"> Zip-Up Hoodie </h2>
              <h3 className="main-price">$45</h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10664" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
              </p>
              <div id="zipUpAccordion" role="tablist">
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a data-toggle="collapse" href="#zipUpCollapseOne" aria-expanded="false" aria-controls="zipUpCollapseOne" className="collapsed">
                        Description
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="zipUpCollapseOne" className="collapse show" role="tabpanel" data-parent="#zipUpAccordion">
                    <div className="card-body">
                      <ul>
                        <li>6.5 oz pre-laundered 80/20 cotton/polyester</li>
                        <li><strong>unisex, slim fit</strong></li>
                        <li>white coil kissing zipper with nickel pull</li>
                        <li>split-pouch pocket</li>
                        <li>1x1 ribbing at cuffs, waistband, and pocket openings</li>
                        <li>plastic tipped white round drawcord</li>
                        <li>double needle splitstitched throughout</li>
                      </ul>
                      <p>
                        This black camo zip-up hoodie rocks a vintage design on the back.
                      </p>
                      <p className="text-warning">
                        <strong>This hoodie is different from the black camo hoodie sold in 2019. It's more light weight,
                        and sizing is more similar to the red/blue/gray/green hoodies we had in 2018.</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card-collapse">
                  <div className="card-header" role="tab">
                    <h5 className="mb-0">
                      <a className="collapsed" data-toggle="collapse" href="#zipUpCollapseTwo" aria-expanded="false" aria-controls="zipUpCollapseTwo">
                        Vintage Print
                        <i className="material-icons">keyboard_arrow_down</i>
                      </a>
                    </h5>
                  </div>
                  <div id="zipUpCollapseTwo" className="collapse" role="tabpanel" data-parent="#zipUpAccordion">
                    <div className="card-body">
                      This hoodie undoubtedly has a retro feel, which is accentuated by the vintage print which
                      is super soft and makes the hoodie look like it has been worn for years.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default ApparelPage;
