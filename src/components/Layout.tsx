import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
            <Header/>
            <main className="container mx-auto min-h-[calc(100vh-header-height)]">{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;