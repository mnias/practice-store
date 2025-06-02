import CompanyInfo from './company-info';
import NewsLetter from './news-letter';

export default function Footer() {
  return (
    <footer className="pt:[135px] mt-[50px] flex w-full flex-col items-center md:mt-[80px] lg:pt-[5.625rem]">
      <NewsLetter />
      <CompanyInfo />
    </footer>
  );
}
