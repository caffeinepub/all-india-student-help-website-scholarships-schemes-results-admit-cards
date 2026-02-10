import { Outlet } from '@tanstack/react-router';
import SiteHeader from '../navigation/SiteHeader';
import SiteFooter from './SiteFooter';
import Breadcrumbs from '../navigation/Breadcrumbs';
import { useRouter } from '@tanstack/react-router';

export default function SiteLayout() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const showBreadcrumbs = currentPath !== '/';

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      {showBreadcrumbs && (
        <div className="border-b bg-accent/10">
          <div className="container py-3 px-4">
            <Breadcrumbs />
          </div>
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
