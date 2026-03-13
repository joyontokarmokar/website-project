import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ArtForDevelopers from './pages/ArtForDevelopers';
import InteriorArtPrograms from './pages/InteriorArtPrograms';
import LegacyPortraits from './pages/LegacyPortraits';
import CaseStudies from './pages/CaseStudies';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'art-for-developers', element: <ArtForDevelopers /> },
      { path: 'interior-art-programs', element: <InteriorArtPrograms /> },
      { path: 'legacy-portraits', element: <LegacyPortraits /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'store', element: <Store /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
