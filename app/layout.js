import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
export const metadata = {
  title: "Rehan Ullah Khan",
  description:
    "my name is rehan ullah khan I am a full stack javascript & blockchain developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
