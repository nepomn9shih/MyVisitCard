import {Navigate, Route, Routes} from 'react-router';

import {Sidebar} from '../Sidebar';
import {StyledPageBodyContent, StyledPageBodyMain} from './styles';
import type {PageBodyProps} from './types';

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
                <Routes>
                    <Route path="/" element={<Navigate to={pages[0].path} replace />} />
                    {pages.map(({path, component}, index) => {
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={component()}
                            />
                        );
                    })}
                </Routes>
            </StyledPageBodyContent>
        </StyledPageBodyMain>
    );
};
