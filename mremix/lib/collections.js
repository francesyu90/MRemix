Tracks = new Mongo.Collection("tracks");
TracksIndex = new EasySearch.Index({
    collection: Tracks,
    fields: ['musicName'],
    engine: new EasySearch.Minimongo()
  });