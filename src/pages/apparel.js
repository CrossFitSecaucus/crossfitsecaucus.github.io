import React from 'react';
import { Helmet } from 'react-helmet';

const PULL_OVERS = [
  {
    id: 'orange-pull-over',
    color: 'orange',
    img_src: '/img/products/2022/PRM90HT-orange.jpg'
  },
  {
    id: 'charcoal-pull-over',
    color: 'charcoal',
    img_src: '/img/products/2022/PRM90HT-charcoal.jpg'
  },
  {
    id: 'light-grey-pull-over',
    color: 'light-grey',
    img_src: '/img/products/2022/PRM90HT-light-grey.jpg'
  },
  {
    id: 'navy-pull-over',
    color: 'navy',
    img_src: '/img/products/2022/PRM90HT-navy.jpg'
  },
  {
    id: 'sky-pull-over',
    color: 'sky',
    img_src: '/img/products/2022/PRM90HT-sky.jpg'
  },
  {
    id: 'burgundy-pull-over',
    color: 'burgundy',
    img_src: '/img/products/2022/PRM90HT-burgundy.jpg'
  },
]

const ZIP_UPS = [
  {
    id: 'orange-zip-up',
    color: 'orange',
    img_src: '/img/products/2022/PRM90HTZ-orange.jpg'
  },
  {
    id: 'charcoal-zip-up',
    color: 'charcoal',
    img_src: '/img/products/2022/PRM90HTZ-charcoal.jpg'
  },
  {
    id: 'light-grey-zip-up',
    color: 'light-grey',
    img_src: '/img/products/2022/PRM90HTZ-light-grey.jpg'
  },
  {
    id: 'navy-zip-up',
    color: 'navy',
    img_src: '/img/products/2022/PRM90HTZ-navy.jpg'
  },
  {
    id: 'sky-zip-up',
    color: 'sky',
    img_src: '/img/products/2022/PRM90HTZ-sky.jpg'
  },
  {
    id: 'burgundy-zip-up',
    color: 'burgundy',
    img_src: '/img/products/2022/PRM90HTZ-burgundy.jpg'
  },
]

const T_SHIRTS = [
  {
    id: 'teal-t-shirt',
    color: 'teal',
    img_src: '/img/products/2022/6210-teal.jpg'
  },
  {
    id: 'purple-rush-t-shirt',
    color: 'purple rush',
    img_src: '/img/products/2022/6210-purple-rush.jpg'
  },
]

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
          <meta property="og:image" content="https://crossfit-secaucus.com/img/products/2020/tshirts.jpg" />
        </Helmet>

        <div className="main main-raised main-product">
          <div className="row">
            <div className="col-md-6">
              <div className="tab-content">
                { PULL_OVERS.map((hoodie, index) => (
                  <div className={`tab-pane show ${index === 0 ? 'active' : ''}`} id={hoodie.id}>
                    <img src={hoodie.img_src} />
                  </div>
                ))}
              </div>
              <div className="nbs-flexisel-container">
                <div className="nbs-flexisel-inner">
                  <ul className="nav flexi-nav nbs-flexisel-ul" style={{ width: '100%' }} data-tabs="tabs">
                    { PULL_OVERS.map((hoodie) => (
                      <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                        <a href={`#${hoodie.id}`} className="nav-link" data-toggle="tab">
                          <img src={hoodie.img_src} />
                        </a>
                        <div style={{ fontSize: 12, marginTop: -10, paddingBottom: 10 }}>
                          {hoodie.color}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title">2022 Pull-over Hoodie</h2>
              <h3 className="main-price">$49.99 – <em>Pre-sale Only</em></h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10707" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
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
                      <ul>
                        <li>
                          7.5 oz (250 gm) pre-laundered 70% cotton/30% polyester blend french terry
                        </li>
                        <li>
                          ring spun cotton
                        </li>
                        <li>
                          split stitch double needle sewing
                        </li>
                        <li>
                          1x1 ribbing at cuffs, waistband, and side panels
                        </li>
                        <li>
                          antique nickel eyelets
                        </li>
                        <li>
                          two antique nickel tipped flat drawcords
                        </li>
                        <li>
                          media pocket and eyelet in front pocket
                        </li>
                        <li>
                          thumbholes at cuffs
                        </li>
                        <li>
                          twill neck tape
                        </li>
                        <li>
                          V notch
                        </li>
                        <li>
                          <strong>slim unisex fit</strong>
                        </li>
                      </ul>
                      <p>
                        <img src="https://cdn.shopify.com/s/files/1/0055/1242/files/prm90htc.jpg" width="100%" />
                      </p>
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
                { ZIP_UPS.map((hoodie, index) => (
                  <div className={`tab-pane show ${index === 0 ? 'active' : ''}`} id={hoodie.id}>
                    <img src={hoodie.img_src} />
                  </div>
                ))}
              </div>
              <div className="nbs-flexisel-container">
                <div className="nbs-flexisel-inner">
                  <ul className="nav flexi-nav nbs-flexisel-ul" style={{ width: '100%' }} data-tabs="tabs">
                    { ZIP_UPS.map((hoodie) => (
                      <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                        <a href={`#${hoodie.id}`} className="nav-link" data-toggle="tab">
                          <img src={hoodie.img_src} />
                        </a>
                        <div style={{ fontSize: 12, marginTop: -10, paddingBottom: 10 }}>
                          {hoodie.color}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title">2022 Zip-up Hoodie</h2>
              <h3 className="main-price">$49.99 – <em>Pre-sale Only</em></h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10743" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
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

                        <li>
                          7.5 oz (250 gm) pre-laundered 70% cotton/30% polyester blend french terry
                        </li>
                        <li>
                          ring spun cotton
                        </li>
                        <li>
                          split stitch double needle sewing
                        </li>
                        <li>
                          1x1 ribbing at cuffs and waistband
                        </li>
                        <li>
                          antique nickel tipped flat drawcord
                        </li>
                        <li>
                          media pocket and eyelet in front pocket
                        </li>
                        <li>
                          thumbholes at cuffs
                        </li>
                        <li>
                          twill neck tape
                        </li>
                        <li>
                          <strong>slim unisex fit</strong>
                        </li>
                      </ul>
                      <p>
                        <img src="https://cdn.shopify.com/s/files/1/0055/1242/files/prm90htc.jpg" width="100%" />
                      </p>
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
                { T_SHIRTS.map((tshirt, index) => (
                  <div className={`tab-pane show ${index === 0 ? 'active' : ''}`} id={tshirt.id}>
                    <img src={tshirt.img_src} />
                  </div>
                ))}
              </div>
              <div className="nbs-flexisel-container">
                <div className="nbs-flexisel-inner">
                  <ul className="nav flexi-nav nbs-flexisel-ul" style={{ width: '100%' }} data-tabs="tabs">
                    { T_SHIRTS.map((tshirt) => (
                      <li className="nav-item nbs-flexisel-item" style={{width: 100}}>
                        <a href={`#${tshirt.id}`} className="nav-link" data-toggle="tab">
                          <img src={tshirt.img_src} />
                        </a>
                        <div style={{ fontSize: 12, marginTop: -10, paddingBottom: 10 }}>
                          {tshirt.color}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title">2022 T-shirt</h2>
              <h3 className="main-price">$19.99 – <em>Pre-sale Only</em></h3>
              <p>
                <a href="https://clients.mindbodyonline.com/classic/ws?studioid=40911&stype=43&catid=26&prodGroupId=10779" className="btn btn-success">Pre-Order<div class="ripple-container"></div></a>
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
                      <ul>
                        <li>
                          <strong>Fabric: </strong>
                          60% combed ring-spun cotton, 40% polyester
                        </li>
                        <li>
                          <strong>Fabric weight: </strong>
                          145g, 4.3oz
                        </li>
                        <li>
                          <strong>Collar: </strong>
                          crew neck
                        </li>
                        <li>
                          <strong>Fit: </strong>
                          type classic
                        </li>
                      </ul>
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
