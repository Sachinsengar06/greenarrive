import {
  Unit,
  BalconyDecorInputs,
  MaintenanceInputs,
  CreationInputs
} from "./type";

export function calculateArea(
  length: string,
  breadth: string,
  unit: Unit
): number {
  const l = Number(length) || 0;
  const b = Number(breadth) || 0;

  const area = l * b;
  return unit === "meter" ? area * 10.764 : area;
}

export function calculateBalconyCost(input: BalconyDecorInputs): number {
  const area = calculateArea(input.length, input.breadth, input.unit);

  let total = area * Number(input.perSqFtRate || 0);

  if (input.plantInstallation) {
    total +=
      Number(input.numberOfPlants || 0) *
      Number(input.plantRate || 0);
  }

  if (input.lighting) total += Number(input.lightingCost || 0);
  if (input.decorItems) total += Number(input.decorItemsCost || 0);

  return total;
}

export function calculateMaintenanceCost(input: MaintenanceInputs): number {
  const area = calculateArea(input.length, input.breadth, input.unit);

  let total = area * Number(input.perSqFtRate || 0);

  if (input.plantInstallation) {
    total +=
      Number(input.numberOfPlants || 0) *
      Number(input.plantRate || 0);
  }

  if (input.manure) total += Number(input.manureCost || 0);
  if (input.pruning) total += area * 5;
  if (input.pestControl) total += area * 8;

  const multiplier = {
    weekly: 4,
    biweekly: 2,
    monthly: 1
  } as const;

  return total * multiplier[input.frequency];
}

export function calculateCreationCost(input: CreationInputs): number {
  const area = calculateArea(input.length, input.breadth, input.unit);

  let total = area * Number(input.perSqFtRate || 0);
  total += area * Number(input.grassRate || 0);

  if (input.plantInstallation) {
    total +=
      Number(input.numberOfPlants || 0) *
      Number(input.plantRate || 0);
  }

  if (input.manure) total += Number(input.manureCost || 0);
  if (input.irrigation) total += Number(input.irrigationCost || 0);
  if (input.soilPreparation) total += Number(input.soilCost || 0);

  return total;
}
