import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'お問い合わせ | GIGUUU株式会社',
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactForm />
    </PageShell>
  );
}
