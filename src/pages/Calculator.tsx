import React, { useState } from 'react';
import { Calculator as CalcIcon, Car, Lightbulb, Flame } from 'lucide-react';

interface FormData {
  userType: 'urban' | 'rural';
  electricity: number;
  lpg: number;
  distance: number;
  transport: 'car' | 'bus' | 'bike' | 'walk';
}

export function Calculator() {
  const [formData, setFormData] = useState<FormData>({
    userType: 'urban',
    electricity: 0,
    lpg: 0,
    distance: 0,
    transport: 'car',
  });

  const [result, setResult] = useState<number | null>(null);

  const calculateFootprint = () => {
    // Simple calculation for demonstration
    const electricityEmission = formData.electricity * 0.85; // kgCO2 per kWh
    const lpgEmission = formData.lpg * 2.983; // kgCO2 per kg of LPG
    const transportEmission = formData.distance * 
      (formData.transport === 'car' ? 0.2 : 
       formData.transport === 'bus' ? 0.08 : 
       formData.transport === 'bike' ? 0.05 : 0);

    setResult(electricityEmission + lpgEmission + transportEmission);
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center mb-8">
              <CalcIcon className="mx-auto h-12 w-12 text-green-500" />
              <h2 className="mt-2 text-3xl font-bold text-gray-900">Carbon Footprint Calculator</h2>
              <p className="mt-1 text-sm text-gray-500">Calculate your monthly carbon footprint</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">User Type</label>
                <select
                  value={formData.userType}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value as 'urban' | 'rural' })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="urban">Urban</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <div className="flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-green-500" />
                    Monthly Electricity Usage (kWh)
                  </div>
                </label>
                <input
                  type="number"
                  value={formData.electricity}
                  onChange={(e) => setFormData({ ...formData, electricity: Number(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-2 text-green-500" />
                    LPG Usage (kg)
                  </div>
                </label>
                <input
                  type="number"
                  value={formData.lpg}
                  onChange={(e) => setFormData({ ...formData, lpg: Number(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <div className="flex items-center">
                    <Car className="h-5 w-5 mr-2 text-green-500" />
                    Daily Commute Distance (km)
                  </div>
                </label>
                <input
                  type="number"
                  value={formData.distance}
                  onChange={(e) => setFormData({ ...formData, distance: Number(e.target.value) })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Transport Mode</label>
                <select
                  value={formData.transport}
                  onChange={(e) => setFormData({ ...formData, transport: e.target.value as FormData['transport'] })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="bike">Bike</option>
                  <option value="walk">Walk</option>
                </select>
              </div>

              <button
                onClick={calculateFootprint}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Calculate Footprint
              </button>

              {result !== null && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-green-800">Your Carbon Footprint</h3>
                    <p className="mt-2 text-3xl font-bold text-green-900">{result.toFixed(2)} kg CO₂</p>
                    <p className="mt-1 text-sm text-green-700">
                      This is equivalent to planting {Math.round(result / 20)} trees to offset
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
