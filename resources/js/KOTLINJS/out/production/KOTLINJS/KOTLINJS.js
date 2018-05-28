if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KOTLINJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KOTLINJS'.");
}
var KOTLINJS = function (_, Kotlin) {
  'use strict';
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var L4 = Kotlin.Long.fromInt(4);
  var L8 = Kotlin.Long.fromInt(8);
  var L1 = Kotlin.Long.ONE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var L2 = Kotlin.Long.fromInt(2);
  var L103000 = Kotlin.Long.fromInt(103000);
  var L132000 = Kotlin.Long.fromInt(132000);
  var L3 = Kotlin.Long.fromInt(3);
  var L5 = Kotlin.Long.fromInt(5);
  var L6 = Kotlin.Long.fromInt(6);
  var L7 = Kotlin.Long.fromInt(7);
  var Pair = Kotlin.kotlin.Pair;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function isServerOnline() {
    return true;
  }
  function doLoginServer(username, password) {
    if (ServerEmulator_getInstance().userList.containsKey_11rb$(username)) {
      return 'dfsdfdsdf';
    }
     else {
      throw Exception_init('Error');
    }
  }
  function doSignUpServer(user) {
    return 'dfsdfdsdf';
  }
  function doDeleteAccountServer(user, sessionToken) {
    return true;
  }
  function doLogoutServer(username, sessionToken) {
  }
  function obtainUserDataServer(username, sessionToken) {
    if (ServerEmulator_getInstance().userList.containsKey_11rb$(username)) {
      return ServerEmulator_getInstance().userList.get_11rb$(username);
    }
     else {
      throw Exception_init('Error');
    }
  }
  function obtainSongsFromUserServer(username) {
    var tmp$;
    var resultado = ArrayList_init();
    tmp$ = ServerEmulator_getInstance().songList.entries.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (equals(i.value.album.creator.username, username)) {
        resultado.add_11rb$(i.value);
      }
    }
    return resultado;
  }
  function obtainPlaylistsFromUserServer(username) {
    var tmp$;
    var resultado = ArrayList_init();
    tmp$ = ServerEmulator_getInstance().playlistList.entries.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (equals(i.value.creator.username, username)) {
        resultado.add_11rb$(i.value);
      }
    }
    return resultado;
  }
  function getFollowedUsersServer(username) {
    if (ServerEmulator_getInstance().artistasSeguidos.containsKey_11rb$(username)) {
      return ensureNotNull(ServerEmulator_getInstance().artistasSeguidos.get_11rb$(username));
    }
     else {
      return ArrayList_init();
    }
  }
  function isUserFollowedByUserServer(username, user) {
    var tmp$;
    if (ServerEmulator_getInstance().artistasSeguidos.containsKey_11rb$(username)) {
      tmp$ = ensureNotNull(ServerEmulator_getInstance().artistasSeguidos.get_11rb$(username)).iterator();
      while (tmp$.hasNext()) {
        var i = tmp$.next();
        if (equals(i.username, user))
          return true;
      }
      return false;
    }
     else {
      return false;
    }
  }
  function getFollowersOfUserServer(username) {
    return ArrayList_init();
  }
  function getNumberOfFollowersOfUserServer(username) {
    return L4;
  }
  function addFollowerToUserServer(username, sessionToken, followed) {
    var seguido = ServerEmulator_getInstance().userList.get_11rb$(followed);
    ensureNotNull(ServerEmulator_getInstance().artistasSeguidos.get_11rb$(username)).add_11rb$(ensureNotNull(seguido));
  }
  function deleteFollowerToUserServer(username, sessionToken, followed) {
    var seguido = ServerEmulator_getInstance().userList.get_11rb$(followed);
    ensureNotNull(ServerEmulator_getInstance().artistasSeguidos.get_11rb$(username)).remove_11rb$(ensureNotNull(seguido));
  }
  function getFollowedPlaylistsServer(username) {
    return ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username));
  }
  function isPlaylistFollowedByUserServer(username, playlist) {
    var tmp$;
    tmp$ = ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username)).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (equals(i.id, playlist))
        return true;
    }
    return false;
  }
  function getFollowersOfPlaylistServer(playlist) {
    return ArrayList_init();
  }
  function getNumberOfFollowersOfPlaylistServer(playlist) {
    return L8;
  }
  function addFollowerToPlaylistServer(username, sessionToken, followed) {
    var seguido = ServerEmulator_getInstance().playlistList.get_11rb$(followed);
    ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username)).add_11rb$(ensureNotNull(seguido));
  }
  function deleteFollowerToPlaylistServer(username, sessionToken, followed) {
    var seguido = ServerEmulator_getInstance().playlistList.get_11rb$(followed);
    ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username)).remove_11rb$(ensureNotNull(seguido));
  }
  function addReproductionToSongServer(username, sessionToken, song) {
  }
  function setSongFavoutireServer(username, sessionToken, song) {
    var seguido = ServerEmulator_getInstance().songList.get_11rb$(song);
    ensureNotNull(ServerEmulator_getInstance().cancionesFavoritas.get_11rb$(username)).add_11rb$(ensureNotNull(seguido));
  }
  function unSetSongFavoutireServer(username, sessionToken, song) {
    var seguido = ServerEmulator_getInstance().songList.get_11rb$(song);
    ensureNotNull(ServerEmulator_getInstance().cancionesFavoritas.get_11rb$(username)).remove_11rb$(ensureNotNull(seguido));
  }
  function isSongFavoutireByUserServer(username, sessionToken, song) {
    var tmp$;
    tmp$ = ensureNotNull(ServerEmulator_getInstance().cancionesFavoritas.get_11rb$(username)).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (equals(i.id, song))
        return true;
    }
    return false;
  }
  function obtainPlaylistDataServer(id) {
    return ServerEmulator_getInstance().playlistList.get_11rb$(id);
  }
  function uploadSongServer(username, sessionToken, song) {
  }
  function obtainFavouriteSongsByUserServer(username, sessionToken) {
    return ServerEmulator_getInstance().songsVarious;
  }
  function obtainRecomendationsForUserServer(username, sessionToken, cantidad) {
    return ServerEmulator_getInstance().recomendaciones.get_11rb$(username);
  }
  function obtainPopularSongsServer(cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainNewSongsFromFollowedArtistOfUserServer(username, sessionToken, cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainTrendSongsServer(cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainTrendSongsInUserCountryServer(username, cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainUpdatedPlaylistsFollowedByUserServer(username, sessionToken, cantidad) {
    return ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username);
  }
  function obtainResultForQueryServer(cantidad, query, tipo) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainPopularByGenreServer(cantidad) {
    return ServerEmulator_getInstance().generos;
  }
  function isOtherSessionOpenFromSameUserServer(username, sessionToken) {
    return false;
  }
  function obtainLastSongListenedServer(username, sessionToken) {
    return ServerEmulator_getInstance().songList.get_11rb$(L1);
  }
  function createPlaylistServer(username, sessionToken, playlist) {
  }
  function deletePlaylistServer(username, sessionToken, playlist) {
  }
  function updatePlaylistServer(username, sessionToken, playlist) {
  }
  function obtainGeneresServer() {
    return ServerEmulator_getInstance().generesList;
  }
  function obtainAlbumsFromUserServer(username) {
    return ServerEmulator_getInstance().albumList;
  }
  function createAlbumsServer(username, sessionToken, album) {
    ServerEmulator_getInstance().albumList.add_11rb$(album);
  }
  function updateAlbumsServer(username, sessionToken, album) {
  }
  function deleteAlbumsServer(username, sessionToken, album) {
  }
  function obtainAlbum() {
    return ServerEmulator_getInstance().albumaux;
  }
  function obtainArtist() {
    return ServerEmulator_getInstance().artistas;
  }
  function obtainAlbumList() {
    return ServerEmulator_getInstance().albumes;
  }
  function obtainPlaylistList() {
    return ServerEmulator_getInstance().songsVarious;
  }
  function obtainAlbumDataServer(id) {
    return ServerEmulator_getInstance().albumList.get_za3lpa$(id);
  }
  function obtainSongDataServer(id) {
    return ServerEmulator_getInstance().songList2.get_za3lpa$(id);
  }
  function isServerOnline2() {
    return true;
  }
  function main(args) {
  }
  function Album(id, name, creator, releaseDate, artLocationUri) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.releaseDate = releaseDate;
    this.artLocationUri = artLocationUri;
  }
  Album.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Album',
    interfaces: []
  };
  function Playlist(id, name, creator, artLocationUri, content) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.artLocationUri = artLocationUri;
    this.content = content;
  }
  Playlist.prototype.getShareLink = function () {
    return 'https://www.google.es/';
  };
  Playlist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Playlist',
    interfaces: [Recommendation]
  };
  function Recommendation() {
  }
  Recommendation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Recommendation',
    interfaces: []
  };
  function Song(id, name, locationUri, duration, album, genere, lyricsPath) {
    this.id = id;
    this.name = name;
    this.locationUri = locationUri;
    this.duration = duration;
    this.album = album;
    this.genere = genere;
    this.lyricsPath = lyricsPath;
  }
  Song.prototype.getShareLink = function () {
    return 'https://www.google.es/';
  };
  Song.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Song',
    interfaces: [Recommendation]
  };
  function User() {
    this.username = null;
    this.name = null;
    this.pictureLocationUri = null;
    this.biography = null;
    this.email = null;
    this.password = null;
    this.birthDate = null;
    this.country = null;
    this.twitterAccount = null;
    this.facebookAccount = null;
    this.instagramAccount = null;
  }
  User.prototype.getTwitterAccountURL = function () {
    return this.twitterAccount != null ? 'https://twitter.com/' + toString(this.twitterAccount) : null;
  };
  User.prototype.getFacebookAccountURL = function () {
    return this.facebookAccount != null ? 'https://www.facebook.com/' + toString(this.facebookAccount) : null;
  };
  User.prototype.getInstagramAccountURL = function () {
    return this.instagramAccount != null ? 'https://www.instagram.com/' + toString(this.instagramAccount) : null;
  };
  User.prototype.getShareLink = function () {
    return 'https://www.google.es/';
  };
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: [Recommendation]
  };
  function User_init(username, password, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this);
    $this.username = username;
    $this.password = password;
    return $this;
  }
  function User_init_0(username, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this);
    $this.username = username;
    return $this;
  }
  function User_init_1(username, name, email, pictureLocationUri, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this);
    $this.username = username;
    $this.name = name;
    $this.email = email;
    $this.pictureLocationUri = pictureLocationUri;
    return $this;
  }
  function ServerEmulator() {
    ServerEmulator_instance = this;
    this.songList = HashMap_init();
    this.userList = HashMap_init();
    this.playlistList = HashMap_init();
    this.generesList = ArrayList_init();
    this.albumList = ArrayList_init();
    this.albumaux = ArrayList_init();
    this.artistas = ArrayList_init();
    this.albumes = ArrayList_init();
    this.songsVarious = ArrayList_init();
    this.songList2 = ArrayList_init();
    this.cancionesFavoritas = HashMap_init();
    this.artistasSeguidos = HashMap_init();
    this.playlistSeguidos = HashMap_init();
    this.recomendaciones = HashMap_init();
    this.trends = ArrayList_init();
    this.generos = ArrayList_init();
    var autor1 = User_init_1('Kendrick', 'kendrick', 'Right', '/resources/imgs/albumkendr.jpg');
    autor1.twitterAccount = 'https://twitter.com/kendricklamar?lang=es';
    autor1.facebookAccount = 'https://es-la.facebook.com/kendricklamar/';
    autor1.instagramAccount = 'https://www.instagram.com/kendricklamar/?hl=es';
    var autor2 = User_init_1('Silent', 'Silent', 'Partner', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var autor3 = User_init_1('abelcht', 'Abel ChT', 'Lion', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var autor4 = User_init_1('Prueba', 'PRU', 'sdfdsfd', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var album1 = new Album(L1, 'Jazz', autor1, new Date(2018, 3, 22), 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var album2 = new Album(L2, 'Blues', autor2, new Date(2017, 6, 27), 'http://storage.googleapis.com/automotive-media/album_art_2.jpg');
    var cancion1 = new Song(L1, 'Jazz in Paris', 'http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3', L103000, album1, null, null);
    var cancion2 = new Song(L2, 'The Messenger', 'http://storage.googleapis.com/automotive-media/The_Messenger.mp3', L132000, album2, null, null);
    var album3 = new Album(L3, 'good kid, m.A.A.d city', autor1, new Date(2018, 3, 22), 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/70/95/78/7095785b-ddae-fa56-cd1e-b263345e2e3b/UMG_cvrart_00602537362769_01_RGB72_1426x1426_12UMGIM52990.jpg/268x0w.jpg');
    var album4 = new Album(L4, 'Enter the 36 chamber', autor1, new Date(2018, 3, 22), '/resources/imgs/wu.jpg');
    var album5 = new Album(L5, 'Beerbongs & Bentleys', autor1, new Date(2018, 3, 22), '/resources/imgs/albumpost.jpg');
    var cancion3 = new Song(L3, '4 AM', '/resources/music/4AM.mp3', L132000, album3, null, '/resources/example.srt');
    var cancion4 = new Song(L4, 'Sherane a.k.a Master Splinter\u2019s Daughter', '/resources/music/4AM.mp3', L132000, album3, null, '/resources/example.srt');
    var cancion5 = new Song(L5, "Bitch, Don't Kill My Vibe", '/resources/music/4AM.mp3', L132000, album3, null, '/resources/example.srt');
    var cancion6 = new Song(L6, 'Backseat Freestyle', '/resources/music/4AM.mp3', L132000, album3, null, '/resources/example.srt');
    var cancion7 = new Song(L7, 'The Art of Peer Pressure', '/resources/music/4AM.mp3', L132000, album3, null, '/resources/example.srt');
    this.songList2.add_11rb$(cancion1);
    this.songList2.add_11rb$(cancion2);
    this.songList2.add_11rb$(cancion3);
    this.songList2.add_11rb$(cancion4);
    this.songList2.add_11rb$(cancion5);
    this.songList2.add_11rb$(cancion6);
    this.songList2.add_11rb$(cancion7);
    this.albumaux.add_11rb$(cancion3);
    this.albumaux.add_11rb$(cancion4);
    this.albumaux.add_11rb$(cancion5);
    this.albumaux.add_11rb$(cancion6);
    this.albumaux.add_11rb$(cancion7);
    this.albumes.add_11rb$(album3);
    this.albumes.add_11rb$(album4);
    this.albumes.add_11rb$(album5);
    this.artistas.add_11rb$(autor1);
    this.artistas.add_11rb$(autor2);
    this.artistas.add_11rb$(autor3);
    this.artistas.add_11rb$(autor4);
    this.songsVarious.add_11rb$(cancion3);
    this.songsVarious.add_11rb$(cancion1);
    this.songsVarious.add_11rb$(cancion5);
    this.songsVarious.add_11rb$(cancion2);
    this.songsVarious.add_11rb$(cancion6);
    this.albumList.add_11rb$(album1);
    this.albumList.add_11rb$(album2);
    this.albumList.add_11rb$(album3);
    this.albumList.add_11rb$(album4);
    this.albumList.add_11rb$(album5);
    var list1 = ArrayList_init();
    list1.add_11rb$(cancion1);
    list1.add_11rb$(cancion2);
    var list2 = ArrayList_init();
    list2.add_11rb$(cancion1);
    var playlist1 = new Playlist(L1, 'dfsdfdsfd', autor1, 'http://storage.googleapis.com/automotive-media/album_art_2.jpg', list1);
    var playlist2 = new Playlist(L2, 'dfsdfdsfd', autor1, 'http://storage.googleapis.com/automotive-media/album_art_2.jpg', list2);
    var $receiver = this.userList;
    var key = ensureNotNull(autor1.username);
    $receiver.put_xwzc9p$(key, autor1);
    var $receiver_0 = this.userList;
    var key_0 = ensureNotNull(autor2.username);
    $receiver_0.put_xwzc9p$(key_0, autor2);
    var $receiver_1 = this.userList;
    var key_1 = ensureNotNull(autor3.username);
    $receiver_1.put_xwzc9p$(key_1, autor3);
    var $receiver_2 = this.songList;
    var key_2 = cancion1.id;
    $receiver_2.put_xwzc9p$(key_2, cancion1);
    var $receiver_3 = this.songList;
    var key_3 = cancion2.id;
    $receiver_3.put_xwzc9p$(key_3, cancion2);
    var $receiver_4 = this.playlistList;
    var key_4 = playlist1.id;
    $receiver_4.put_xwzc9p$(key_4, playlist1);
    var $receiver_5 = this.playlistList;
    var key_5 = playlist2.id;
    $receiver_5.put_xwzc9p$(key_5, playlist2);
    var $receiver_6 = this.artistasSeguidos;
    var key_6 = ensureNotNull(autor3.username);
    var value = ArrayList_init();
    $receiver_6.put_xwzc9p$(key_6, value);
    ensureNotNull(this.artistasSeguidos.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(autor1);
    ensureNotNull(this.artistasSeguidos.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(autor2);
    ensureNotNull(this.artistasSeguidos.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(autor3);
    var $receiver_7 = this.cancionesFavoritas;
    var key_7 = ensureNotNull(autor3.username);
    var value_0 = ArrayList_init();
    $receiver_7.put_xwzc9p$(key_7, value_0);
    ensureNotNull(this.cancionesFavoritas.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(cancion1);
    ensureNotNull(this.cancionesFavoritas.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(cancion2);
    var $receiver_8 = this.playlistSeguidos;
    var key_8 = ensureNotNull(autor3.username);
    var value_1 = ArrayList_init();
    $receiver_8.put_xwzc9p$(key_8, value_1);
    ensureNotNull(this.playlistSeguidos.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(playlist1);
    ensureNotNull(this.playlistSeguidos.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(playlist2);
    var $receiver_9 = this.recomendaciones;
    var key_9 = ensureNotNull(autor3.username);
    var value_2 = ArrayList_init();
    $receiver_9.put_xwzc9p$(key_9, value_2);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(playlist1);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(playlist2);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(autor2);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(autor1);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(cancion1);
    ensureNotNull(this.recomendaciones.get_11rb$(ensureNotNull(autor3.username))).add_11rb$(cancion2);
    this.trends.add_11rb$(cancion1);
    this.trends.add_11rb$(cancion2);
    this.generos.add_11rb$(new Pair('Rock', this.trends));
    this.generesList.add_11rb$('Rock');
    this.generesList.add_11rb$('Rap');
    this.generesList.add_11rb$('Trap');
  }
  ServerEmulator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ServerEmulator',
    interfaces: []
  };
  var ServerEmulator_instance = null;
  function ServerEmulator_getInstance() {
    if (ServerEmulator_instance === null) {
      new ServerEmulator();
    }
    return ServerEmulator_instance;
  }
  var package$apis = _.apis || (_.apis = {});
  package$apis.isServerOnline = isServerOnline;
  package$apis.doLoginServer_puj7f4$ = doLoginServer;
  package$apis.doSignUpServer_m5kwz3$ = doSignUpServer;
  package$apis.doDeleteAccountServer_puj7f4$ = doDeleteAccountServer;
  package$apis.doLogoutServer_puj7f4$ = doLogoutServer;
  package$apis.obtainUserDataServer_jyasbz$ = obtainUserDataServer;
  package$apis.obtainSongsFromUserServer_61zpoe$ = obtainSongsFromUserServer;
  package$apis.obtainPlaylistsFromUserServer_61zpoe$ = obtainPlaylistsFromUserServer;
  package$apis.getFollowedUsersServer_61zpoe$ = getFollowedUsersServer;
  package$apis.isUserFollowedByUserServer_puj7f4$ = isUserFollowedByUserServer;
  package$apis.getFollowersOfUserServer_61zpoe$ = getFollowersOfUserServer;
  package$apis.getNumberOfFollowersOfUserServer_61zpoe$ = getNumberOfFollowersOfUserServer;
  package$apis.addFollowerToUserServer_6hosri$ = addFollowerToUserServer;
  package$apis.deleteFollowerToUserServer_6hosri$ = deleteFollowerToUserServer;
  package$apis.getFollowedPlaylistsServer_61zpoe$ = getFollowedPlaylistsServer;
  package$apis.isPlaylistFollowedByUserServer_4wgjuj$ = isPlaylistFollowedByUserServer;
  package$apis.getFollowersOfPlaylistServer_s8cxhz$ = getFollowersOfPlaylistServer;
  package$apis.getNumberOfFollowersOfPlaylistServer_s8cxhz$ = getNumberOfFollowersOfPlaylistServer;
  package$apis.addFollowerToPlaylistServer_18v4st$ = addFollowerToPlaylistServer;
  package$apis.deleteFollowerToPlaylistServer_18v4st$ = deleteFollowerToPlaylistServer;
  package$apis.addReproductionToSongServer_pc3zk9$ = addReproductionToSongServer;
  package$apis.setSongFavoutireServer_18v4st$ = setSongFavoutireServer;
  package$apis.unSetSongFavoutireServer_18v4st$ = unSetSongFavoutireServer;
  package$apis.isSongFavoutireByUserServer_18v4st$ = isSongFavoutireByUserServer;
  package$apis.obtainPlaylistDataServer_s8cxhz$ = obtainPlaylistDataServer;
  package$apis.uploadSongServer_jecffn$ = uploadSongServer;
  package$apis.obtainFavouriteSongsByUserServer_puj7f4$ = obtainFavouriteSongsByUserServer;
  package$apis.obtainRecomendationsForUserServer_18v4st$ = obtainRecomendationsForUserServer;
  package$apis.obtainPopularSongsServer_s8cxhz$ = obtainPopularSongsServer;
  package$apis.obtainNewSongsFromFollowedArtistOfUserServer_18v4st$ = obtainNewSongsFromFollowedArtistOfUserServer;
  package$apis.obtainTrendSongsServer_s8cxhz$ = obtainTrendSongsServer;
  package$apis.obtainTrendSongsInUserCountryServer_4wgjuj$ = obtainTrendSongsInUserCountryServer;
  package$apis.obtainUpdatedPlaylistsFollowedByUserServer_18v4st$ = obtainUpdatedPlaylistsFollowedByUserServer;
  package$apis.obtainResultForQueryServer_4k4yms$ = obtainResultForQueryServer;
  package$apis.obtainPopularByGenreServer_s8cxhz$ = obtainPopularByGenreServer;
  package$apis.isOtherSessionOpenFromSameUserServer_puj7f4$ = isOtherSessionOpenFromSameUserServer;
  package$apis.obtainLastSongListenedServer_puj7f4$ = obtainLastSongListenedServer;
  package$apis.createPlaylistServer_l2qie2$ = createPlaylistServer;
  package$apis.deletePlaylistServer_l2qie2$ = deletePlaylistServer;
  package$apis.updatePlaylistServer_l2qie2$ = updatePlaylistServer;
  package$apis.obtainGeneresServer = obtainGeneresServer;
  package$apis.obtainAlbumsFromUserServer_61zpoe$ = obtainAlbumsFromUserServer;
  package$apis.createAlbumsServer_xdras9$ = createAlbumsServer;
  package$apis.updateAlbumsServer_xdras9$ = updateAlbumsServer;
  package$apis.deleteAlbumsServer_xdras9$ = deleteAlbumsServer;
  package$apis.obtainAlbum = obtainAlbum;
  package$apis.obtainArtist = obtainArtist;
  package$apis.obtainAlbumList = obtainAlbumList;
  package$apis.obtainPlaylistList = obtainPlaylistList;
  package$apis.obtainAlbumDataServer_za3lpa$ = obtainAlbumDataServer;
  package$apis.obtainSongDataServer_za3lpa$ = obtainSongDataServer;
  package$apis.isServerOnline2 = isServerOnline2;
  var package$controller = _.controller || (_.controller = {});
  package$controller.main_kand9s$ = main;
  var package$models = _.models || (_.models = {});
  package$models.Album = Album;
  package$models.Playlist = Playlist;
  package$models.Recommendation = Recommendation;
  package$models.Song = Song;
  package$models.User_init_puj7f4$ = User_init;
  package$models.User_init_61zpoe$ = User_init_0;
  package$models.User_init_w74nik$ = User_init_1;
  package$models.User = User;
  var package$test = _.test || (_.test = {});
  Object.defineProperty(package$test, 'ServerEmulator', {
    get: ServerEmulator_getInstance
  });
  main([]);
  Kotlin.defineModule('KOTLINJS', _);
  return _;
}(typeof KOTLINJS === 'undefined' ? {} : KOTLINJS, kotlin);

//# sourceMappingURL=KOTLINJS.js.map
