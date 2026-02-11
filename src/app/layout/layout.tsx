import { Outlet } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export default function Layout() {
    return (
        <Fragment>
            <header>Navigation</header>
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </Fragment>
    );
}
