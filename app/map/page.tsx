"use client"

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api.mapy.cz/loader.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      Loader.load(null, { suggest: true });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Interaktivní mapa</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div id="map" style={{ width: '100%', height: '600px' }}></div>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Legenda</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                  Vrcholy
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                  Trasy
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  Zajímavá místa
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Filtrování</CardTitle>
              <CardDescription>Vyberte, co chcete zobrazit na mapě</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Zobrazit vrcholy
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Zobrazit trasy
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Zobrazit zajímavá místa
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Aplikovat filtry</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}