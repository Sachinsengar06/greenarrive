export type ServiceType = 'balcony' | 'maintenance' | 'creation';
export type Unit = 'meter' | 'feet';

export interface BalconyDecorInputs {
  length: string;
  breadth: string;
  unit: Unit;
  plantInstallation: boolean;
  numberOfPlants: string;
  plantRate: string;
  lighting: boolean;
  lightingCost: string;
  decorItems: boolean;
  decorItemsCost: string;
  perSqFtRate: string;
}

export interface MaintenanceInputs {
  length: string;
  breadth: string;
  unit: Unit;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  plantInstallation: boolean;
  numberOfPlants: string;
  plantRate: string;
  manure: boolean;
  manureCost: string;
  pruning: boolean;
  pestControl: boolean;
  perSqFtRate: string;
}

export interface CreationInputs {
  length: string;
  breadth: string;
  unit: Unit;
  grassType: string;
  grassRate: string;
  plantInstallation: boolean;
  numberOfPlants: string;
  plantRate: string;
  manure: boolean;
  manureCost: string;
  irrigation: boolean;
  irrigationCost: string;
  soilPreparation: boolean;
  soilCost: string;
  perSqFtRate: string;
}
