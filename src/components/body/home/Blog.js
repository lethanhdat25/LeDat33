import React from 'react'

const Blog = () => {
  return (
    <section className="blog-area pt-100 pb-70">
  <div className="container">
    <div className="section-title text-center">
      <h2>Our Latest Blogs</h2>
    </div>
    <div className="row pt-45">
      <div className="col-lg-4 col-md-6">
        <div className="blog-card blog-color-2">
          <a href="blog-details.html">
            <img src="assets/images/blog/blog-img1.jpg" alt="Images" />
          </a>
          <div className="content">
            <span><i className="bx bx-time-five" /> Nov 01, 2020</span>
            <h3><a href="blog-details.html">We Always Ready to Give You Best Delivery Support </a></h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
            </p>
            <a href="#" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card blog-color-2">
          <a href="blog-details.html">
            <img src="assets/images/blog/blog-img2.jpg" alt="Images" />
          </a>
          <div className="content">
            <span><i className="bx bx-time-five" /> Nov 05, 2020</span>
            <h3><a href="blog-details.html">Click and Make the Payment in the Most Easiest Way</a></h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
            </p>
            <a href="#" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="blog-card blog-color-2">
          <a href="blog-details.html">
            <img src="assets/images/blog/blog-img3.jpg" alt="Images" />
          </a>
          <div className="content">
            <span><i className="bx bx-time-five" /> Nov 07, 2020</span>
            <h3><a href="blog-details.html">Global Ecommerce System Marked as a History </a></h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur exit sadipscing elitr, sed diam.
            </p>
            <a href="#" className="read-btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Blog