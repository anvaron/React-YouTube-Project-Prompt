import React from "react";
import "../styles/About.css";

function About() {

	return (
		<section className="about-main">
			<h1>About</h1>
			<p>Teamwork details section</p>
			<div className="about-contains">
				<h2>Members</h2>
				<div className="member-data">
					<h4>Oscar A Varon</h4>
					<div>My name is Oscar. I’m a Software Engineer with a passion for building software.</div>
				</div>
				<div className="member-data">
					<h4>Charlie Moran</h4>
					<div>My name is Charlie Moran. I’m a Software Engineer with a passion for building software.</div>
				</div>
				<div className="member-data">
					<h4>Juan Bowers</h4>
					<div>My name is Oscar. I’m a Software Engineer with a passion for building software.</div>
				</div>
				<div className="github-links">
					<h2>GitHub Links</h2>
					<ul>
						<li>
							<p>Project Manager:</p>
							<a target="blank" href="https://github.com/anvaron">Oscar A Varon</a>
						</li>
						<li>
							<p>Software Engineer:</p>
							<a target="blank" href="https://github.com/CharlieMoran">CharlieMoran</a>
						</li>
						<li>
							<p>Software Engineer:</p>
							<a target="blank" href="https://github.com/bowersjuan">Juan Bowers</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
export default About;