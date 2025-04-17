import BreakpointSpacing from "../components/common/spacing/BreakpointSpacing";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Navigation from "./nav/Nav";

export default function DefaultLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <Screen>
      <Header />
      <BreakpointSpacing direction="horizontal" size="16" />
      <div className="flex">
        <Navigation />
        <Main>{children}</Main>
      </div>
      <Footer />
      <BreakpointSpacing direction="horizontal" size="12" />
    </Screen>
  );
}

const Screen = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};
