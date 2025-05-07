
function AboutPage() {
	return (
		<>
			<h1 className="name">About</h1>
			<p>Hello there.<br />How do you do?</p>
		</>
	);
}


const user = {
	name: "Hedy Lamarr",
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
	imageSize: 90,
};

export default function Profile() {
	return (
		<>
			<div>
				<h1>Wellcome to profile page</h1>
				<AboutPage />

			</div>
			<h1>{user.name}</h1>
			<img
				src={user.imageUrl}
				alt={'Photo of ' + user.name}
				style={{
					width: user.imageSize,
					height: user.imageSize
				}}
			/>
		</>
	);
}