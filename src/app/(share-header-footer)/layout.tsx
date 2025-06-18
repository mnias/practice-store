import Footer from '@/components/common/footer/footer';
import Header from '@/components/main/header/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
