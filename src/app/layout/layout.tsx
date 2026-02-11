import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

import { NavigationBar } from '@/features/navigation-bar';

export default function Layout() {
    return (
        <Fragment>
            <NavigationBar />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </Fragment>
    );
}
