class Pessoa {
  private _nome: string;
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  private idade: number;
  private email: string;
}