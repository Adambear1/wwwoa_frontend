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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
              Cicero are also reproduced in their exact original form, accompanied
              by English versions from the 1914 translation by H. Rackham.
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                  <footer class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
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