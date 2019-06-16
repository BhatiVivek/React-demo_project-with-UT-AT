import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {ROUTES} from './routes.json';

import Index from '../containers/tempApp';
import Home from '../components/home';
import InvestigationReport from '../components/investigationReport';
import CreateInvestigation from '../components/createInvestigation';

export default(
				<Route path="/" component={Index}>
					<Route path={ROUTES.HOME} component={Home} />
					<Route path={ROUTES.INVESTIGATION} component={InvestigationReport} />
					<Route path={ROUTES.CREATEINVESTIGATION} component={CreateInvestigation} />
				</Route>
);
