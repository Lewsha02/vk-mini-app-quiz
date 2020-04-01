import React, { useState, useEffect } from 'react';
import bridge, { VKBridgeEvent, AnyReceiveMethodName, UserInfo } from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner, { ScreenSpinnerProps } from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component <{}, {activePanel: string, fetchedUser: UserInfo|null, popout: any}>{
	
	async fetchData() {
		const user = await bridge.send('VKWebAppGetUserInfo');
		this.setState({fetchedUser: user, popout: null});
	}

	componentDidMount() {
		bridge.subscribe((event: VKBridgeEvent<AnyReceiveMethodName>) => {
			if (event.detail.type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = event.detail.data.scheme ? event.detail.data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		this.fetchData().then(() => {
			console.log("Data is fetched!")	
		});
	}

	render() {

		const go = (e : any) => {
			this.setState({activePanel: e.currentTarget.dataset.to});
		};

		return (
				<View activePanel={this.state.activePanel} popout={this.state.popout}>
					<Home id='home' fetchedUser={this.state.fetchedUser} go={go} />
					<Persik id='persik' go={go} />
				</View>
		);
	}

	constructor(props:any){
		super(props);
		this.state = {
			activePanel: "home", 
			fetchedUser: null, 
			popout: <ScreenSpinner />
		}
	}
}
export default App;

