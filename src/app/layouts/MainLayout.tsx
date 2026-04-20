import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-[1fr_min(1200px,100%)_1fr] min-h-screen bg-[linear-gradient(125deg,#121212,#454545)] ">
      <div className="grid-cols-subgrid grid col-start-1 col-end-4 ">
        <Header />
        <main className="col-start-2 col-end-2 ">{children}</main>
        <Footer />
        <p className="text-sm col-start-2 col-end-2 mb-10 pl-10 md:pl-0">© {new Date().getFullYear()} Andreas Sage Amadeu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MainLayout;
