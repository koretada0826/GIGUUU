import PageShell from '@/components/PageShell';
import TelemoHero from '@/components/business/TelemoHero';
import TelemoIntro from '@/components/business/TelemoIntro';
import TelemoPainPoints from '@/components/business/TelemoPainPoints';
import TelemoSolution from '@/components/business/TelemoSolution';

export const metadata = {
  title: '事業紹介 | GIGUUU株式会社',
};

export default function BusinessPage() {
  return (
    <PageShell>
      <TelemoHero />
      <TelemoIntro />
      <TelemoPainPoints />
      <TelemoSolution />
    </PageShell>
  );
}
