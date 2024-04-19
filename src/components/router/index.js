import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from 'react-router-dom';
import s from './style.less';
import { ReduxCheck } from '../reduxCheck';
import BatteryChecker from '../custom-hook/battery-checker';
import PressKey from '../custom-hook/press-key';
import { CSSLayout } from '../css/css-layout';
import { ResponsiveCSSGrid1 } from '../css/responsive-css-grid-1';
import { ResponsiveCSSGrid2 } from '../css/responsive-css-grid-2';
import { ResponsiveCSSGrid3 } from '../css/responsive-css-grid-3';
import { Cards } from '../css/cards';
import { FeatureInfo } from '../css/feature-info';
import { Testing } from '../css/Testing';
import { Background } from '../css/background';
import TestComponent from '../test';
import { Home, AddShoppingCart, AirportShuttle, BeachAccess, BluetoothAudio, Build, NoteAddSharp, CardGiftcard, FeaturedPlayList, WorkOutline } from '@material-ui/icons';


function AppRouter() {
	return (
		<Router>
			<div className={s.app}>
				<div className={s.sidebar}>
					<div className={s.sidebarWrapper}>
						<ul className={s.sidebarList}>
							<li>
								<NavLink
									to={'/'}
									className={({ isActive }) => (isActive ? s.active : '')}
								>
									<div className={s.sidebarListItem}>
										<Home className={s.sidebarIcon} />
									</div>
									Home
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page1"
								>
									<div className={s.sidebarListItem}>
										<AddShoppingCart className={s.sidebarIcon} />
									</div>
									Page 1
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page2"
								>
									<div className={s.sidebarListItem}>
										<AirportShuttle className={s.sidebarIcon} />
									</div>
									Page 2
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page3"
								>
									<div className={s.sidebarListItem}>
										<BeachAccess className={s.sidebarIcon} />
									</div>
									Grid Layout
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page4"
								>
									<div className={s.sidebarListItem}>
										<BluetoothAudio className={s.sidebarIcon} />
									</div>
									Responsive Grid 1
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page5"
								>
									<div className={s.sidebarListItem}>
										<Build className={s.sidebarIcon} />
									</div>
									Responsive Grid 2
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page6"
								>
									<div className={s.sidebarListItem}>
										<NoteAddSharp className={s.sidebarIcon} />
									</div>
									Responsive Grid 3
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page7"
								>
									<div className={s.sidebarListItem}>
										<CardGiftcard className={s.sidebarIcon} />
									</div>
									Cards
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page8"
								>
									<div className={s.sidebarListItem}>
										<FeaturedPlayList className={s.sidebarIcon} />
									</div>
									Features
								</NavLink>
							</li>

							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page9"
								>
									<div className={s.sidebarListItem}>
										<WorkOutline className={s.sidebarIcon} />
									</div>
									Testing
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page10"
								>
									<div className={s.sidebarListItem}>
										<WorkOutline className={s.sidebarIcon} />
									</div>
									Background
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? s.active : '')}
									to="/page11"
								>
									<div className={s.sidebarListItem}>
										<WorkOutline className={s.sidebarIcon} />
									</div>
									Test TestComponent
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={s.content}>
					<Routes>
						<Route exact={true} path={'/'} element={<ReduxCheck />} />
						<Route exact path="/page1" element={<BatteryChecker />} />
						<Route exact path="/page2" element={<PressKey inputKey="k" />} />
						<Route exact path="/page3" element={<CSSLayout />} />
						<Route exact path="/page4" element={<ResponsiveCSSGrid1 />} />
						<Route exact path="/page5" element={<ResponsiveCSSGrid2 />} />
						<Route exact path="/page6" element={<ResponsiveCSSGrid3 />} />
						<Route exact path="/page7" element={<Cards />} />
						<Route exact path="/page8" element={<FeatureInfo />} />
						<Route exact path="/page9" element={<Testing />} />
						<Route exact path="/page10" element={<Background />} />
						<Route exact path="/page11" element={<TestComponent />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default AppRouter;
