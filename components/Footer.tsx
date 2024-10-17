import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">O nás</h3>
            <p>Czech Hiking Challenge je vaším průvodcem po krásách české přírody. Zdolávejte vrcholy, objevujte nová místa a užívejte si dobrodružství.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <p>Email: info@czechhikingchallenge.cz</p>
            <p>Telefon: +420 123 456 789</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Odběr novinek</h3>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Váš e-mail" />
              <Button type="submit">Přihlásit k odběru</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p>&copy; 2024 Czech Hiking Challenge. Všechna práva vyhrazena.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><FacebookIcon /></a>
            <a href="#" className="hover:text-primary"><InstagramIcon /></a>
            <a href="#" className="hover:text-primary"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;