export class User {

  private _id: string;
  private _genre: string;
  private _nom: string;
  private _prenom: string;
  private _email: string;
  private _dateDeNaissance: Date;
  private _adresse: string;
  private _adresseDeLivraison: string;
  private _dateInscription: Date;


  constructor(id: string, genre: string, nom: string, prenom: string, email: string, dateDeNaissance: Date, adresse: string, adresseDeLivraison: string, dateInscription: Date) {
    this._id = id;
    this._genre = genre;
    this._nom = nom;
    this._prenom = prenom;
    this._email = email;
    this._dateDeNaissance = dateDeNaissance;
    this._adresse = adresse;
    this._adresseDeLivraison = adresseDeLivraison;
    this._dateInscription = dateInscription;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(value: string) {
    this._genre = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get dateDeNaissance(): Date {
    return this._dateDeNaissance;
  }

  set dateDeNaissance(value: Date) {
    this._dateDeNaissance = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get adresseDeLivraison(): string {
    return this._adresseDeLivraison;
  }

  set adresseDeLivraison(value: string) {
    this._adresseDeLivraison = value;
  }

  get dateInscription(): Date {
    return this._dateInscription;
  }

  set dateInscription(value: Date) {
    this._dateInscription = value;
  }
}
