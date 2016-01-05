MusicUrls = new Mongo.Collection("musicurls");
MusicUrlsIndex = new EasySearch.Index({
    collection: MusicUrls,
    fields: ['musicName'],
    engine: new EasySearch.Minimongo()
  });