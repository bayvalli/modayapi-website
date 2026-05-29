export interface Room {
  name: string;
  area: string;
}

export interface FloorPlan {
  name: string;
  type: string;
  totalArea: string;
  layoutType: 'flat' | 'duplex';
  imageUrl: string;
  rooms: Room[];
  downstairsArea?: string;
  downstairsRooms?: Room[];
  upstairsArea?: string;
  upstairsRooms?: Room[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  units?: string;
  features: string;
  category: string;
  imageUrl: string;
  description?: string;
  images?: string[];
  floorPlans?: FloorPlan[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  colorClass: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  items: string[];
}
