import React from "react";

const Empty = () => {
	return (
		<div>
			<h1 className="text-h1 font-extra italic mb-3">My Wallet</h1>
			<p className="text-small font-small mb-5">
				Save your credit and debit card details for faster checkout.
			</p>
			<div className="border-t-[0.5px] border-lightGray py-20  displayCenter flex-col">
				<h3 className="mb-6 font-small">
					You have not saved any tags yet.
				</h3>
				<p className="text-small">
					Securely store your payment details when you place your
					order at checkout.
				</p>
			</div>
		</div>
	);
};

export default Empty;
