import {Redirect, Route, Switch} from 'react-router-dom';

import {Sidebar} from '../Sidebar';
import {StyledPageBodyContent, StyledPageBodyMain} from './styles';
import {PageBodyProps} from './types';

/** Основной блок */
export const PageBody = ({
    pages,
    sidebarItems = [],
    sidebar = <Sidebar items={sidebarItems} />
}: PageBodyProps) => {
    return (
        <StyledPageBodyMain className="qa-body">
            {sidebar}
            <StyledPageBodyContent className="qa-body-content">
                <Switch>
                    <Redirect exact from="/" to={pages[0].path}/>
                    {pages.map(({path, component}, index) => {
                        return (
                            <Route
                                key={index}
                                path={path}
                                render={component}
                            />
                        );
                    })}
                </Switch>
            </StyledPageBodyContent>
        </StyledPageBodyMain>
    );
};
