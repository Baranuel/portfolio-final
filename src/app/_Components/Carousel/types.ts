export type CarouselColor = 'red' | 'yellow';

export interface CarouselSettings {
  gap: string;
  cardWidth: number;
  itemCount: number;
  duration: number;
}

export interface CarouselStripeProps {
  settings: CarouselSettings;
  color: CarouselColor;
  clipPathClass: string;
} 