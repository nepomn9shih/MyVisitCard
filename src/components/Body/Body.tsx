import {PageBody} from '../../ui-kit/components/PageBody';
import {PAGES, SIDEBAR_ITEMS_DATA} from './constants';

/** Основной блок */
export const Body = () => {
    return (
        <PageBody
            pages={PAGES}
            sidebarItems={SIDEBAR_ITEMS_DATA}
        />
    );
};
