import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Next Boilerplate</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
