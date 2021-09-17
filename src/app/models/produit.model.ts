export class Produit {
  private _id: string;
  private _titre: string;
  private _marque: string;
  private _description: string;
  private _prixHT: number;
  private _tva: number;
  private _actif: boolean;


  constructor(id: string, titre: string, marque: string, description: string, prixHT: number, tva: number, actif: boolean) {
    this._id = id;
    this._titre = titre;
    this._marque = marque;
    this._description = description;
    this._prixHT = prixHT;
    this._tva = tva;
    this._actif = actif;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get marque(): string {
    return this._marque;
  }

  set marque(value: string) {
    this._marque = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get prixHT(): number {
    return this._prixHT;
  }

  set prixHT(value: number) {
    this._prixHT = value;
  }

  get tva(): number {
    return this._tva;
  }

  set tva(value: number) {
    this._tva = value;
  }

  get actif(): boolean {
    return this._actif;
  }

  set actif(value: boolean) {
    this._actif = value;
  }
}
