export interface NavItem {
  title: string;
  href: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  target: number;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  image: string;
}