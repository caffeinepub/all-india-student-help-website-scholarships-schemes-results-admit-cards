import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import SiteLayout from './components/layout/SiteLayout';
import HomePage from './pages/HomePage';
import EducationNewsPage from './pages/EducationNewsPage';
import SchoolEducationPage from './pages/SchoolEducationPage';
import CompetitiveExamsPage from './pages/CompetitiveExamsPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import SchemesPage from './pages/SchemesPage';
import ResultsPage from './pages/ResultsPage';
import AdmitCardsPage from './pages/AdmitCardsPage';
import SearchPage from './pages/SearchPage';
import StatePage from './pages/StatePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PostDetailPage from './pages/PostDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import OwnerIngestPage from './pages/OwnerIngestPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const educationNewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/education-news',
  component: EducationNewsPage,
});

const schoolEducationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/school-education',
  component: SchoolEducationPage,
});

const competitiveExamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/competitive-exams',
  component: CompetitiveExamsPage,
});

const scholarshipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/scholarships',
  component: ScholarshipsPage,
});

const schemesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/schemes',
  component: SchemesPage,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/results',
  component: ResultsPage,
});

const admitCardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admit-cards',
  component: AdmitCardsPage,
});

const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: SearchPage,
});

const stateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/state/$stateSlug',
  component: StatePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/disclaimer',
  component: DisclaimerPage,
});

const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post/$postId',
  component: PostDetailPage,
});

// Unlinked owner ingestion route (not in navigation)
const ownerIngestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/owner/ingest',
  component: OwnerIngestPage,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  educationNewsRoute,
  schoolEducationRoute,
  competitiveExamsRoute,
  scholarshipsRoute,
  schemesRoute,
  resultsRoute,
  admitCardsRoute,
  searchRoute,
  stateRoute,
  aboutRoute,
  contactRoute,
  privacyRoute,
  disclaimerRoute,
  postDetailRoute,
  ownerIngestRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
