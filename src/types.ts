export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  colorClass: string;
}

export interface FloorPlanRoom {
  name: string;
  area: string;
}

export type Room = FloorPlanRoom;

export interface FloorPlan {
  name: string;
  type: string;
  totalArea: string;
  rooms: FloorPlanRoom[];
  layoutType?: 'flat' | 'duplex';
  upstairsRooms?: FloorPlanRoom[];
  upstairsArea?: string;
  downstairsRooms?: FloorPlanRoom[];
  downstairsArea?: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  units?: string;
  features: string;
  imageUrl: string;
  category: string;
  description?: string;
  images?: string[];
  floorPlans?: FloorPlan[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  items: string[];
}
