import React from 'react'

function FormSection() {
  return (
    <div class="row">
      <div class="col-12">
        <div class="my-3">
          <div class="card join-card animate__animated animate__fadeInRight" id="join">
            <h2>Join</h2>
            <div class="card-body">
              <form class="px-5">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Phone Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="(555)-555-5555"/>
                  </div>
                  <label for="exampleFormControlSelect1">
                    Years Refereeing Experience
                  </label>
                  <select name="experience" class="form-control" id="exampleFormControlSelect1">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Why Refereeing</label>
                  <textarea name="whyRefereeing" class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FormSection
