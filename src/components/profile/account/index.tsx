import Button from "../../button/Button";

const index = () => {
	return (
		<div>
			<div className="flex justify-between items-center flex-row mb-3">
				<h1 className="text-h1 font-extra italic">Account</h1>
				<div className="displayCenter gap-2 font-smaller px-5 py-1 cursor-pointer ">
					<Button typeButton={2} className="text-small">
						Remove
					</Button>
					<Button typeButton={1} className="text-small">
						Update information
					</Button>
				</div>
			</div>
			<div className="border-b-[0.5px] mb-5 border-lightGray">
				<p className="font-small text-small pb-6 text-lightGray">
					View and edit your personal information below.
				</p>
			</div>
			<div className="mb-5 border-b-[0.5px] border-lightGray pb-6">
				<h1 className="text-h2 font-extra italic mb-4">
					Show information
				</h1>
				<div className="flex justify-between mb-5">
					<div className="w-[45%]">
						<h1 className="font-small mb-3">Show Name*</h1>
						<input
							type="text"
							value={"Trường CB"}
							className="w-full h-10 border-lightGray text-small border-[0.5px] outline-none font-small px-3 py-2"
						/>
					</div>
					<div className="w-[45%]">
						<h1 className="font-small mb-3">Title</h1>
						<input
							type="text"
							className="w-full h-10 border-lightGray text-small border-[0.5px] outline-none font-small px-3 py-2"
						/>
					</div>
				</div>
			</div>
			<div className="mb-5 border-b-[0.5px] border-lightGray pb-6">
				<h1 className="text-h2 font-extra italic mb-2">
					Personal information
				</h1>
				<p className="text-small font-small mb-4 text-lightGray">
					Update your personal information.
				</p>
				<div className="flex justify-between mb-5">
					<div className="w-[45%]">
						<h1 className="font-small mb-3">Name</h1>
						<input
							type="text"
							value={"Trường CB"}
							className="w-full h-10 border-lightGray border-[0.5px] text-small outline-none font-small px-3 py-2"
						/>
					</div>
					<div className="w-[45%]">
						<h1 className="font-small mb-3">Surname</h1>
						<input
							type="text"
							className="w-full h-10 border-lightGray text-small border-[0.5px] outline-none font-small px-3 py-2"
						/>
					</div>
				</div>
				<div className="w-full flex justify-between mb-8">
					<div className="w-[45%]">
						<h1 className="font-small mb-3">Phone</h1>
						<input
							type="text"
							className="w-full h-10 border-lightGray border-[0.5px] text-small outline-none font-small px-3 py-2"
						/>
					</div>
                    <div className="w-[45%]">
						<h1 className="font-small mb-3">Email</h1>
						<input
                            disabled
							type="text"
							value={"batruong12122002@gmail.com"}
							className="w-full h-10 border-lightGray border-[0.5px] text-small outline-none font-small px-3 py-2"
						/>
					</div>
				</div>
				<div className="flex justify-end gap-4">
					<Button typeButton={2} className="text-small">
						Remove
					</Button>
					<Button typeButton={1} className="text-small">
						Update information
					</Button>
				</div>
			</div>
		</div>
	);
};

export default index;
