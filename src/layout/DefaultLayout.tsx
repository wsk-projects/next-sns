import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Navigation from "./nav/Nav";

export default function DefaultLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <Screen>
      <Header />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </Screen>
  );
}

const Screen = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};
