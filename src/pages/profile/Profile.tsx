import { useState } from "react";
import LogoProfile from "../../assets/Product1.jpg";

//icon
import { PiCrownSimpleFill } from "react-icons/pi";

// Css
import "./Profile.css";

//component
import Main from "../../components/profile/index";
import Order from '../../components/profile/order/Empty';
import EmptyAddress from '../../components/profile/addresses/Empty';
import EmptyWallet from '../../components/profile/wallet/Empty';
import EmptyBlogComment from '../../components/profile/blogComment/Empty';
import EmptyBlogLike from '../../components/profile/blogLike/Empty';
import Account from '../../components/profile/account/index';

interface menuProfileItem {
	name: string;
	component: React.ReactNode;
}

const Profile = () => {
	const menuProfile: menuProfileItem[] = [
		{
			name: "Profile",
			component: <Main />,
		},
		{
			name: "My Orders",
			component: <Order/>,
		},
		{
			name: "My Addresses",
			component: <EmptyAddress />,
		},
		{
			name: "My Wallet",
			component: <EmptyWallet />,
		},
		{
			name: "Blog Posts",
			component: <Main />,
		},
		{
			name: "Blog Comments",
			component: <EmptyBlogComment />,
		},
		{
			name: "Blog Likes",
			component: <EmptyBlogLike />,
		},
		{
			name: "My Drafts",
			component: <Main />,
		},
		{
			name: "My Subscriptions",
			component: <Main />,
		},
		{
			name: "My Account",
			component: <Account />,
		},
		{
			name: "Notifications",
			component: <Main />,
		},
		{
			name: "Settings",
			component: <Main />,
		},
	];
	const [selectProfile, setSelectProfile] = useState<string>("Profile");

	const handleSelectProfile = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
		item: string
	) => {
		e.preventDefault();
		setSelectProfile(item);
	};
	return (
		<div className="relative">
			<div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter">
				<div className="py-2 w-[975px] flex justify-center gap-6">
					{/* -----------------Start Menu Profile ----------------------------- */}
					<div className="w-[300px] py-3 px-5 bg-white box-border">
						<div className="w-full py-5 displayCenter flex-col ">
							<img
								src={LogoProfile}
								className="w-[40%] rounded-full mb-4"
								alt=""
							/>
							<h1 className="">CB.Trường</h1>
							<div className="displayCenter gap-1 mb-3">
								<PiCrownSimpleFill />
								<p>Admin</p>
							</div>
							<div className="displayCenter gap-5 text-lightGray font-small">
								<div className="displayCenter flex-col ">
									<p>0</p>
									<p>Followers</p>
								</div>
								<div className="w-[0.5px] bg-lightGray h-8"></div>
								<div className="displayCenter flex-col">
									<p>0</p>
									<p>Following</p>
								</div>
							</div>
						</div>
						{/* --------------- start nav bar profile ----------------- */}
						<ul className="w-full border-[0.5px] border-blue">
							{menuProfile.map((item, index) => (
								<li key={index} className="w-full">
									<button
										onClick={(e) =>
											handleSelectProfile(e, item.name)
										}
										className={`navBarProfile ${
											item.name === selectProfile
												? "bg-black"
												: "bg-white"
										} w-full py-3 px-7 text-left transitionMain hover:bg-black cursor-pointer`}
									>
										<span
											className={`${
												item.name === selectProfile
													? "text-white"
													: "text-black"
											} text-small font-small transitionMain `}
										>
											{item.name}
										</span>
									</button>
								</li>
							))}
						</ul>
						{/* --------------- end nav bar profile ----------------- */}
					</div>
					{/* --------------------End Menu Profile ------------------------ */}

					{/* Start Content Profile */}
					<div className="w-[660px] bg-white mt-14 p-7 h-fit">
						{menuProfile.find((item) => item.name === selectProfile)
							?.component}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
