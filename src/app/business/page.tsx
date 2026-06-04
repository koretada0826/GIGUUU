import PageShell from '@/components/PageShell';
import TelemoHero from '@/components/business/TelemoHero';
import TelemoResults from '@/components/business/TelemoResults';
import TelemoWhatIs from '@/components/business/TelemoWhatIs';
import TelemoVoices from '@/components/business/TelemoVoices';
import TelemoHumanAi from '@/components/business/TelemoHumanAi';
import TelemoVsOthers from '@/components/business/TelemoVsOthers';
import TelemoWhyWorks from '@/components/business/TelemoWhyWorks';
import TelemoBenefits from '@/components/business/TelemoBenefits';
import TelemoCostComparison from '@/components/business/TelemoCostComparison';
import TelemoConsistency from '@/components/business/TelemoConsistency';
import TelemoFlow from '@/components/business/TelemoFlow';
import TelemoFaq from '@/components/business/TelemoFaq';
import TelemoCta from '@/components/business/TelemoCta';

export const metadata = {
  title: '事業紹介 | TELEMO（AI営業代行） | GIGUUU株式会社',
  description:
    '結果が出ない営業代行に、もう払わなくていい。営業歴15年のプロ×AIで月8,800コールを仕組みで回す、GIGUUUのAI営業代行サービス「TELEMO」。',
};

export default function BusinessPage() {
  return (
    <PageShell>
      <TelemoHero />
      <TelemoResults />
      <TelemoWhatIs />
      <TelemoVoices />
      <TelemoHumanAi />
      <TelemoVsOthers />
      <TelemoWhyWorks />
      <TelemoBenefits />
      <TelemoCostComparison />
      <TelemoConsistency />
      <TelemoFlow />
      <TelemoFaq />
      <TelemoCta />
    </PageShell>
  );
}
