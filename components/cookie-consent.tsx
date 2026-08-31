'use client';
import { useEffect, useState } from 'react';
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(localStorage.getItem('rf-cookie-choice') === null); }, []);
  if (!visible) return null;
  const choose = (value: string) => { localStorage.setItem('rf-cookie-choice', value); setVisible(false); };
  return <aside className="cookie-banner" aria-label="Preferências de privacidade"><div><strong>Sua privacidade importa</strong><p>Usamos armazenamento essencial para lembrar suas preferências. Cookies de análise só serão utilizados com sua autorização.</p></div><div><button className="cookie-secondary" onClick={() => choose('essential')}>Somente essenciais</button><button className="cookie-primary" onClick={() => choose('accepted')}>Aceitar</button></div></aside>;
}
