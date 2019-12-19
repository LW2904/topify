import { Route } from 'wouter-preact';

import Home from '../routes/home';
import Authenticate from '../routes/authenticate';

const App = () => (
	<>
		<style jsx global>{`
			html, body {
				min-height: 100vh;
				width: 100%;
				padding: 0;
				margin: 0;
				font-family: Circular,Helvetica,Arial,sans-serif;
				font-weight: 400;
				color: var(--foreground);
				background: var(--background);
			}

			* {
				box-sizing: border-box;
			}

			#app {
				min-height: inherit;
			}

			:root {
				--gray: #222326;
				--black: #0f0f0f;
				--white: #ffffff;
				--green: ##1db954;

				--background: var(--black);
				--foreground: var(--white);
			}
		`}</style>

		<div id='app'>
			<Route path='/'>
				<Home />
			</Route>

			<Route path='/authenticate'>
				<Authenticate />
			</Route>


		</div>
	</>
);

export default App;
