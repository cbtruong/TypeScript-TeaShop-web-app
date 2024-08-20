import React from "react";

const order = () => {
	return (
		<div>
			<h1 className="text-h1 font-extra italic mb-3">My order</h1>
			<p className="text-small font-small mb-5">
				View order history or check the status of recent orders.
			</p>
			<div className="border-t-[0.5px] border-b-[0.5px] border-lightGray py-32 displayCenter flex-col">
				<h3 className="mb-5 font-small">
					You have not placed any orders yet.
				</h3>
				<button className="text-small underline">Start browsing</button>
			</div>
		</div>
	);
};

export default order;
