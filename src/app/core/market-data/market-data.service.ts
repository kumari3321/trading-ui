import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Market } from '../models/market.model';

@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor() { }

  getCategories(): string[] {
    return ['Favourites', 'Forex', 'Crypto', 'Indices', 'Derivatives'];
  }

  getMarkets(category: string): Observable<Market[]> {
    const base: Market[] = [
      {
        id: '1',
        category: 'Forex',
        time: '15:00:00',
        symbol: 'EUR/GBP',
        bid: 1478.256369,
        ask: 1478.256369,
        low: 1235698,
        high: 253659,
        change: 30,
        changePercent: 2.33,
        flagEmoji: '🇧🇪'
      },
      {
        id: '2',
        category: 'Forex',
        time: '15:00:00',
        symbol: 'USD/JPY',
        bid: 113.256369,
        ask: 113.356369,
        low: 110.256398,
        high: 115.35659,
        change: -12,
        changePercent: -0.84,
        flagEmoji: '🇯🇵'
      },
      {
        id: '3',
        category: 'Forex',
        time: '15:00:00',
        symbol: 'GBP/USD',
        bid: 1.256369,
        ask: 1.256569,
        low: 1.236598,
        high: 1.2653659,
        change: 5,
        changePercent: 0.42,
        flagEmoji: '🇬🇧'
      },
    ];

    const items = Array.from({ length: 10 }).map((_, i) => ({
      ...base[i % base.length],
      id: `${i + 1}`
    }));

    const mapped = items.map(m => ({ ...m, category: (category as any) || 'Forex' }));
    return of(mapped);
  }
}
