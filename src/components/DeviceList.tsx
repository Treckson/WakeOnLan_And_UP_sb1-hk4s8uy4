import React from 'react';
import { Device } from '../types';
import { Power, Circle } from 'lucide-react';

interface DeviceListProps {
  devices: Device[];
  onWakeDevice: (device: Device) => void;
}

export function DeviceList({ devices, onWakeDevice }: DeviceListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {devices.map((device) => (
        <div
          key={device.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Circle
                className={`w-3 h-3 ${
                  device.isOnline ? 'fill-green-500 text-green-500' : 'fill-red-500 text-red-500'
                }`}
              />
              <h3 className="font-semibold text-lg">{device.name}</h3>
            </div>
            {device.supportsWol && (
              <button
                onClick={() => onWakeDevice(device)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Wake device"
              >
                <Power className="w-5 h-5" />
              </button>
            )}
          </div>
          <p className="text-gray-600 mt-2">{device.ip}</p>
        </div>
      ))}
    </div>
  );
}