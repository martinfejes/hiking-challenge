"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'Jan Novák',
    email: 'jan.novak@example.com',
    completedChallenges: 5,
    totalPeaks: 23,
    totalDistance: 156,
  };

  const completedChallenges = [
    { id: 1, name: 'Krkonoše Challenge', date: '2023-08-15', peaks: 5, distance: 35 },
    { id: 2, name: 'Šumava Adventure', date: '2023-09-22', peaks: 3, distance: 28 },
    { id: 3, name: 'Beskydy Tour', date: '2023-10-10', peaks: 6, distance: 42 },
  ];

  const galleries = [
    { id: 1, name: 'Krkonoše 2023', imageCount: 15 },
    { id: 2, name: 'Šumava 2023', imageCount: 23 },
    { id: 3, name: 'Beskydy 2023', imageCount: 18 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex justify-center">
                <Image
                  src="https://source.unsplash.com/random/200x200?portrait"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <CardTitle className="text-center mt-4">{user.name}</CardTitle>
              <CardDescription className="text-center">{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="font-semibold text-2xl">{user.completedChallenges}</p>
                <p className="text-sm text-muted-foreground">Dokončených výzev</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Celkem vrcholů</span>
                  <span className="font-semibold">{user.totalPeaks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Celková vzdálenost</span>
                  <span className="font-semibold">{user.totalDistance} km</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Upravit profil</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Přehled</TabsTrigger>
              <TabsTrigger value="challenges">Výzvy</TabsTrigger>
              <TabsTrigger value="galleries">Galerie</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Statistiky</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Postup v aktuální výzvě</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Celkový postup</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Odznaky</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Nováček</Badge>
                    <Badge variant="secondary">5 vrcholů</Badge>
                    <Badge variant="secondary">100 km</Badge>
                    <Badge variant="secondary">Krkonoše</Badge>
                    <Badge variant="secondary">Šumava</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="challenges">
              <Card>
                <CardHeader>
                  <CardTitle>Dokončené výzvy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {completedChallenges.map((challenge) => (
                      <li key={challenge.id} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-semibold">{challenge.name}</h3>
                        <p className="text-sm text-muted-foreground">Datum dokončení: {challenge.date}</p>
                        <p className="text-sm">Vrcholy: {challenge.peaks} | Vzdálenost: {challenge.distance} km</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="galleries">
              <Card>
                <CardHeader>
                  <CardTitle>Moje galerie</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {galleries.map((gallery) => (
                      <li key={gallery.id} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-semibold">{gallery.name}</h3>
                        <p className="text-sm text-muted-foreground">Počet fotografií: {gallery.imageCount}</p>
                        <Button variant="outline" size="sm" className="mt-2">Zobrazit galerii</Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Vytvořit novou galerii</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}