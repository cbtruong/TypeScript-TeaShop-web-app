import { LuPencil } from "react-icons/lu";

import Button from "../button/Button";

const index = () => {
	return (
		<div>
			<div className="flex justify-between items-center flex-row mb-3">
				<h1 className="text-h1 font-extra italic">Profile</h1>
				<div className="displayCenter gap-2 font-smaller px-5 py-1 border-[1px] cursor-pointer ">
					<LuPencil />
					<p>Edit profile</p>
				</div>
			</div>
			<div className="border-b-[0.5px] mb-5 border-lightGray">
				<p className="font-small text-small pb-6">
					Join Date: 20 thg 7, 2024
				</p>
			</div>
			<h1 className="text-h2 font-extra italic mb-5">Introduce</h1>
			<div className="px-6 pt-3 pb-14 border-[0.5px] border-lightGray relative hover:bg-lightGray cursor-pointer mb-5">
				<p className="text-small font-smaller italic">
					Please share something about yourself...
				</p>
			</div>
			<div className="flex justify-between mb-2">
				<h1 className="text-h2 font-extra italic mb-5">Post</h1>
                <button className="text-small font-small hover:text-lightGray">Create post</button>
			</div>
            <div className="p-20 border-t-[0.5px] border-b-[0.5px] border-lightGray">
                <div className="displayCenter py-14 flex-col">
                    <h1 className="mb-5">You have not written anything yet.</h1>
                    <Button className="text-small" typeButton={1}>Write your first post</Button>
                </div>
            </div>
		</div>
	);
};

export default index;
