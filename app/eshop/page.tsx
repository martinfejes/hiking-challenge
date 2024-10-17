"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const challenges = [
  { id: 1, name: 'Krkonoše Challenge', price: 499, image: 'https://source.unsplash.com/random/800x600?mountains&sig=1' },
  { id: 2, name: 'Šumava Adventure', price: 399, image: 'https://source.unsplash.com/random/800x600?forest&sig=2' },
  { id: 3, name: 'Jeseníky Extreme', price: 599, image: 'https://source.unsplash.com/random/800x600?hiking&sig=3' },
  { id: 4, name: 'Beskydy Tour', price: 449, image: 'https://source.unsplash.com/random/800x600?nature&sig=4' },
  { id: 5, name: 'Českosaské Švýcarsko', price: 349, image: 'https://source.unsplash.com/random/800x600?rocks&sig=5' },
  { id: 6, name: 'Krušné hory Expedition', price: 479, image: 'https://source.unsplash.com/random/800x600?landscape&sig=6' },
];

export default function Eshop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filteredChallenges = challenges.filter(challenge =>
    challenge.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">E-shop výzev</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Hledat výzvu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/2"
        />
        <Select onValueChange={setSortBy}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Seřadit podle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Výchozí řazení</SelectItem>
            <SelectItem value="price-asc">Cena: od nejnižší</SelectItem>
            <SelectItem value="price-desc">Cena: od nejvyšší</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedChallenges.map(challenge => (
          <Card key={challenge.id} className="flex flex-col">
            <Image
              src={challenge.image}
              alt={challenge.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{challenge.name}</CardTitle>
              <CardDescription>Cena: {challenge.price} Kč</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Popis výzvy a její hlavní výhody...</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Přidat do košíku</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}