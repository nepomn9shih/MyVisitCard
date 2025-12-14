import {HashRouter} from 'react-router';
import {useState} from 'react';

import {PageTheme} from './ui-kit/components/PageTheme';
import {getTheme} from './ui-kit/utils/getValueFromLocalStorage';
import {saveTheme} from './ui-kit/utils/saveInLocalStorage';
import {ThemeNames} from './enums/ThemeNames';
import {PageFooter} from './ui-kit/components/PageFooter';
import {FOOTER_TEXT} from './constants';
import {PageBody} from './ui-kit/components/PageBody';
import {getPages} from './constants/pages';
import {SIDEBAR_ITEMS_DATA} from './constants/sidebar';
import {PageHeader} from './ui-kit/components/PageHeader';
import {PageWrapper} from './ui-kit/components/PageWrapper';
import {HEADER_LINKS_DATA, HEADER_TITLE} from './constants/header';
import headerLogo from "./images/ya.png";
import {Routes} from './enums/routes';

export const App = () => {
	const [chosenTheme, setChosenTheme] = useState(getTheme());

	const handlerToggle = () => {
		const newTheme = chosenTheme === ThemeNames.LIGHT
			? ThemeNames.DARK
			: ThemeNames.LIGHT;
		setChosenTheme(newTheme);

		saveTheme(newTheme);
	}

	return (
		<>
			<PageTheme chosenTheme={chosenTheme} />
			<HashRouter>
				<PageWrapper
				header={
					<PageHeader
						handlerToggle={handlerToggle}
						links={HEADER_LINKS_DATA}
						logo={headerLogo}
						logoUrl={Routes.ABOUT_ME}
						title={HEADER_TITLE}
					/>
				}
				body={
					<PageBody
						pages={getPages()}
						sidebarItems={SIDEBAR_ITEMS_DATA}
					/>
				}
				footer={<PageFooter text={FOOTER_TEXT} />}
				/>
			</HashRouter>
		</>
	);
};
