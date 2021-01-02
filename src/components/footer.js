import React from 'react';

function Footer(){
    return(
 <footer id="colophon" className="site-footer">
	<div className="footer-connect">
		<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2 col-sm-12 offset-md-0">
					<div className="footer-social">
						<h5 className="follow-heading">Follow Us On Social Media</h5>
						<div className="footer-social-icons">
							<a href="https://facebook.com/thesbscgroup" title="Facebook">
								<i className="fa fa fa-facebook"></i>
							</a>
							<a  href="https://twitter.com/thesbscgroup" title="twitter">
								<i className="fa  fa-twitter"></i>
							</a>
							<a href="https://instagram.com/thesbscgroup" title="instagram">
								<i className="fa  fa-instagram"></i>
							</a>
							<a href="https://www.youtube.com/channel/UC7iM0mVGklIZtq79hbET-aA" title="youtube">
								<i className="fa  fa-youtube"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="site-info">
		<div className="container">
                                		Copyright © 2020 The SBSC Group.<span>Made with <i className="fa fa-heart"></i>	By <a href="tel:+918802826913">Santosh Gupta</a></span>
				            
		</div>
	</div>
</footer>
    )
}
export default Footer