import React, { Component } from 'react';
import { Fragment } from 'react';
import {NavLink} from 'react-router-dom'

const BestSelling = props => (
	<Fragment>
		<section className="section">
			<div className="container">
				<h1 className="title has-text-centered my-title">{props.section}</h1>
				<h2 className="subtitle has-text-centered my-subtitle">
				{/* {props.subsection} */}
					{/* A simple container to divide your page into like the one you're currently reading */}
				</h2>
				<div className="columns is-multiline is-mobile products is-centered up-down">
					{props.data.map((obj, key) => (
						<div
							key={key}
							className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available"
						>
							<NavLink to={obj.link} className="zoom-anchor">
								{/* <a href={obj.href} onMouseOver={(e)=>{imageZoom(e)}}> */}
								<figure className="image">
									<img
										src={obj.src}
										alt="Demo Mens 7 Running Shoes"
										title="Demo Mens 7 Running Shoes"
									/>
								</figure>
								<div className="content product-caption">
									<div className="product-name has-text-centered">
										{obj.name}
									</div>
									{/* <div className="product-price has-text-centered">{obj.price}</div> */}
									<h5 className="has-text-centered">
										<span className="money">Rs. 499.00</span>
										<strike>
											<span className="money compare-price">Rs. 799.00</span>
										</strike>
										<div className="save_amount_two">
											SAVE <span className="money">Rs. 300.00</span>
										</div>
									</h5>
								</div>
							</NavLink>
						</div>
					))}
				</div>
			</div>
		</section>
	</Fragment>
);
export default BestSelling;
