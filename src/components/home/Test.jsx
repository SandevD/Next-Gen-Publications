import React, { Component } from "react";
import bubble from "../../image/pngwing.com.png";

export default class Test extends Component {
	state = {
		scrollPostion: 0,
	};

	listenToScrollEvent = () => {
		document.addEventListener("scroll", () => {
			requestAnimationFrame(() => {
				this.calculateScrollDistance();
			});
		});
	};

	calculateScrollDistance = () => {
		const scrollTop = window.pageYOffset; // how much the user has scrolled by
		const winHeight = window.innerHeight;
		const docHeight = this.getDocHeight();

		const totalDocScrollLength = docHeight - winHeight;
		const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

		this.setState({
			scrollPostion,
		});
	};

	getDocHeight = () => {
		return Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		);
	};

	componentDidMount() {
		this.listenToScrollEvent();
	}

	render() {
		return (
			<div>
				<div className="px-20 lg:px-48">
				<div className="grid grid-cols-2 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto" style={{ paddingRight: this.state.scrollPostion * 2}}>
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto">
						<img src={bubble} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
			</div>
			</div>
		);
	}
}
