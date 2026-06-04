import PageShell from '@/components/PageShell';
import MarqueeBand from '@/components/about/MarqueeBand';
import AboutHero from '@/components/about/AboutHero';
import AboutIntro from '@/components/about/AboutIntro';
import AboutMissionVision from '@/components/about/AboutMissionVision';
import AboutValue from '@/components/about/AboutValue';
import AboutWhy from '@/components/about/AboutWhy';
import AboutBusiness from '@/components/about/AboutBusiness';
import AboutMessage from '@/components/about/AboutMessage';

export const metadata = {
  title: 'GIGUUUとは | GIGUUU株式会社',
  description:
    '人の限界を、技術で超えていく。GIGUUU株式会社は、AI・自動化技術・データ活用で企業の課題を解決する“営業会社発のAI企業”です。',
};

export default function AboutPage() {
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
