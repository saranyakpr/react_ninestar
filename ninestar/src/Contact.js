import React from 'react'

const Contact = () => {
  return (
    <div>
         <section class="con">
	    <div class="container" id="cont">
		    <div class="contact">
				<h3>Contact Us</h3>
				<h2>Contact us the get started</h2>
		    </div>
		    <div class="row pt-5">
			    <div class="col-sm-12 col-md-12  col-lg-5">
				    <div class="info">
					    <div class="address"> 
						    <iconify-icon icon="akar-icons:location"></iconify-icon>
							
								<h4>Location</h4>
								<p>A108 Adam Street, New York, NY 535022</p>
							
						</div>
						<div class="address">
						    <iconify-icon icon="fontisto:email"></iconify-icon>
							
								<h4>Email:</h4>
								<p>info@example.com</p>
							
						</div>
						<div class="address">
						    <iconify-icon icon="bi:phone"></iconify-icon>
								<h4>Call:</h4>
								<p>+1 5589 55488 55s</p>
							
						</div>
						<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.30665760396!2d77.3734022636605!3d8.918888645914969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042627cf85f8b3%3A0xf54111296f455f1b!2sPavoorchatram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1666702285829!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
				<div class="col-sm-12 col-md-12  col-lg-7 d-flex align-items-strach">
				    <form class="contact info">
					    <div class="row">
						    <div class="form-group col-md-6 mt-3">
							    <label for="name">Your Name</label>
								<input type="text" id="name" class="form-control mt-2"  placeholder="Your Name" name="name"/>
							</div>
							<div class="form-group col-md-6 mt-3">
								<label for="email">Your Email</label>
								<input type="text" id="email" class="form-control mt-2" placeholder="Your Email" name="email"/>
							</div>
							<div class="form-group col-md-12 mt-3">
								<label for="subject">Subject</label>
								<input type="text" id="subject" class="form-control mt-2" placeholder="subject" name="subject"/>
							</div>
							<div class="form-group col-md-12 mt-3">
								<label for="message">Message</label>
								<textarea name="message" id="message" class="form-control mt-2" rows="10"></textarea>
								
							</div>
							<div class="text-center">
							    <button type="button">Send Message</button>
							</div>
							
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Contact