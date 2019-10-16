export class Photo {
  id: string ;
  urlsFull: string;
  owner: string;

  constructor(id: string, urlsFull: string, owner: string) {
    this.id = id;
    this.urlsFull = urlsFull;
    this.owner = owner;
  }
}

