const posts = [
	{
		title: "QUALITY",
		href: "#",
		description:
			"We maintain our standards for all our work regardless of the magnitude of the job with excellent service.",
		imageUrl: "src/assets/img/values/quality.jpg",
	},
	{
		title: "MODESTY",
		href: "#",
		description:
			"We will always strive to exceed the expectations of our authors and their readers.",
		imageUrl: "src/assets/img/values/modesty.avif",
	},
	{
		title: "INTEGRITY",
		href: "#",
		description:
			"Our conduct is what manifests our honesty and ethical ways with everyone we do business with.",
		imageUrl: "src/assets/img/values/integrity.jpg",
	},
	{
		title: "TEAM SPIRIT",
		href: "#",
		description:
			"Commitment and mutual respect and will bind us together in achieving our goals.",
		imageUrl: "src/assets/img/values/teamspirit.avif",
	},
	{
		title: "FREEDOM",
		href: "#",
		description:
			"Our team opens up the freedom for our clientele to express their ideas and expectations. Our products will always be a clear result of this freedom we offer",
		imageUrl: "src/assets/img/values/freedom.avif",
	},
	{
		title: "TRUST",
		href: "#",
		description:
			"This is something we build through our continuous responsible actions.",
		imageUrl: "src/assets/img/values/trust.avif",
	},
	{
		title: "DIVERSITY",
		href: "#",
		description:
			"We respect and consider diversity.  Our products cater for a wider range of customers based on their different backgrounds, languages, age or their special needs.",
		imageUrl: "src/assets/img/values/diversity.jpg",
	},
	{
		title: "SUSTAINABILITY",
		href: "#",
		description:
			"We manage our business to protect the environment, for today and for future generations.",
		imageUrl: "src/assets/img/values/sustainability.avif",
	},
];

export default function Values() {
	return (
		<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="absolute inset-0">
				<div className="bg-white h-1/3 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-semibold text-gray-900 sm:text-4xl font-poppins">
						Our Values
					</h2>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"></p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{posts.map((post) => (
						<div
							key={post.title}
							className="flex flex-col rounded-lg shadow-lg overflow-hidden"
						>
							<div className="flex-shrink-0">
								<img
									className="h-40 w-full object-cover"
									src={post.imageUrl}
									alt=""
								/>
							</div>
							<div className="flex-1 bg-white p-6 flex flex-col justify-between">
								<div className="flex-1">
									<a href={post.href} className="block mt-2">
										<p className="text-lg font-semibold text-gray-900">
											{post.title}
										</p>
										<p className="mt-3 text-sm text-gray-500">
											{post.description}
										</p>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
