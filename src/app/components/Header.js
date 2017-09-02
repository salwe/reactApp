import React from "react";

export const Header = (props) => {
	return(
		<header className="bg-primary text-white header-pd">
			<div className="container text-center">
				<div className="row">
					<div className="col-lg-12 mx-auto">
						<h1>Welcome to React App</h1>
						<p className="lead">I have no idea what it will be, but I hope it will not die young</p>
						{props.children}
					</div>
				</div>
			</div>
		</header>
	);
};