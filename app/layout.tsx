import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tabicore GIFT | 旅行業界向けeギフトサービス",
  description: "全国の空港・駅・お土産店で使えるeギフト券。初期費用・月額費用ゼロ、最短1週間で導入できる旅行業界向けeギフトサービス。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
