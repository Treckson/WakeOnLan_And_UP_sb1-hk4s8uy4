import React, { useState } from 'react';
import { AddDeviceFormData } from '../types';

interface AddDeviceFormProps {
  onSubmit: (data: AddDeviceFormData) => void;
}

export function AddDeviceForm({ onSubmit }: AddDeviceFormProps) {
  const [formData, setFormData] = useState<AddDeviceFormData>({
    name: '',
    ip: '',
    supportsWol: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', ip: '', supportsWol: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Device Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="ip" className="block text-sm font-medium text-gray-700">
          IP Address
        </label>
        <input
          type="text"
          id="ip"
          value={formData.ip}
          onChange={(e) => setFormData({ ...formData, ip: e.target.value })}
          pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="supportsWol"
          checked={formData.supportsWol}
          onChange={(e) => setFormData({ ...formData, supportsWol: e.target.checked })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="supportsWol" className="ml-2 block text-sm text-gray-700">
          Supports Wake-on-LAN
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add Device
      </button>
    </form>
  );
}