import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ricardo-fonseca-advocaciaa.vercel.app'),
  title: 'Advogado Previdenciário em Maceió | Ricardo Fonseca Advocacia',
  description: 'Advocacia previdenciária em Maceió/AL. Orientação em benefícios do INSS, aposentadorias, BPC/LOAS e benefícios por incapacidade.',
  keywords: ['advogado previdenciário Maceió', 'advocacia previdenciária', 'INSS Maceió', 'BPC LOAS', 'aposentadoria'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Ricardo Fonseca Advocacia Previdenciária', description: 'Atendimento próximo e atuação técnica em demandas previdenciárias em Maceió/AL.', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1792, height: 960, alt: 'Ricardo Fonseca Advocacia — Direito Previdenciário em Maceió' }] },
  twitter: { card: 'summary_large_image', title: 'Ricardo Fonseca Advocacia Previdenciária', description: 'Atendimento próximo e atuação técnica em demandas previdenciárias em Maceió/AL.', images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
