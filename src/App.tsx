import React, { useState } from 'react';
import { Device, AddDeviceFormData } from './types';
import { DeviceList } from './components/DeviceList';
import { AddDeviceForm } from './components/AddDeviceForm';
import { Wifi } from 'lucide-react';

function App() {
  const [devices, setDevices] = useState<Device[]>([]);

  const handleAddDevice = (data: AddDeviceFormData) => {
    const newDevice: Device = {
      id: crypto.randomUUID(),
      ...data,
      isOnline: Math.random() > 0.5, // Simulated online status
    };
    setDevices([...devices, newDevice]);
  };

  const handleWakeDevice = (device: Device) => {
    // This would normally send a Wake-on-LAN packet
    console.log(`Sending WoL packet to ${device.ip}`);
    alert(`Wake-on-LAN signal sent to ${device.name} (${device.ip})`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Wifi className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Device Monitor</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-[350px,1fr]">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Device</h2>
            <AddDeviceForm onSubmit={handleAddDevice} />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Monitored Devices</h2>
            {devices.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No devices added yet. Add a device to start monitoring.
              </p>
            ) : (
              <DeviceList devices={devices} onWakeDevice={handleWakeDevice} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;