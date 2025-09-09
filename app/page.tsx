import { Search, ListTodo, BanknoteArrowUp } from "lucide-react";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Services from "./_components/Services";
import Footer from "./_components/Footer";

interface MenuItem {
  name: string;
  url: string;
}

interface CTA {
  name: string;
  url: string;
}

interface Hero {
  title: string;
  description: string;
  image: string;
  ctas: CTA[];
}

interface Solution {
  title: string;
  description: string;
  icon: string;
  ctas: CTA;
}

interface HomeData {
  menus: {
    header: MenuItem[];
    footer: MenuItem[];
  };
  hero: Hero;
  solutions: Solution[];
}

async function fetchHomeData(): Promise<HomeData> {
  const res = await fetch( 'https://sioux-test-dev-api.vercel.app/home.json', {
    cache: 'no-store'
  } );

  if ( !res.ok ) {
    throw new Error( 'Failed to fetch data' );
  }

  return res.json();
}

export default async function Home() {
  const data = await fetchHomeData();

  const iconMap: Record<string, React.ComponentType<any>> = {
    "letter-text": ListTodo,
    "search": Search,
    "banknote-arrow-up": BanknoteArrowUp,
  };

  return ( <div className="min-h-screen bg-white">
    <Header menuItems={data.menus.header} />
    <Banner hero={data.hero} />
    <Services solutions={data.solutions} iconMap={iconMap} />
    <Footer menuItems={data.menus.footer} />
  </div> );
}

