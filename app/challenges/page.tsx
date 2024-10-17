"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapIcon, CalendarIcon, MountainIcon } from 'lucide-react';

const challenges = [
  { id: 1, name: 'Krkonoše Challenge', region: 'Krkonoše', difficulty: 'Střední', duration: '3 dny', peaks: 5 },
  { id: 2, name: 'Šumava Adventure', region: 'Šumava', difficulty: 'Lehká', duration: '2 dny', peaks: 3 },
  { id: 3, name: 'Jeseníky Extreme', region: 'Jeseníky', difficulty: 'Těžká', duration: '5 dnů', peaks: 8 },
  { id: 4, name: 'Beskydy Tour', region: 'Beskydy', difficulty: 'Střední', duration: '4 dny', peaks: 6 },
  { id: 5, name: 'Českosaské Švýcarsko', region: 'Českosaské Švýcarsko', difficulty: 'Lehká', duration: '2 dny', peaks: 4 },
  { id: 6, name: 'Krušné hory Expedition', region: 'Krušné hory', difficulty: 'Střední', duration: '3 dny', peaks: 5 },
];

export default function Challenges() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredChallenges = challenges.filter(challenge => 
    challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === '' || challenge.region === selectedRegion) &&
    (selectedDifficulty === '' || challenge.difficulty === selectedDifficulty)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Turistické výzvy</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Hledat výzvu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/3"
        />
        <Select onValueChange={setSelectedRegion}>
          <SelectTrigger className="md:w-1/3">
            <SelectValue placeholder="Vyberte region" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Všechny regiony</SelectItem>
            {Array.from(new Set(challenges.map(c => c.region))).map(region => (
              <SelectItem key={region} value={region}>{region}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedDifficulty}>
          <SelectTrigger className="md:w-1/3">
            <SelectValue placeholder="Vyberte obtížnost" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Všechny obtížnosti</SelectItem>
            <SelectItem value="Lehká">Lehká</SelectItem>
            <SelectItem value="Střední">Střední</SelectItem>
            <SelectItem value="Těžká">Těžká</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map(challenge => (
          <Card key={challenge.id}>
            <CardHeader>
              <CardTitle>{challenge.name}</CardTitle>
              <CardDescription>{challenge.region}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-2">
                <MountainIcon className="mr-2 h-4 w-4" />
                <span>Obtížnost: {challenge.difficulty}</span>
              </div>
              <div className="flex items-center mb-2">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Trvání: {challenge.duration}</span>
              </div>
              <div className="flex items-center">
                <MapIcon className="mr-2 h-4 w-4" />
                <span>Počet vrcholů: {challenge.peaks}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Zobrazit detail</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}