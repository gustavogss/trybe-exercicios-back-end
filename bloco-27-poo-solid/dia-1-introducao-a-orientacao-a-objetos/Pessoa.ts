class Pessoa {
    private _name:string;
    private _age:number;
    private _email:string;
    private _profissao:string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get profissao(): string {
        return this._profissao;
    }

    set profissao(value: string) {
        this._profissao = value;
    }

    constructor(name: string, age: number, email: string, profissao: string) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._profissao = profissao;
    }

}