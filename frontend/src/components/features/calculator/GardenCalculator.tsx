import { useState } from "react";

import {
  BalconyDecorInputs,
  MaintenanceInputs,
  CreationInputs,
} from "../../../utils/GardenCalculator/type";

import {
  calculateArea,
  calculateBalconyCost,
  calculateMaintenanceCost,
  calculateCreationCost,
} from "../../../utils/GardenCalculator/calculation";
import ServiceCard from "../../common/ServiceCard";
import TopBanner from "../../common/TopBanner";
import { ServiceCategory } from "../../../utils/types";

type GardenCalculatorProps = {
  serviceType?: ServiceCategory | null;
};

export default function GardenCalculator({
  serviceType = null
}: GardenCalculatorProps) {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(serviceType);

  const [balconyInputs, setBalconyInputs] = useState<BalconyDecorInputs>({
    length: "",
    breadth: "",
    unit: "feet",
    plantInstallation: false,
    numberOfPlants: "",
    plantRate: "",
    lighting: false,
    lightingCost: "",
    decorItems: false,
    decorItemsCost: "",
    perSqFtRate: "50",
  });

  const [maintenanceInputs, setMaintenanceInputs] = useState<MaintenanceInputs>(
    {
      length: "",
      breadth: "",
      unit: "feet",
      frequency: "monthly",
      plantInstallation: false,
      numberOfPlants: "",
      plantRate: "",
      manure: false,
      manureCost: "",
      pruning: false,
      pestControl: false,
      perSqFtRate: "30",
    }
  );

  const [creationInputs, setCreationInputs] = useState<CreationInputs>({
    length: "",
    breadth: "",
    unit: "feet",
    grassType: "",
    grassRate: "",
    plantInstallation: false,
    numberOfPlants: "",
    plantRate: "",
    manure: false,
    manureCost: "",
    irrigation: false,
    irrigationCost: "",
    soilPreparation: false,
    soilCost: "",
    perSqFtRate: "100",
  });

  const area =
    activeService === "balcony-decoration"
      ? calculateArea(
          balconyInputs.length,
          balconyInputs.breadth,
          balconyInputs.unit
        )
      : activeService === "garden-maintenance"
      ? calculateArea(
          maintenanceInputs.length,
          maintenanceInputs.breadth,
          maintenanceInputs.unit
        )
      : activeService === "park"
      ? calculateArea(
          creationInputs.length,
          creationInputs.breadth,
          creationInputs.unit
        )
      : 0;

  const total =
    activeService === "balcony-decoration"
      ? calculateBalconyCost(balconyInputs)
      : activeService === "garden-maintenance"
      ? calculateMaintenanceCost(maintenanceInputs)
      : activeService === "park"
      ? calculateCreationCost(creationInputs)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 pb-14">
      {/*-------------- TOP BANNER---------------*/}
      <TopBanner
        title={"Our Calculator"}
        description={
          "We provide premium lawn and garden care to make your outdoor space stunning."
        }
      />

      <div className="max-w-6xl mx-auto">
        {/* ---------------- SERVICE SELECTION ---------------- */}

        {!activeService && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8">
            <ServiceCard
              title="Balcony Decor"
              description="Transform your balcony"
              onClick={() => setActiveService("balcony-decoration")}
            />

            <ServiceCard
              title="Garden Maintenance"
              description="Regular care for your garden"
              onClick={() => setActiveService("garden-maintenance")}
            />

            <ServiceCard
              title="Garden Creation"
              description="Create your dream garden"
              onClick={() => setActiveService("park")}
            />
          </div>
        )}

        {/* ---------------- FORMS ---------------- */}

        {activeService && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 relative">
            {/* <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 border border-green-200 text-green-700 px-3 py-1.5 rounded-lg hover:bg-green-50"
            >
              ← Back
            </button> */}

            {/* ---------------- BALCONY ---------------- */}

            {activeService === "balcony-decoration" && (
              <div>
                <h2 className="text-xl font-semibold text-green-800 mb-6">
                  Balcony Decor
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Length"
                    value={balconyInputs.length}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        length: e.target.value,
                      }))
                    }
                  />

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Breadth"
                    value={balconyInputs.breadth}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        breadth: e.target.value,
                      }))
                    }
                  />

                  <select
                    className="border rounded-lg px-3 py-2"
                    value={balconyInputs.unit}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        unit: e.target.value as any,
                      }))
                    }
                  >
                    <option value="feet">Feet</option>
                    <option value="meter">Meter</option>
                  </select>

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Per sq ft rate"
                    value={balconyInputs.perSqFtRate}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        perSqFtRate: e.target.value,
                      }))
                    }
                  />
                </div>

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={balconyInputs.plantInstallation}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        plantInstallation: e.target.checked,
                      }))
                    }
                  />
                  Plant installation
                </label>

                {balconyInputs.plantInstallation && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="No. of plants"
                      value={balconyInputs.numberOfPlants}
                      onChange={(e) =>
                        setBalconyInputs((p) => ({
                          ...p,
                          numberOfPlants: e.target.value,
                        }))
                      }
                    />

                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="Plant rate"
                      value={balconyInputs.plantRate}
                      onChange={(e) =>
                        setBalconyInputs((p) => ({
                          ...p,
                          plantRate: e.target.value,
                        }))
                      }
                    />
                  </div>
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={balconyInputs.lighting}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        lighting: e.target.checked,
                      }))
                    }
                  />
                  Lighting
                </label>

                {balconyInputs.lighting && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Lighting cost"
                    value={balconyInputs.lightingCost}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        lightingCost: e.target.value,
                      }))
                    }
                  />
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={balconyInputs.decorItems}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        decorItems: e.target.checked,
                      }))
                    }
                  />
                  Decor items
                </label>

                {balconyInputs.decorItems && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Decor items cost"
                    value={balconyInputs.decorItemsCost}
                    onChange={(e) =>
                      setBalconyInputs((p) => ({
                        ...p,
                        decorItemsCost: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
            )}

            {/* ---------------- MAINTENANCE ---------------- */}

            {activeService === "garden-maintenance" && (
              <div>
                <h2 className="text-xl font-semibold text-green-800 mb-6">
                  Maintenance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Length"
                    value={maintenanceInputs.length}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        length: e.target.value,
                      }))
                    }
                  />

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Breadth"
                    value={maintenanceInputs.breadth}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        breadth: e.target.value,
                      }))
                    }
                  />

                  <select
                    className="border rounded-lg px-3 py-2"
                    value={maintenanceInputs.unit}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        unit: e.target.value as any,
                      }))
                    }
                  >
                    <option value="feet">Feet</option>
                    <option value="meter">Meter</option>
                  </select>

                  <select
                    className="border rounded-lg px-3 py-2"
                    value={maintenanceInputs.frequency}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        frequency: e.target.value as any,
                      }))
                    }
                  >
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Per sq ft rate"
                    value={maintenanceInputs.perSqFtRate}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        perSqFtRate: e.target.value,
                      }))
                    }
                  />
                </div>

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={maintenanceInputs.plantInstallation}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        plantInstallation: e.target.checked,
                      }))
                    }
                  />
                  Plant installation
                </label>

                {maintenanceInputs.plantInstallation && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="No. of plants"
                      value={maintenanceInputs.numberOfPlants}
                      onChange={(e) =>
                        setMaintenanceInputs((p) => ({
                          ...p,
                          numberOfPlants: e.target.value,
                        }))
                      }
                    />
                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="Plant rate"
                      value={maintenanceInputs.plantRate}
                      onChange={(e) =>
                        setMaintenanceInputs((p) => ({
                          ...p,
                          plantRate: e.target.value,
                        }))
                      }
                    />
                  </div>
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={maintenanceInputs.manure}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        manure: e.target.checked,
                      }))
                    }
                  />
                  Manure
                </label>

                {maintenanceInputs.manure && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Manure cost"
                    value={maintenanceInputs.manureCost}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        manureCost: e.target.value,
                      }))
                    }
                  />
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={maintenanceInputs.pruning}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        pruning: e.target.checked,
                      }))
                    }
                  />
                  Pruning
                </label>

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={maintenanceInputs.pestControl}
                    onChange={(e) =>
                      setMaintenanceInputs((p) => ({
                        ...p,
                        pestControl: e.target.checked,
                      }))
                    }
                  />
                  Pest control
                </label>
              </div>
            )}

            {/* ---------------- CREATION ---------------- */}

            {activeService === "park" && (
              <div>
                <h2 className="text-xl font-semibold text-green-800 mb-6">
                  Garden Creation
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Length"
                    value={creationInputs.length}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        length: e.target.value,
                      }))
                    }
                  />

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Breadth"
                    value={creationInputs.breadth}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        breadth: e.target.value,
                      }))
                    }
                  />

                  <select
                    className="border rounded-lg px-3 py-2"
                    value={creationInputs.unit}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        unit: e.target.value as any,
                      }))
                    }
                  >
                    <option value="feet">Feet</option>
                    <option value="meter">Meter</option>
                  </select>

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Grass rate"
                    value={creationInputs.grassRate}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        grassRate: e.target.value,
                      }))
                    }
                  />

                  <input
                    className="border rounded-lg px-3 py-2"
                    placeholder="Per sq ft rate"
                    value={creationInputs.perSqFtRate}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        perSqFtRate: e.target.value,
                      }))
                    }
                  />
                </div>

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={creationInputs.plantInstallation}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        plantInstallation: e.target.checked,
                      }))
                    }
                  />
                  Plant installation
                </label>

                {creationInputs.plantInstallation && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="No. of plants"
                      value={creationInputs.numberOfPlants}
                      onChange={(e) =>
                        setCreationInputs((p) => ({
                          ...p,
                          numberOfPlants: e.target.value,
                        }))
                      }
                    />

                    <input
                      className="border rounded-lg px-3 py-2"
                      placeholder="Plant rate"
                      value={creationInputs.plantRate}
                      onChange={(e) =>
                        setCreationInputs((p) => ({
                          ...p,
                          plantRate: e.target.value,
                        }))
                      }
                    />
                  </div>
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={creationInputs.manure}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        manure: e.target.checked,
                      }))
                    }
                  />
                  Manure
                </label>

                {creationInputs.manure && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Manure cost"
                    value={creationInputs.manureCost}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        manureCost: e.target.value,
                      }))
                    }
                  />
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={creationInputs.irrigation}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        irrigation: e.target.checked,
                      }))
                    }
                  />
                  Irrigation
                </label>

                {creationInputs.irrigation && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Irrigation cost"
                    value={creationInputs.irrigationCost}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        irrigationCost: e.target.value,
                      }))
                    }
                  />
                )}

                <label className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    checked={creationInputs.soilPreparation}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        soilPreparation: e.target.checked,
                      }))
                    }
                  />
                  Soil preparation
                </label>

                {creationInputs.soilPreparation && (
                  <input
                    className="border rounded-lg px-3 py-2 mt-3"
                    placeholder="Soil preparation cost"
                    value={creationInputs.soilCost}
                    onChange={(e) =>
                      setCreationInputs((p) => ({
                        ...p,
                        soilCost: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
            )}

            {/* ---------------- RESULT ---------------- */}

            <div className="mt-8 bg-gradient-to-r from-green-700 to-green-500 text-white rounded-xl p-5 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <span className="block text-sm opacity-90">Area</span>
                <strong className="text-lg">{area.toFixed(2)} sq ft</strong>
              </div>

              <div>
                <span className="block text-sm opacity-90">Total</span>
                <strong className="text-lg">
                  ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
