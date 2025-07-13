// src/app/layout.jsx
import './globals.css';
import SessionWrapper from './componenets/SessionWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
