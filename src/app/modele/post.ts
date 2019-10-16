export class Post {

  public static fromJson(json: object): Post {
    return new Post(
      json['id'],
      json['created'],
      json['mediaId'],
      json['user']['username'],
      json['likes'],
      json['title'],
      json['description']
    );
  }

  constructor(public id: string,
              public created: string,
              public mediaId: string,
              public username: string,
              public likes: string,
              public title: string,
              public description: string){}
}
