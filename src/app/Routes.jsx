import React, { Fragment } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomePage from '../containers/Home';
import ProjectPage from '../containers/Project';
import AdvancedPage from '../containers/Advanced';
import AddNewProjectPage from '../containers/AddNewProject';
import GlobalStyles from './global-styles';

const Routes = () => (
	<BrowserRouter basename={window.location.pathname}>
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition
						key={location.pathname}
						timeout={{
							enter: 400,
							exit: 400
						}}
						classNames="simpleFade"
					>
						<Switch location={location}>
							<Fragment>
								<GlobalStyles />
								<Route path="/" component={HomePage} exact />
								<Route path="/project/:projectName" component={ProjectPage} exact />
								<Route path="/project/:projectName/advanced" component={AdvancedPage} exact />
								<Route path="/addnewproject" component={AddNewProjectPage} exact />
							</Fragment>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	</BrowserRouter>
);

// const Routes = () => (
//     <HashRouter>
//         <Fragment>
//             <GlobalStyles />
//             <Route path="/" component={HomePage} exact />
//             <Route
//                 path="/project/:projectName"
//                 component={ProjectPage}
//                 exact
//             />
//             <Route
//                 path="/project/:projectName/advanced"
//                 component={AdvancedPage}
//                 exact
//             />
//             <Route
//                 path="/addnewproject"
//                 component={AddNewProjectPage}
//                 exact
//             />
//         </Fragment>
//     </HashRouter>
// );

export default Routes;
