import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const heading = Cormorant_Garamond({ variable: '--font-heading-serif', subsets: ['latin'], weight: ['500', '600', '700'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ricardofonsecaadvocacia.com.br'),
  title: 'Advogado Previdenciário em Maceió | Ricardo Fonseca Advocacia',
  description: 'Advocacia previdenciária em Maceió/AL. Orientação em benefícios do INSS, aposentadorias, BPC/LOAS e benefícios por incapacidade.',
  keywords: ['advogado previdenciário Maceió', 'advocacia previdenciária', 'INSS Maceió', 'BPC LOAS', 'aposentadoria'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Ricardo Fonseca Advocacia Previdenciária', description: 'Atendimento próximo e atuação técnica em demandas previdenciárias em Maceió/AL.', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1792, height: 960, alt: 'Ricardo Fonseca Advocacia — Direito Previdenciário em Maceió' }] },
  twitter: { card: 'summary_large_image', title: 'Ricardo Fonseca Advocacia Previdenciária', description: 'Atendimento próximo e atuação técnica em demandas previdenciárias em Maceió/AL.', images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${heading.variable} ${body.variable}`}>{children}</body></html>;
}
