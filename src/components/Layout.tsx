import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
      <Header/>
      <main className="cotainer mx-auto min-h-[100px]">{children}</main>
      <Footer/>
    </>
  )
}

export default Layout;