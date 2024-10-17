import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon, MapPinIcon, CalendarIcon } from 'lucide-react';

export default function Home() {
  const activeChallenges = [
    { id: 1, name: 'Krkonoše Challenge', peaks: 10, duration: 3, difficulty: 3 },
    { id: 2, name: 'Šumava Adventure', peaks: 8, duration: 2, difficulty: 2 },
    { id: 3, name: 'Jeseníky Extreme', peaks: 12, duration: 4, difficulty: 4 },
  ];

  const galleries = [
    { id: 1, title: 'Východ slunce na Sněžce', author: 'Jan Novák', image: 'https://source.unsplash.com/random/800x600?mountain&sig=1' },
    { id: 2, title: 'Mlha v Šumavě', author: 'Eva Svobodová', image: 'https://source.unsplash.com/random/800x600?forest&sig=2' },
    { id: 3, title: 'Vodopády Jeseníků', author: 'Petr Černý', image: 'https://source.unsplash.com/random/800x600?waterfall&sig=3' },
  ];

  const faqs = [
    { question: 'Co je Czech Hiking Challenge?', answer: 'Czech Hiking Challenge je série turistických výzev zaměřených na zdolávání vrcholů hor v České republice.' },
    { question: 'Jak se mohu zúčastnit?', answer: 'Stačí se zaregistrovat na našem webu a vybrat si výzvu, které se chcete zúčastnit. Poté můžete začít s plněním cílů.' },
    { question: 'Jsou výzvy vhodné pro začátečníky?', answer: 'Máme výzvy různých obtížností, včetně těch vhodných pro začátečníky. U každé výzvy je uvedena její náročnost.' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Banner Section */}
      <section className="relative h-[60vh] mb-16 rounded-lg overflow-hidden">
        <Image
          src="https://source.unsplash.com/random/1920x1080?hiking"
          alt="Hiking Banner"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Czech Hiking Challenge</h1>
            <p className="text-xl mb-8">Objevte krásy českých hor a zdolejte vrcholy Čech a Moravy</p>
            <Link href="/challenges" passHref>
              <Button size="lg">Začít výzvu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">O Czech Hiking Challenge</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Czech Hiking Challenge je unikátní projekt, který spojuje lásku k turistice, objevování krás české přírody a sportovní výzvy. Naším cílem je motivovat lidi k aktivnímu trávení volného času, poznávání nových míst a překonávání vlastních limitů. Připojte se k naší komunitě nadšených turistů, sdílejte své zážitky a inspirujte ostatní!
        </p>
      </section>

      {/* Active Challenges Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Aktivní výzvy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id}>
              <CardHeader>
                <CardTitle>{challenge.name}</CardTitle>
                <CardDescription>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{challenge.peaks} vrcholů</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{challenge.duration} měsíce</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`h-5 w-5 ${
                        index < challenge.difficulty ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Zobrazit detail</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Galerie úspěchů</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <Card key={gallery.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={gallery.image}
                  alt={gallery.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{gallery.title}</CardTitle>
                <CardDescription>Autor: {gallery.author}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">Zobrazit galerii</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Často kladené otázky</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}