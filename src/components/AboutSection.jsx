import React from 'react'

function AboutSection() {
  return (
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="my-3">
          <div class="card about-card animate__animated animate__fadeInTopLeft" id="about">
            <h2 class="my-3">About</h2>
            <div class="card-body">
              <p>
              Western Washington Wrestling Officials Association (WWWOA) is the premier destination for all wrestling officials in Western Washington. The organization covers King, Pierce, and Thurston counties, among others during special circumstance. Though the organization focuses on covering and officiating from youth organizations to high school varsity level, the organization is full of highly talented officials with vast experiences from all levels. For more information, please do not hesitate to reach out via <a href="#join" style={{color: "white", textDecoration: "none", fontSize: "bold"}}>submission form</a> or <a href="#contact" style={{color: "white", textDecoration: "none", fontSize: "bold"}}>contact links</a> below.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="my-3">
          <div>
            <div class="card testimonial-card animate__animated animate__fadeInTopRight">
              <h2 class="card-header">Quote</h2>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>
                    This is the best organization I have taken part of in my life. From having experience officiating other spots, such as baseball and softball, the group of wrestling officials is very well organized and filled with an abundance of knowledge and experience. Would recommend to all with interest to join today!
                  </p>
                  <footer class="blockquote-footer">
                    Member: <cite title="Source Title">Hugh Birgenheier</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}

export default AboutSection