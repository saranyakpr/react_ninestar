import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Portfolio from './Portfolio'
import Frequently from './Frequently'
import Team from './Team'
import Client from './Client'
import Contact from './Contact'
import Join from './Join'

const Header = () => {
  return (
    <div>
        
	<section id="header">
		<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
			<div class="container">
				<a class="navbar-brand fs-2 secondary-color" href="#">Ninestars</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item ">
							<a class="nav-link active pri-color" aria-current="home" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#abt">About Us</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#ser">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#port">Portfolio</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#teams">Team</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a class="dropdown-item" href="#">Dropdown1</a></li>
									<li><a class="dropdown-item" href="#">Dropdown2</a></li>
									<li><a class="dropdown-item" href="#">Dropdown3</a></li>
									<li><a class="dropdown-item" href="#">Dropdown4</a></li>
									<li><a class="dropdown-item" href="#">Dropdown5</a></li>
								</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#cont">Contact</a>
						</li>
						<button type="button" class="btn btn-danger rounded-pill pri-bg">Get Started</button>
					</ul>
				</div>
			</div>
		</nav>
	</section>
    <Home/>
    <About/>
	<Service/>
	<Portfolio/>
	<Frequently/>
	<Team/>
	<Client/>
	<Contact/>
	<Join/>
	
    </div>
  )
}

export default Header