export interface Market {
	id: string;
	category: 'Favourites' | 'Forex' | 'Crypto' | 'Indices' | 'Derivatives';
	time: string; // e.g., 15:00:00
	symbol: string; // e.g., EUR/GBP
	bid: number;
	ask: number;
	low: number;
	high: number;
	change: number; // absolute change
	changePercent: number; // 0..100
	flagEmoji?: string; // lightweight flag indicator
}
