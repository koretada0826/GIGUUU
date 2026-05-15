import PageShell from '@/components/PageShell';
import CompanyHero from '@/components/CompanyHero';
import CompanyTable from '@/components/CompanyTable';

export const metadata = {
  title: '会社情報 | GIGUUU株式会社',
};

export default function CompanyPage() {
  return (
    <PageShell>
      <CompanyHero />
      <CompanyTable />
    </PageShell>
  );
}
