import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toast";
// 원래 main.jsx에서 import 하던 CSS 그대로
import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/layout.css";
import "@/styles/header.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "정비노트",
  description: "정비소 관리 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
