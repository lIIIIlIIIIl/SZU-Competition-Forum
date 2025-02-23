'use client'
import { Toaster } from "react-hot-toast";
// app/layout.tsx
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import IONavBar from "@/components/IONavBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <main className="flex-1 min-h-[calc(110vh)] text-foreground mx-auto bg-background pt-[54px]">
            <title>竞赛论坛</title>
            <IONavBar />
            {children}
            <Toaster position="bottom-center"/>
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
