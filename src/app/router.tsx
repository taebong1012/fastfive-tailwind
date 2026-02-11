import { Route, Routes } from 'react-router';
import { Layout } from '@/app/layout';
import { FfDesign } from '@/pages/ff-design';

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/ffdesign" element={<FfDesign />} />
            </Route>
        </Routes>
    );
}
