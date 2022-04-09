class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;
    
  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;    }


  public get brand(): string {
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }
   
  public get size(): number {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }
   
  public get resolution(): string {
    return this._resolution;
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
    
  public get connections(): string[] {
    return this._connections;
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
   
  public get connectedTo(): string {
    return this._connectedTo;
  }
  public set connectedTo(value: string) {
    if(this._connectedTo.includes(value)){
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
  }
  const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);  
  tv1.connectedTo = 'Wi-Fi';
  console.log('Connected to: ', tv1.connectedTo);
}
}