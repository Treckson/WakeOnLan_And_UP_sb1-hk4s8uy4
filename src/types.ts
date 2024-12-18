export interface Device {
  id: string;
  name: string;
  ip: string;
  supportsWol: boolean;
  isOnline: boolean;
}

export interface AddDeviceFormData {
  name: string;
  ip: string;
  supportsWol: boolean;
}