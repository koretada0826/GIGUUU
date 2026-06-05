import PageShell from '@/components/PageShell';
import MarqueeBand from '@/components/about/MarqueeBand';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutValue from '@/components/about/AboutValue';
import AboutWhy from '@/components/about/AboutWhy';
import AboutBusiness from '@/components/about/AboutBusiness';
import AboutMessage from '@/components/about/AboutMessage';

export default function Home() {
  return (
    <PageShell>
      <AboutHero />
      <MarqueeBand />
      <div className="reveal-scroll"><AboutIntro /></div>
      <div className="reveal-scroll"><AboutMissionVision /></div>
      <div className="reveal-scroll"><AboutValue /></div>
      <div className="reveal-scroll"><AboutWhy /></div>
      <MarqueeBand />
      <div className="reveal-scroll"><AboutBusiness /></div>
      <div className="reveal-scroll"><AboutMessage /></div>
    </PageShell>
  );
}
