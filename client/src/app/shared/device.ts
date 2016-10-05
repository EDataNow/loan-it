export class Device {
  constructor(
    public id: number,
    public name: string,
    public working_device_name: string,
    public working_status: boolean,
    public loan_id: number) { }
}
