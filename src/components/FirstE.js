import React, { Component } from 'react';

export default class FirstE extends Component {
  render() {
    let {title,description ,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="row aos-init aos-animate" data-aos="fade-up">
          <div className="col-xl-8 stretch-card grid-margin">
            <div className="position-relative">
              <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":"https://media.wired.com/photos/65668f0cb38d7a2373721a48/191:100/w_1280,c_limit/Crpyto-Can't-Help-Itself-Business-1400047284.jpg"}alt="banner" className="img-fluid" />
              <div className="banner-content">
                <div className="badge badge-danger fs-12 font-weight-bold mb-3">
                  Headlines
                </div>
                <h1 className="mb-0">News Today</h1>
                <h1 className="mb-2">
                {title}
                </h1>
                <div className="fs-12">
                  <span className="mr-2">Photo </span>10 Minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 stretch-card grid-margin">
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h2>Latest news</h2>

                <div className="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                  <div className="pr-3">
                    <h5>{title}</h5>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                  <div className="rotate-img">
                    <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} alt="thumb" className="img-fluid img-lg" />
                  </div>
                </div>

                <div className="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between">
                  <div className="pr-3">
                    <h5>{title}</h5>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                  <div className="rotate-img">
                    <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} alt="thumb" className="img-fluid img-lg" />
                  </div>
                </div>

                <div className="d-flex pt-4 align-items-center justify-content-between">
                  <div className="pr-3">
                    <h5>{title}</h5>
                    <div className="fs-12">
                      <span className="mr-2">Photo </span>10 Minutes ago
                    </div>
                  </div>
                  <div className="rotate-img">
                    <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl}  alt="thumb" className="img-fluid img-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
