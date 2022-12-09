import React from 'react'

function ContactInfoSection() {
  return (
    <div class="row mb-5">
      <div class="col-12">
        <div class="my-3">
          <div class="card contact-card animate__animated animate__fadeIn" id="contact">
            <h2 class="my-3">Contact</h2>
            <div class="card-body">
              <ul id="menu-ul">
                <li id="menu-li">
                  <i class="fas fa-phone"></i>
                  <a href="tel:2535555555" id="menu-li-a">
                    (253)-355-2021
                  </a>
                </li>
                <li id="menu-li">
                  <i class="fas fa-map-marker-alt"></i>
                  <a id="menu-li-a">PO Box 55, Tacoma, WA 98401</a>
                </li>
                <li id="menu-li">
                  <i class="fas fa-envelope-open-text"></i>
                  <a href="mailto:hapbear@comcast.net" id="menu-li-a">
                    hapbear@comcast.net
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoSection
