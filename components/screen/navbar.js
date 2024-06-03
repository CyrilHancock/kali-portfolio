import React, { Component } from 'react';
import Clock from '../util components/clock';
import Status from '../util components/status';
import StatusCard from '../util components/status_card';

export default class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			status_card: false
		};
	}

	render() {
		return (
			<div className="absolute top-0 right-0 z-50 flex items-center justify-between w-screen text-sm bg-black shadow-md select-none bg-opacity-30 main-navbar-vp flex-nowrap text-ubt-grey">
				<div className='flex'>

				<div
					tabIndex="0"
					className={
						'pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 '
					}
				>
					Applications
				</div>
				<div
					tabIndex="0"
					className={
						'pl-3 pr-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 '
					}
				>
					Places
				</div>

				<div			
					className="flex items-center justify-center w-auto py-1 pl-3 pr-3 transition duration-100 ease-in-out border-b-2 border-transparent outline-none focus:border-ubb-orange "
				>
					<div className="w-6">
						<img width="16px" height="16px" src="./themes/Yaru/status/emblem-system-symbolic.svg" alt="ubuntu settings" />
					</div>
					<div className="flex items-center justify-between w-2/4">
						<span>Settings</span>
					</div>
				</div>
				</div>

				<div
					tabIndex="0"
					className={
						'pl-1 pr-2 text-xs md:text-sm outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1'
					}
				>
					<Clock />
				</div>
				<div
					id="status-bar"
					tabIndex="0"
					onFocus={() => {
						this.setState({ status_card: true });
					}}
					// removed onBlur from here
					className={
						'relative pr-3 pl-3 outline-none transition duration-100 ease-in-out border-b-2 border-transparent focus:border-ubb-orange py-1 '
					}
				>
					<Status />
					<StatusCard
						shutDown={this.props.shutDown}
						lockScreen={this.props.lockScreen}
						visible={this.state.status_card}
						toggleVisible={() => {
							// this prop is used in statusCard component in handleClickOutside callback using react-onclickoutside
							this.setState({ status_card: false });
						}}
					/>
				</div>
			</div>
		);
	}
}
