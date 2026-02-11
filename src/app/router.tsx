import { Route, Routes } from 'react-router';

import { Layout } from '@/app/layout';

import { FfDesign } from '@/pages/ff-design';
import { Home } from '@/pages/home';

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/ffdesign" element={<FfDesign />} />
            </Route>
        </Routes>
    );
}
