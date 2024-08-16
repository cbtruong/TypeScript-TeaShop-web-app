import Button from "../../button/Button";

const Addresses = () => {
	return (
		<div>
			<h1 className="text-h1 font-extra italic mb-3">My Addresses</h1>
			<p className="text-small font-small mb-5">
				Add and manage addresses you use frequently.
			</p>
			<div className="border-t-[0.5px] border-lightGray pt-32 pb-4 displayCenter flex-col">
				<h3 className="mb-6 font-small">
					You have not placed any orders yet.
				</h3>
				<Button className="text-small" typeButton={1}>Start browsing</Button>
			</div>
		</div>
	);
};

export default Addresses;
