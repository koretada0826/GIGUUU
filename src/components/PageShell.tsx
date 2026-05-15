import Header from './Header';
import Footer from './Footer';
import { SideGradientLeft, SideGradientRight } from './SideGradient';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <SideGradientLeft />
      <SideGradientRight />
      <div className="relative">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
