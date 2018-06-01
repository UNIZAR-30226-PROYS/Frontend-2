if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KOTLINJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KOTLINJS'.");
}
var KOTLINJS = function (_, Kotlin) {
  'use strict';
  var String_0 = String;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_se6h4x$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var L0 = Kotlin.Long.ZERO;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Exception = Kotlin.kotlin.Exception;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var L_1 = Kotlin.Long.NEG_ONE;
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Exception_init_0 = Kotlin.kotlin.Exception_init_dbl4no$;
  var L1 = Kotlin.Long.ONE;
  var L30 = Kotlin.Long.fromInt(30);
  var L20 = Kotlin.Long.fromInt(20);
  function createForm(mapa) {
    var tmp$, tmp$_0;
    var result = new String_0();
    tmp$ = mapa.entries.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      println(i);
      if (i.value != null) {
        if (result.length === 0) {
          tmp$_0 = i.key + '=' + toString(i.value);
        }
         else {
          var $receiver = result;
          var str = '&' + i.key + '=' + toString(i.value);
          tmp$_0 = $receiver.concat(str);
        }
        result = tmp$_0;
      }
    }
    return result;
  }
  var server;
  var dataServerAdress;
  var songLocationUploadPrefix;
  var songLyricsUploadPrefix;
  var userUploadPrefix;
  var albumUploadPrefix;
  var playlistUploadPrefix;
  function getSongLyricsPath(songId) {
    return dataServerAdress + '/' + songLyricsUploadPrefix + songId;
  }
  function getSongLocationPath(songId) {
    return dataServerAdress + '/' + songLocationUploadPrefix + songId;
  }
  function getUserProfilePicturePath(username) {
    return dataServerAdress + '/' + userUploadPrefix + username;
  }
  function getPlaylistCoverPath(playlistId) {
    return dataServerAdress + '/' + playlistUploadPrefix + playlistId;
  }
  function getAlbumCoverPath(albumId) {
    return dataServerAdress + '/' + albumUploadPrefix + albumId;
  }
  var s3;
  function deleteSongLyrics(songId) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return DeleteFile(ensureNotNull(s3), songLyricsUploadPrefix + songId);
  }
  function deleteSongLocation(songId) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return DeleteFile(ensureNotNull(s3), songLyricsUploadPrefix + songId);
  }
  function deleteUserProfilePicture(username) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return DeleteFile(ensureNotNull(s3), userUploadPrefix + username);
  }
  function deletePlaylistCover(playlistId) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return DeleteFile(ensureNotNull(s3), playlistUploadPrefix + playlistId);
  }
  function deleteAlbumCover(albumId) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return DeleteFile(ensureNotNull(s3), albumUploadPrefix + albumId);
  }
  function uploadSongLyrics(songId, filePath) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return UploadFile(ensureNotNull(s3), filePath, songLyricsUploadPrefix + songId);
  }
  function uploadSongLocation(songId, filePath) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return UploadFile(ensureNotNull(s3), filePath, songLocationUploadPrefix + songId);
  }
  function uploadUserProfilePicture(username, filePath) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return UploadFile(ensureNotNull(s3), filePath, userUploadPrefix + username);
  }
  function uploadPlaylistCover(playlistId, filePath) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return UploadFile(ensureNotNull(s3), filePath, playlistUploadPrefix + playlistId);
  }
  function uploadAlbumCover(albumId, filePath) {
    if (s3 == null) {
      s3 = s3Connection();
    }
    return UploadFile(ensureNotNull(s3), filePath, albumUploadPrefix + albumId);
  }
  function obtainAlbumFromID$AlbumData(publish_year, image, update_time, user_id, id, title, songs) {
    this.publish_year = publish_year;
    this.image = image;
    this.update_time = update_time;
    this.user_id = user_id;
    this.id = id;
    this.title = title;
    this.songs = songs;
  }
  obtainAlbumFromID$AlbumData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlbumData',
    interfaces: []
  };
  obtainAlbumFromID$AlbumData.prototype.component1 = function () {
    return this.publish_year;
  };
  obtainAlbumFromID$AlbumData.prototype.component2 = function () {
    return this.image;
  };
  obtainAlbumFromID$AlbumData.prototype.component3 = function () {
    return this.update_time;
  };
  obtainAlbumFromID$AlbumData.prototype.component4 = function () {
    return this.user_id;
  };
  obtainAlbumFromID$AlbumData.prototype.component5 = function () {
    return this.id;
  };
  obtainAlbumFromID$AlbumData.prototype.component6 = function () {
    return this.title;
  };
  obtainAlbumFromID$AlbumData.prototype.component7 = function () {
    return this.songs;
  };
  obtainAlbumFromID$AlbumData.prototype.copy_60uzen$ = function (publish_year, image, update_time, user_id, id, title, songs) {
    return new obtainAlbumFromID$AlbumData(publish_year === void 0 ? this.publish_year : publish_year, image === void 0 ? this.image : image, update_time === void 0 ? this.update_time : update_time, user_id === void 0 ? this.user_id : user_id, id === void 0 ? this.id : id, title === void 0 ? this.title : title, songs === void 0 ? this.songs : songs);
  };
  obtainAlbumFromID$AlbumData.prototype.toString = function () {
    return 'AlbumData(publish_year=' + Kotlin.toString(this.publish_year) + (', image=' + Kotlin.toString(this.image)) + (', update_time=' + Kotlin.toString(this.update_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', songs=' + Kotlin.toString(this.songs)) + ')';
  };
  obtainAlbumFromID$AlbumData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.publish_year) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.update_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    return result;
  };
  obtainAlbumFromID$AlbumData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.publish_year, other.publish_year) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.update_time, other.update_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.songs, other.songs)))));
  };
  function obtainAlbumFromID$Data(album, error) {
    this.album = album;
    this.error = error;
  }
  obtainAlbumFromID$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainAlbumFromID$Data.prototype.component1 = function () {
    return this.album;
  };
  obtainAlbumFromID$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainAlbumFromID$Data.prototype.copy_dhfj3d$ = function (album, error) {
    return new obtainAlbumFromID$Data(album === void 0 ? this.album : album, error === void 0 ? this.error : error);
  };
  obtainAlbumFromID$Data.prototype.toString = function () {
    return 'Data(album=' + Kotlin.toString(this.album) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainAlbumFromID$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.album) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainAlbumFromID$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.album, other.album) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainAlbumFromID(id) {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/albums/' + id, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        var songs = ArrayList_init();
        tmp$ = toList(json.album.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i, false);
          if (song != null) {
            songs.add_11rb$(song);
          }
        }
        var album = new Album(json.album.id, json.album.title, ensureNotNull(obtainUserDataServerFromID_0(json.album.user_id, null)), new Date(), getAlbumCoverPath(json.album.id), songs);
        tmp$_0 = songs.iterator();
        while (tmp$_0.hasNext()) {
          var i_0 = tmp$_0.next();
          i_0.album = album;
        }
        return album;
      }
       else {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function obtainSongFromID$DataSong(country, upload_time, id, album_id, title, user_id) {
    this.country = country;
    this.upload_time = upload_time;
    this.id = id;
    this.album_id = album_id;
    this.title = title;
    this.user_id = user_id;
  }
  obtainSongFromID$DataSong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSong',
    interfaces: []
  };
  obtainSongFromID$DataSong.prototype.component1 = function () {
    return this.country;
  };
  obtainSongFromID$DataSong.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainSongFromID$DataSong.prototype.component3 = function () {
    return this.id;
  };
  obtainSongFromID$DataSong.prototype.component4 = function () {
    return this.album_id;
  };
  obtainSongFromID$DataSong.prototype.component5 = function () {
    return this.title;
  };
  obtainSongFromID$DataSong.prototype.component6 = function () {
    return this.user_id;
  };
  obtainSongFromID$DataSong.prototype.copy_qm98u4$ = function (country, upload_time, id, album_id, title, user_id) {
    return new obtainSongFromID$DataSong(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, id === void 0 ? this.id : id, album_id === void 0 ? this.album_id : album_id, title === void 0 ? this.title : title, user_id === void 0 ? this.user_id : user_id);
  };
  obtainSongFromID$DataSong.prototype.toString = function () {
    return 'DataSong(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', id=' + Kotlin.toString(this.id)) + (', album_id=' + Kotlin.toString(this.album_id)) + (', title=' + Kotlin.toString(this.title)) + (', user_id=' + Kotlin.toString(this.user_id)) + ')';
  };
  obtainSongFromID$DataSong.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.album_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    return result;
  };
  obtainSongFromID$DataSong.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.album_id, other.album_id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.user_id, other.user_id)))));
  };
  function obtainSongFromID$Data(song, error) {
    this.song = song;
    this.error = error;
  }
  obtainSongFromID$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainSongFromID$Data.prototype.component1 = function () {
    return this.song;
  };
  obtainSongFromID$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainSongFromID$Data.prototype.copy_b2ws23$ = function (song, error) {
    return new obtainSongFromID$Data(song === void 0 ? this.song : song, error === void 0 ? this.error : error);
  };
  obtainSongFromID$Data.prototype.toString = function () {
    return 'Data(song=' + Kotlin.toString(this.song) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainSongFromID$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.song) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainSongFromID$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.song, other.song) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainSongFromID(id, album) {
    if (album === void 0)
      album = true;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/' + id, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        if (album) {
          return new Song(json.song.id, json.song.title, json.song.country, getSongLocationPath(json.song.id), L0, obtainAlbumFromID(json.song.album_id), '', getSongLyricsPath(json.song.id));
        }
         else {
          return new Song(json.song.id, json.song.title, json.song.country, getSongLocationPath(json.song.id), L0, null, '', getSongLyricsPath(json.song.id));
        }
      }
       else {
        Exception_init(json.error);
      }
    }
    return null;
  }
  function obtainUserDataServerFromID(userID) {
    return obtainUserDataServerFromID_0(userID, null);
  }
  function obtainUserDataServerFromID$UserData(nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram, admin) {
    this.nick = nick;
    this.mail_visible = mail_visible;
    this.country = country;
    this.mail = mail;
    this.birth_date = birth_date;
    this.verified = verified;
    this.bio = bio;
    this.register_date = register_date;
    this.id = id;
    this.user = user;
    this.facebook = facebook;
    this.twitter = twitter;
    this.intragram = intragram;
    this.admin = admin;
  }
  obtainUserDataServerFromID$UserData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserData',
    interfaces: []
  };
  obtainUserDataServerFromID$UserData.prototype.component1 = function () {
    return this.nick;
  };
  obtainUserDataServerFromID$UserData.prototype.component2 = function () {
    return this.mail_visible;
  };
  obtainUserDataServerFromID$UserData.prototype.component3 = function () {
    return this.country;
  };
  obtainUserDataServerFromID$UserData.prototype.component4 = function () {
    return this.mail;
  };
  obtainUserDataServerFromID$UserData.prototype.component5 = function () {
    return this.birth_date;
  };
  obtainUserDataServerFromID$UserData.prototype.component6 = function () {
    return this.verified;
  };
  obtainUserDataServerFromID$UserData.prototype.component7 = function () {
    return this.bio;
  };
  obtainUserDataServerFromID$UserData.prototype.component8 = function () {
    return this.register_date;
  };
  obtainUserDataServerFromID$UserData.prototype.component9 = function () {
    return this.id;
  };
  obtainUserDataServerFromID$UserData.prototype.component10 = function () {
    return this.user;
  };
  obtainUserDataServerFromID$UserData.prototype.component11 = function () {
    return this.facebook;
  };
  obtainUserDataServerFromID$UserData.prototype.component12 = function () {
    return this.twitter;
  };
  obtainUserDataServerFromID$UserData.prototype.component13 = function () {
    return this.intragram;
  };
  obtainUserDataServerFromID$UserData.prototype.component14 = function () {
    return this.admin;
  };
  obtainUserDataServerFromID$UserData.prototype.copy_dv3o1p$ = function (nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram, admin) {
    return new obtainUserDataServerFromID$UserData(nick === void 0 ? this.nick : nick, mail_visible === void 0 ? this.mail_visible : mail_visible, country === void 0 ? this.country : country, mail === void 0 ? this.mail : mail, birth_date === void 0 ? this.birth_date : birth_date, verified === void 0 ? this.verified : verified, bio === void 0 ? this.bio : bio, register_date === void 0 ? this.register_date : register_date, id === void 0 ? this.id : id, user === void 0 ? this.user : user, facebook === void 0 ? this.facebook : facebook, twitter === void 0 ? this.twitter : twitter, intragram === void 0 ? this.intragram : intragram, admin === void 0 ? this.admin : admin);
  };
  obtainUserDataServerFromID$UserData.prototype.toString = function () {
    return 'UserData(nick=' + Kotlin.toString(this.nick) + (', mail_visible=' + Kotlin.toString(this.mail_visible)) + (', country=' + Kotlin.toString(this.country)) + (', mail=' + Kotlin.toString(this.mail)) + (', birth_date=' + Kotlin.toString(this.birth_date)) + (', verified=' + Kotlin.toString(this.verified)) + (', bio=' + Kotlin.toString(this.bio)) + (', register_date=' + Kotlin.toString(this.register_date)) + (', id=' + Kotlin.toString(this.id)) + (', user=' + Kotlin.toString(this.user)) + (', facebook=' + Kotlin.toString(this.facebook)) + (', twitter=' + Kotlin.toString(this.twitter)) + (', intragram=' + Kotlin.toString(this.intragram)) + (', admin=' + Kotlin.toString(this.admin)) + ')';
  };
  obtainUserDataServerFromID$UserData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nick) | 0;
    result = result * 31 + Kotlin.hashCode(this.mail_visible) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.mail) | 0;
    result = result * 31 + Kotlin.hashCode(this.birth_date) | 0;
    result = result * 31 + Kotlin.hashCode(this.verified) | 0;
    result = result * 31 + Kotlin.hashCode(this.bio) | 0;
    result = result * 31 + Kotlin.hashCode(this.register_date) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.facebook) | 0;
    result = result * 31 + Kotlin.hashCode(this.twitter) | 0;
    result = result * 31 + Kotlin.hashCode(this.intragram) | 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    return result;
  };
  obtainUserDataServerFromID$UserData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nick, other.nick) && Kotlin.equals(this.mail_visible, other.mail_visible) && Kotlin.equals(this.country, other.country) && Kotlin.equals(this.mail, other.mail) && Kotlin.equals(this.birth_date, other.birth_date) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.bio, other.bio) && Kotlin.equals(this.register_date, other.register_date) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.facebook, other.facebook) && Kotlin.equals(this.twitter, other.twitter) && Kotlin.equals(this.intragram, other.intragram) && Kotlin.equals(this.admin, other.admin)))));
  };
  function obtainUserDataServerFromID$Data(profile, error) {
    this.profile = profile;
    this.error = error;
  }
  obtainUserDataServerFromID$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainUserDataServerFromID$Data.prototype.component1 = function () {
    return this.profile;
  };
  obtainUserDataServerFromID$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainUserDataServerFromID$Data.prototype.copy_pz0wgr$ = function (profile, error) {
    return new obtainUserDataServerFromID$Data(profile === void 0 ? this.profile : profile, error === void 0 ? this.error : error);
  };
  obtainUserDataServerFromID$Data.prototype.toString = function () {
    return 'Data(profile=' + Kotlin.toString(this.profile) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainUserDataServerFromID$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.profile) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainUserDataServerFromID$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.profile, other.profile) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainUserDataServerFromID_0(userID, sessionToken) {
    if (sessionToken === void 0)
      sessionToken = null;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + userID + '/id', false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      var userDate = null;
      if (!equals(json.profile.birth_date.toString(), '-1')) {
        var date = split(json.profile.birth_date, Kotlin.charArrayOf(45));
        userDate = new Date(toInt(date.get_za3lpa$(0)), toInt(date.get_za3lpa$(1)), toInt(date.get_za3lpa$(2)));
      }
      var user = User_init_1(json.profile.nick, json.profile.user, getUserProfilePicturePath(json.profile.bio), json.profile.verified, ensureNotNull(json.profile.mail), json.profile.bio, userDate);
      user.country = json.profile.country;
      user.facebookAccount = json.profile.facebook;
      user.twitterAccount = json.profile.twitter;
      user.instagramAccount = json.profile.intragram;
      user.admin = json.profile.admin;
      return user;
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function obtainUserDataServer(username) {
    return obtainUserDataServer_0(username, null);
  }
  function obtainUserDataServer$UserData(nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram, admin) {
    this.nick = nick;
    this.mail_visible = mail_visible;
    this.country = country;
    this.mail = mail;
    this.birth_date = birth_date;
    this.verified = verified;
    this.bio = bio;
    this.register_date = register_date;
    this.id = id;
    this.user = user;
    this.facebook = facebook;
    this.twitter = twitter;
    this.intragram = intragram;
    this.admin = admin;
  }
  obtainUserDataServer$UserData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserData',
    interfaces: []
  };
  obtainUserDataServer$UserData.prototype.component1 = function () {
    return this.nick;
  };
  obtainUserDataServer$UserData.prototype.component2 = function () {
    return this.mail_visible;
  };
  obtainUserDataServer$UserData.prototype.component3 = function () {
    return this.country;
  };
  obtainUserDataServer$UserData.prototype.component4 = function () {
    return this.mail;
  };
  obtainUserDataServer$UserData.prototype.component5 = function () {
    return this.birth_date;
  };
  obtainUserDataServer$UserData.prototype.component6 = function () {
    return this.verified;
  };
  obtainUserDataServer$UserData.prototype.component7 = function () {
    return this.bio;
  };
  obtainUserDataServer$UserData.prototype.component8 = function () {
    return this.register_date;
  };
  obtainUserDataServer$UserData.prototype.component9 = function () {
    return this.id;
  };
  obtainUserDataServer$UserData.prototype.component10 = function () {
    return this.user;
  };
  obtainUserDataServer$UserData.prototype.component11 = function () {
    return this.facebook;
  };
  obtainUserDataServer$UserData.prototype.component12 = function () {
    return this.twitter;
  };
  obtainUserDataServer$UserData.prototype.component13 = function () {
    return this.intragram;
  };
  obtainUserDataServer$UserData.prototype.component14 = function () {
    return this.admin;
  };
  obtainUserDataServer$UserData.prototype.copy_dv3o1p$ = function (nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram, admin) {
    return new obtainUserDataServer$UserData(nick === void 0 ? this.nick : nick, mail_visible === void 0 ? this.mail_visible : mail_visible, country === void 0 ? this.country : country, mail === void 0 ? this.mail : mail, birth_date === void 0 ? this.birth_date : birth_date, verified === void 0 ? this.verified : verified, bio === void 0 ? this.bio : bio, register_date === void 0 ? this.register_date : register_date, id === void 0 ? this.id : id, user === void 0 ? this.user : user, facebook === void 0 ? this.facebook : facebook, twitter === void 0 ? this.twitter : twitter, intragram === void 0 ? this.intragram : intragram, admin === void 0 ? this.admin : admin);
  };
  obtainUserDataServer$UserData.prototype.toString = function () {
    return 'UserData(nick=' + Kotlin.toString(this.nick) + (', mail_visible=' + Kotlin.toString(this.mail_visible)) + (', country=' + Kotlin.toString(this.country)) + (', mail=' + Kotlin.toString(this.mail)) + (', birth_date=' + Kotlin.toString(this.birth_date)) + (', verified=' + Kotlin.toString(this.verified)) + (', bio=' + Kotlin.toString(this.bio)) + (', register_date=' + Kotlin.toString(this.register_date)) + (', id=' + Kotlin.toString(this.id)) + (', user=' + Kotlin.toString(this.user)) + (', facebook=' + Kotlin.toString(this.facebook)) + (', twitter=' + Kotlin.toString(this.twitter)) + (', intragram=' + Kotlin.toString(this.intragram)) + (', admin=' + Kotlin.toString(this.admin)) + ')';
  };
  obtainUserDataServer$UserData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.nick) | 0;
    result = result * 31 + Kotlin.hashCode(this.mail_visible) | 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.mail) | 0;
    result = result * 31 + Kotlin.hashCode(this.birth_date) | 0;
    result = result * 31 + Kotlin.hashCode(this.verified) | 0;
    result = result * 31 + Kotlin.hashCode(this.bio) | 0;
    result = result * 31 + Kotlin.hashCode(this.register_date) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.facebook) | 0;
    result = result * 31 + Kotlin.hashCode(this.twitter) | 0;
    result = result * 31 + Kotlin.hashCode(this.intragram) | 0;
    result = result * 31 + Kotlin.hashCode(this.admin) | 0;
    return result;
  };
  obtainUserDataServer$UserData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nick, other.nick) && Kotlin.equals(this.mail_visible, other.mail_visible) && Kotlin.equals(this.country, other.country) && Kotlin.equals(this.mail, other.mail) && Kotlin.equals(this.birth_date, other.birth_date) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.bio, other.bio) && Kotlin.equals(this.register_date, other.register_date) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.facebook, other.facebook) && Kotlin.equals(this.twitter, other.twitter) && Kotlin.equals(this.intragram, other.intragram) && Kotlin.equals(this.admin, other.admin)))));
  };
  function obtainUserDataServer$Data(profile, error) {
    this.profile = profile;
    this.error = error;
  }
  obtainUserDataServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainUserDataServer$Data.prototype.component1 = function () {
    return this.profile;
  };
  obtainUserDataServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainUserDataServer$Data.prototype.copy_n83uru$ = function (profile, error) {
    return new obtainUserDataServer$Data(profile === void 0 ? this.profile : profile, error === void 0 ? this.error : error);
  };
  obtainUserDataServer$Data.prototype.toString = function () {
    return 'Data(profile=' + Kotlin.toString(this.profile) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainUserDataServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.profile) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainUserDataServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.profile, other.profile) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainUserDataServer_0(username, sessionToken) {
    var req = new XMLHttpRequest();
    if (sessionToken != null) {
      req.open('GET', server + '/users/' + username + '?token=' + toString(sessionToken), false);
    }
     else {
      req.open('GET', server + '/users/' + username, false);
    }
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      var userDate = null;
      if (!equals(json.profile.birth_date.toString(), '-1')) {
        var date = split(json.profile.birth_date, Kotlin.charArrayOf(45));
        userDate = new Date(toInt(date.get_za3lpa$(0)), toInt(date.get_za3lpa$(1)), toInt(date.get_za3lpa$(2)));
      }
      var user = User_init_1(json.profile.nick, json.profile.user, getUserProfilePicturePath(json.profile.bio), json.profile.verified, ensureNotNull(json.profile.mail), json.profile.bio, userDate);
      user.country = json.profile.country;
      user.country = json.profile.country;
      user.facebookAccount = json.profile.facebook;
      user.twitterAccount = json.profile.twitter;
      user.instagramAccount = json.profile.intragram;
      user.admin = json.profile.admin;
      return user;
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function obtainSongsFromUserServer$Data(size, songs, error) {
    this.size = size;
    this.songs = songs;
    this.error = error;
  }
  obtainSongsFromUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainSongsFromUserServer$Data.prototype.component1 = function () {
    return this.size;
  };
  obtainSongsFromUserServer$Data.prototype.component2 = function () {
    return this.songs;
  };
  obtainSongsFromUserServer$Data.prototype.component3 = function () {
    return this.error;
  };
  obtainSongsFromUserServer$Data.prototype.copy_dl5m9g$ = function (size, songs, error) {
    return new obtainSongsFromUserServer$Data(size === void 0 ? this.size : size, songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error);
  };
  obtainSongsFromUserServer$Data.prototype.toString = function () {
    return 'Data(size=' + Kotlin.toString(this.size) + (', songs=' + Kotlin.toString(this.songs)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainSongsFromUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainSongsFromUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error)))));
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function obtainSongsFromUserServer(username) {
    var tmp$;
    println('obtainSongsFromUserServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/songs', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
        return result;
      }
       else {
        Exception_init(json.error);
      }
    }
     else {
      println('Error ' + req.status.toString());
      Exception_init('Error');
      return result;
    }
    return emptyList();
  }
  function obtainPlaylistDataServer$Data(title, author, creation_time, songs_size, songs, followers_size, followers, error) {
    this.title = title;
    this.author = author;
    this.creation_time = creation_time;
    this.songs_size = songs_size;
    this.songs = songs;
    this.followers_size = followers_size;
    this.followers = followers;
    this.error = error;
  }
  obtainPlaylistDataServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainPlaylistDataServer$Data.prototype.component1 = function () {
    return this.title;
  };
  obtainPlaylistDataServer$Data.prototype.component2 = function () {
    return this.author;
  };
  obtainPlaylistDataServer$Data.prototype.component3 = function () {
    return this.creation_time;
  };
  obtainPlaylistDataServer$Data.prototype.component4 = function () {
    return this.songs_size;
  };
  obtainPlaylistDataServer$Data.prototype.component5 = function () {
    return this.songs;
  };
  obtainPlaylistDataServer$Data.prototype.component6 = function () {
    return this.followers_size;
  };
  obtainPlaylistDataServer$Data.prototype.component7 = function () {
    return this.followers;
  };
  obtainPlaylistDataServer$Data.prototype.component8 = function () {
    return this.error;
  };
  obtainPlaylistDataServer$Data.prototype.copy_v7dy06$ = function (title, author, creation_time, songs_size, songs, followers_size, followers, error) {
    return new obtainPlaylistDataServer$Data(title === void 0 ? this.title : title, author === void 0 ? this.author : author, creation_time === void 0 ? this.creation_time : creation_time, songs_size === void 0 ? this.songs_size : songs_size, songs === void 0 ? this.songs : songs, followers_size === void 0 ? this.followers_size : followers_size, followers === void 0 ? this.followers : followers, error === void 0 ? this.error : error);
  };
  obtainPlaylistDataServer$Data.prototype.toString = function () {
    return 'Data(title=' + Kotlin.toString(this.title) + (', author=' + Kotlin.toString(this.author)) + (', creation_time=' + Kotlin.toString(this.creation_time)) + (', songs_size=' + Kotlin.toString(this.songs_size)) + (', songs=' + Kotlin.toString(this.songs)) + (', followers_size=' + Kotlin.toString(this.followers_size)) + (', followers=' + Kotlin.toString(this.followers)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainPlaylistDataServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.creation_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs_size) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.followers_size) | 0;
    result = result * 31 + Kotlin.hashCode(this.followers) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainPlaylistDataServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.creation_time, other.creation_time) && Kotlin.equals(this.songs_size, other.songs_size) && Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.followers_size, other.followers_size) && Kotlin.equals(this.followers, other.followers) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainPlaylistDataServer(id) {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users-lists/' + id, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        var songs = ArrayList_init();
        tmp$ = toList(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i);
          if (song != null) {
            songs.add_11rb$(song);
          }
        }
        var users = ArrayList_init();
        tmp$_0 = toList(json.followers).iterator();
        while (tmp$_0.hasNext()) {
          var i_0 = tmp$_0.next();
          var user = obtainUserDataServerFromID_0(i_0, null);
          if (user != null) {
            users.add_11rb$(user);
          }
        }
        return new Playlist(id, json.title, ensureNotNull(obtainUserDataServerFromID_0(json.author, null)), getPlaylistCoverPath(id), songs, users);
      }
       else {
        Exception_init(json.error);
      }
    }
    Exception_init('Error ' + req.status.toString());
    return null;
  }
  function obtainPlaylistsFromUserServer$Data(size, id, error) {
    this.size = size;
    this.id = id;
    this.error = error;
  }
  obtainPlaylistsFromUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainPlaylistsFromUserServer$Data.prototype.component1 = function () {
    return this.size;
  };
  obtainPlaylistsFromUserServer$Data.prototype.component2 = function () {
    return this.id;
  };
  obtainPlaylistsFromUserServer$Data.prototype.component3 = function () {
    return this.error;
  };
  obtainPlaylistsFromUserServer$Data.prototype.copy_dl5m9g$ = function (size, id, error) {
    return new obtainPlaylistsFromUserServer$Data(size === void 0 ? this.size : size, id === void 0 ? this.id : id, error === void 0 ? this.error : error);
  };
  obtainPlaylistsFromUserServer$Data.prototype.toString = function () {
    return 'Data(size=' + Kotlin.toString(this.size) + (', id=' + Kotlin.toString(this.id)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  obtainPlaylistsFromUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  obtainPlaylistsFromUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.error, other.error)))));
  };
  function obtainPlaylistsFromUserServer(username) {
    var tmp$;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/user-lists/' + username + '/lists', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.id).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var songlist = obtainPlaylistDataServer(i);
          if (songlist != null) {
            result.add_11rb$(songlist);
          }
        }
        return result;
      }
       else {
        Exception_init(json.error);
      }
    }
    return result;
  }
  function isServerOnline() {
    try {
      var req = new XMLHttpRequest();
      req.open('GET', server + '/users/abel', false);
      req.send(null);
      println(req.status);
      if (req.status !== 200) {
        println('error');
        return false;
      }
       else {
        return true;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return false;
      }
       else
        throw e;
    }
  }
  function doLoginServer$Data(user, token, error) {
    this.user = user;
    this.token = token;
    this.error = error;
  }
  doLoginServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  doLoginServer$Data.prototype.component1 = function () {
    return this.user;
  };
  doLoginServer$Data.prototype.component2 = function () {
    return this.token;
  };
  doLoginServer$Data.prototype.component3 = function () {
    return this.error;
  };
  doLoginServer$Data.prototype.copy_6hosri$ = function (user, token, error) {
    return new doLoginServer$Data(user === void 0 ? this.user : user, token === void 0 ? this.token : token, error === void 0 ? this.error : error);
  };
  doLoginServer$Data.prototype.toString = function () {
    return 'Data(user=' + Kotlin.toString(this.user) + (', token=' + Kotlin.toString(this.token)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  doLoginServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  doLoginServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.error, other.error)))));
  };
  function doLoginServer(username, password) {
    println('LoginServer');
    println('sending  request');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + username + '/login', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf(to('pass', password)));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
      return json.token;
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function doSignUpServer$Data(user, token, error) {
    this.user = user;
    this.token = token;
    this.error = error;
  }
  doSignUpServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  doSignUpServer$Data.prototype.component1 = function () {
    return this.user;
  };
  doSignUpServer$Data.prototype.component2 = function () {
    return this.token;
  };
  doSignUpServer$Data.prototype.component3 = function () {
    return this.error;
  };
  doSignUpServer$Data.prototype.copy_6hosri$ = function (user, token, error) {
    return new doSignUpServer$Data(user === void 0 ? this.user : user, token === void 0 ? this.token : token, error === void 0 ? this.error : error);
  };
  doSignUpServer$Data.prototype.toString = function () {
    return 'Data(user=' + Kotlin.toString(this.user) + (', token=' + Kotlin.toString(this.token)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  doSignUpServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  doSignUpServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.error, other.error)))));
  };
  function doSignUpServer(user) {
    println('SignUpServer');
    var nick = user.username;
    var pass = user.password;
    var email = user.email;
    var username = user.name;
    var birth = null;
    var data = createForm(mapOf_0([to('mail', email), to('pass0', pass), to('pass1', pass), to('user', username), to('birth', birth)]));
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + nick + '/signup?', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
      return json.token;
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function doDeleteAccountServer$Data(error) {
    this.error = error;
  }
  doDeleteAccountServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  doDeleteAccountServer$Data.prototype.component1 = function () {
    return this.error;
  };
  doDeleteAccountServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new doDeleteAccountServer$Data(error === void 0 ? this.error : error);
  };
  doDeleteAccountServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  doDeleteAccountServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  doDeleteAccountServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function doDeleteAccountServer(user, sessionToken) {
    println('DeleteAccountServer');
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/users/' + user + '?token=' + sessionToken, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return true;
      }
       else {
        println('Exception ' + json.error);
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function doLogoutServer$Data(error) {
    this.error = error;
  }
  doLogoutServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  doLogoutServer$Data.prototype.component1 = function () {
    return this.error;
  };
  doLogoutServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new doLogoutServer$Data(error === void 0 ? this.error : error);
  };
  doLogoutServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  doLogoutServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  doLogoutServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function doLogoutServer(username, sessionToken) {
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/users/' + username + '/login?token=' + sessionToken, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
      return true;
    }
    return false;
  }
  function getFollowedUsersServer$Data(error, size, users) {
    this.error = error;
    this.size = size;
    this.users = users;
  }
  getFollowedUsersServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getFollowedUsersServer$Data.prototype.component1 = function () {
    return this.error;
  };
  getFollowedUsersServer$Data.prototype.component2 = function () {
    return this.size;
  };
  getFollowedUsersServer$Data.prototype.component3 = function () {
    return this.users;
  };
  getFollowedUsersServer$Data.prototype.copy_74krkc$ = function (error, size, users) {
    return new getFollowedUsersServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, users === void 0 ? this.users : users);
  };
  getFollowedUsersServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', users=' + Kotlin.toString(this.users)) + ')';
  };
  getFollowedUsersServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.users) | 0;
    return result;
  };
  getFollowedUsersServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.users, other.users)))));
  };
  function getFollowedUsersServer(username) {
    var tmp$;
    println('FollowedUsersServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/follows', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.users).iterator();
        while (tmp$.hasNext()) {
          var users_id = tmp$.next();
          var user = obtainUserDataServerFromID_0(users_id, null);
          if (user != null) {
            result.add_11rb$(user);
          }
        }
        return result;
      }
       else {
        println('Exception ' + json.error);
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function isUserFollowedByUserServer(username, user) {
    var tmp$;
    var followers = getFollowersOfUserServer(user);
    tmp$ = followers.iterator();
    while (tmp$.hasNext()) {
      var one = tmp$.next();
      if (equals(one.username, username)) {
        return true;
      }
    }
    return false;
  }
  function getFollowersOfUserServer$Data(error, size, users) {
    this.error = error;
    this.size = size;
    this.users = users;
  }
  getFollowersOfUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getFollowersOfUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  getFollowersOfUserServer$Data.prototype.component2 = function () {
    return this.size;
  };
  getFollowersOfUserServer$Data.prototype.component3 = function () {
    return this.users;
  };
  getFollowersOfUserServer$Data.prototype.copy_74krkc$ = function (error, size, users) {
    return new getFollowersOfUserServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, users === void 0 ? this.users : users);
  };
  getFollowersOfUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', users=' + Kotlin.toString(this.users)) + ')';
  };
  getFollowersOfUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.users) | 0;
    return result;
  };
  getFollowersOfUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.users, other.users)))));
  };
  function getFollowersOfUserServer(username) {
    var tmp$;
    println('FollowedUsersServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/followers', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.users).iterator();
        while (tmp$.hasNext()) {
          var users_id = tmp$.next();
          var user = obtainUserDataServerFromID_0(users_id, null);
          if (user != null) {
            result.add_11rb$(user);
          }
        }
        return result;
      }
       else {
        println('Exception ' + json.error);
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function getNumberOfFollowersOfUserServer$Data(error, size, users) {
    this.error = error;
    this.size = size;
    this.users = users;
  }
  getNumberOfFollowersOfUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getNumberOfFollowersOfUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  getNumberOfFollowersOfUserServer$Data.prototype.component2 = function () {
    return this.size;
  };
  getNumberOfFollowersOfUserServer$Data.prototype.component3 = function () {
    return this.users;
  };
  getNumberOfFollowersOfUserServer$Data.prototype.copy_74krkc$ = function (error, size, users) {
    return new getNumberOfFollowersOfUserServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, users === void 0 ? this.users : users);
  };
  getNumberOfFollowersOfUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', users=' + Kotlin.toString(this.users)) + ')';
  };
  getNumberOfFollowersOfUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.users) | 0;
    return result;
  };
  getNumberOfFollowersOfUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.users, other.users)))));
  };
  function getNumberOfFollowersOfUserServer(username) {
    println('FollowedUsersServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/followers', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return Kotlin.Long.fromInt(json.size);
      }
       else {
        println('Exception ' + json.error);
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function addFollowerToUserServer$Data(error) {
    this.error = error;
  }
  addFollowerToUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  addFollowerToUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  addFollowerToUserServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new addFollowerToUserServer$Data(error === void 0 ? this.error : error);
  };
  addFollowerToUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  addFollowerToUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  addFollowerToUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function addFollowerToUserServer(username, sessionToken, followed) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + username + '/follow/' + followed, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('token=' + sessionToken);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return true;
      }
       else {
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function deleteFollowerToUserServer$Data(error) {
    this.error = error;
  }
  deleteFollowerToUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  deleteFollowerToUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  deleteFollowerToUserServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new deleteFollowerToUserServer$Data(error === void 0 ? this.error : error);
  };
  deleteFollowerToUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  deleteFollowerToUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  deleteFollowerToUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function deleteFollowerToUserServer(username, sessionToken, followed) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + username + '/unfollow/' + followed, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send('token=' + sessionToken);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return true;
      }
       else {
        throw Exception_init(json.error);
      }
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function getFollowedPlaylistsServer$Data(id, error) {
    this.id = id;
    this.error = error;
  }
  getFollowedPlaylistsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getFollowedPlaylistsServer$Data.prototype.component1 = function () {
    return this.id;
  };
  getFollowedPlaylistsServer$Data.prototype.component2 = function () {
    return this.error;
  };
  getFollowedPlaylistsServer$Data.prototype.copy_cp4f3y$ = function (id, error) {
    return new getFollowedPlaylistsServer$Data(id === void 0 ? this.id : id, error === void 0 ? this.error : error);
  };
  getFollowedPlaylistsServer$Data.prototype.toString = function () {
    return 'Data(id=' + Kotlin.toString(this.id) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  getFollowedPlaylistsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  getFollowedPlaylistsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.error, other.error)))));
  };
  function getFollowedPlaylistsServer(username) {
    var tmp$;
    println('getFollowedPlaylistsServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/user-lists/' + username + '/following', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.id).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var songlist = obtainPlaylistDataServer(i);
          if (songlist != null) {
            result.add_11rb$(songlist);
          }
        }
        return result;
      }
       else {
        Exception_init(json.error);
      }
    }
    return emptyList();
  }
  function isPlaylistFollowedByUserServer(username, playlist) {
    var tmp$;
    var lists = getFollowedPlaylistsServer(username);
    tmp$ = lists.iterator();
    while (tmp$.hasNext()) {
      var list = tmp$.next();
      if (equals(list.id, playlist)) {
        return true;
      }
    }
    return false;
  }
  function getFollowersOfPlaylistServer$Data(error, size, id) {
    this.error = error;
    this.size = size;
    this.id = id;
  }
  getFollowersOfPlaylistServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getFollowersOfPlaylistServer$Data.prototype.component1 = function () {
    return this.error;
  };
  getFollowersOfPlaylistServer$Data.prototype.component2 = function () {
    return this.size;
  };
  getFollowersOfPlaylistServer$Data.prototype.component3 = function () {
    return this.id;
  };
  getFollowersOfPlaylistServer$Data.prototype.copy_74krkc$ = function (error, size, id) {
    return new getFollowersOfPlaylistServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, id === void 0 ? this.id : id);
  };
  getFollowersOfPlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  getFollowersOfPlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  getFollowersOfPlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.id, other.id)))));
  };
  function getFollowersOfPlaylistServer(playlist) {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/user-lists/' + playlist + '/followed', false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.id;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var user = obtainUserDataServerFromID_0(i, null);
          if (user != null) {
            result.add_11rb$(user);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function getNumberOfFollowersOfPlaylistServer(playlist) {
    var list = getFollowersOfPlaylistServer(playlist);
    return Kotlin.Long.fromInt(list.size);
  }
  function addFollowerToPlaylistServer$Data(error) {
    this.error = error;
  }
  addFollowerToPlaylistServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  addFollowerToPlaylistServer$Data.prototype.component1 = function () {
    return this.error;
  };
  addFollowerToPlaylistServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new addFollowerToPlaylistServer$Data(error === void 0 ? this.error : error);
  };
  addFollowerToPlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  addFollowerToPlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  addFollowerToPlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function addFollowerToPlaylistServer(username, sessionToken, followed) {
    var req = new XMLHttpRequest();
    req.open('PUT', server + '/user-lists/' + username + '/' + followed + '/follow?token=' + sessionToken, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error');
    }
  }
  function deleteFollowerToPlaylistServer$Data(error) {
    this.error = error;
  }
  deleteFollowerToPlaylistServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  deleteFollowerToPlaylistServer$Data.prototype.component1 = function () {
    return this.error;
  };
  deleteFollowerToPlaylistServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new deleteFollowerToPlaylistServer$Data(error === void 0 ? this.error : error);
  };
  deleteFollowerToPlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  deleteFollowerToPlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  deleteFollowerToPlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function deleteFollowerToPlaylistServer(username, sessionToken, followed) {
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/user-lists/' + username + '/' + followed + '/unfollow?token=' + sessionToken, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + req.status.toString());
    }
  }
  function addReproductionToSongServer$Data(user, token, error) {
    this.user = user;
    this.token = token;
    this.error = error;
  }
  addReproductionToSongServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  addReproductionToSongServer$Data.prototype.component1 = function () {
    return this.user;
  };
  addReproductionToSongServer$Data.prototype.component2 = function () {
    return this.token;
  };
  addReproductionToSongServer$Data.prototype.component3 = function () {
    return this.error;
  };
  addReproductionToSongServer$Data.prototype.copy_6hosri$ = function (user, token, error) {
    return new addReproductionToSongServer$Data(user === void 0 ? this.user : user, token === void 0 ? this.token : token, error === void 0 ? this.error : error);
  };
  addReproductionToSongServer$Data.prototype.toString = function () {
    return 'Data(user=' + Kotlin.toString(this.user) + (', token=' + Kotlin.toString(this.token)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  addReproductionToSongServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  addReproductionToSongServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.error, other.error)))));
  };
  function addReproductionToSongServer(username, sessionToken, song) {
    println('addReproductionToSongServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/' + song + '/listen', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('nick', username)]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function setSongFavoutireServer$Data(user, token, error) {
    this.user = user;
    this.token = token;
    this.error = error;
  }
  setSongFavoutireServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  setSongFavoutireServer$Data.prototype.component1 = function () {
    return this.user;
  };
  setSongFavoutireServer$Data.prototype.component2 = function () {
    return this.token;
  };
  setSongFavoutireServer$Data.prototype.component3 = function () {
    return this.error;
  };
  setSongFavoutireServer$Data.prototype.copy_6hosri$ = function (user, token, error) {
    return new setSongFavoutireServer$Data(user === void 0 ? this.user : user, token === void 0 ? this.token : token, error === void 0 ? this.error : error);
  };
  setSongFavoutireServer$Data.prototype.toString = function () {
    return 'Data(user=' + Kotlin.toString(this.user) + (', token=' + Kotlin.toString(this.token)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  setSongFavoutireServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  setSongFavoutireServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.error, other.error)))));
  };
  function setSongFavoutireServer(username, sessionToken, song) {
    println('setSongFavoutireServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/user/' + username + '/fav', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', song.toString())]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function unSetSongFavoutireServer$Data(user, token, error) {
    this.user = user;
    this.token = token;
    this.error = error;
  }
  unSetSongFavoutireServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  unSetSongFavoutireServer$Data.prototype.component1 = function () {
    return this.user;
  };
  unSetSongFavoutireServer$Data.prototype.component2 = function () {
    return this.token;
  };
  unSetSongFavoutireServer$Data.prototype.component3 = function () {
    return this.error;
  };
  unSetSongFavoutireServer$Data.prototype.copy_6hosri$ = function (user, token, error) {
    return new unSetSongFavoutireServer$Data(user === void 0 ? this.user : user, token === void 0 ? this.token : token, error === void 0 ? this.error : error);
  };
  unSetSongFavoutireServer$Data.prototype.toString = function () {
    return 'Data(user=' + Kotlin.toString(this.user) + (', token=' + Kotlin.toString(this.token)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  unSetSongFavoutireServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  unSetSongFavoutireServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.user, other.user) && Kotlin.equals(this.token, other.token) && Kotlin.equals(this.error, other.error)))));
  };
  function unSetSongFavoutireServer(username, sessionToken, song) {
    println('unSetSongFavoutireServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/user/' + username + '/unfav', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', song.toString())]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function isSongFavoutireByUserServer$Data(error) {
    this.error = error;
  }
  isSongFavoutireByUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  isSongFavoutireByUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  isSongFavoutireByUserServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new isSongFavoutireByUserServer$Data(error === void 0 ? this.error : error);
  };
  isSongFavoutireByUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  isSongFavoutireByUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  isSongFavoutireByUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function isSongFavoutireByUserServer(username, sessionToken, song) {
    var tmp$;
    println('isSongFavoutireByUserServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/user/' + username + '/faved/' + song, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok'))
        tmp$ = true;
      else if (equals(json.error, 'noFav'))
        tmp$ = false;
      else {
        println('Exception ' + json.error);
        throw Exception_init(json.error);
      }
      return tmp$;
    }
     else {
      println('Error');
      throw Exception_init('Error ' + req.status);
    }
  }
  function uploadSongServer$DataSong(country, upload_time, id, title, user_id) {
    this.country = country;
    this.upload_time = upload_time;
    this.id = id;
    this.title = title;
    this.user_id = user_id;
  }
  uploadSongServer$DataSong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSong',
    interfaces: []
  };
  uploadSongServer$DataSong.prototype.component1 = function () {
    return this.country;
  };
  uploadSongServer$DataSong.prototype.component2 = function () {
    return this.upload_time;
  };
  uploadSongServer$DataSong.prototype.component3 = function () {
    return this.id;
  };
  uploadSongServer$DataSong.prototype.component4 = function () {
    return this.title;
  };
  uploadSongServer$DataSong.prototype.component5 = function () {
    return this.user_id;
  };
  uploadSongServer$DataSong.prototype.copy_1si7y6$ = function (country, upload_time, id, title, user_id) {
    return new uploadSongServer$DataSong(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, id === void 0 ? this.id : id, title === void 0 ? this.title : title, user_id === void 0 ? this.user_id : user_id);
  };
  uploadSongServer$DataSong.prototype.toString = function () {
    return 'DataSong(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', user_id=' + Kotlin.toString(this.user_id)) + ')';
  };
  uploadSongServer$DataSong.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    return result;
  };
  uploadSongServer$DataSong.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.user_id, other.user_id)))));
  };
  function uploadSongServer$Data(song, error) {
    this.song = song;
    this.error = error;
  }
  uploadSongServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  uploadSongServer$Data.prototype.component1 = function () {
    return this.song;
  };
  uploadSongServer$Data.prototype.component2 = function () {
    return this.error;
  };
  uploadSongServer$Data.prototype.copy_myd09b$ = function (song, error) {
    return new uploadSongServer$Data(song === void 0 ? this.song : song, error === void 0 ? this.error : error);
  };
  uploadSongServer$Data.prototype.toString = function () {
    return 'Data(song=' + Kotlin.toString(this.song) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  uploadSongServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.song) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  uploadSongServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.song, other.song) && Kotlin.equals(this.error, other.error)))));
  };
  function uploadSongServer(username, sessionToken, song) {
    println('Upload Song');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/' + username + '/create', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data;
    if (song.album == null) {
      data = createForm(mapOf_0([to('token', sessionToken), to('title', song.name), to('albumID', null), to('country', song.country)]));
    }
     else {
      data = createForm(mapOf_0([to('token', sessionToken), to('title', song.name), to('albumID', toString(ensureNotNull(song.album).id)), to('country', song.country)]));
    }
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
      song.id = Kotlin.Long.fromInt(json.song.id);
      return Kotlin.Long.fromInt(json.song.id);
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function obtainFavouriteSongsByUserServer$Data(error, size, songs) {
    this.error = error;
    this.size = size;
    this.songs = songs;
  }
  obtainFavouriteSongsByUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainFavouriteSongsByUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  obtainFavouriteSongsByUserServer$Data.prototype.component2 = function () {
    return this.size;
  };
  obtainFavouriteSongsByUserServer$Data.prototype.component3 = function () {
    return this.songs;
  };
  obtainFavouriteSongsByUserServer$Data.prototype.copy_74krkc$ = function (error, size, songs) {
    return new obtainFavouriteSongsByUserServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, songs === void 0 ? this.songs : songs);
  };
  obtainFavouriteSongsByUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', songs=' + Kotlin.toString(this.songs)) + ')';
  };
  obtainFavouriteSongsByUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    return result;
  };
  obtainFavouriteSongsByUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.songs, other.songs)))));
  };
  function obtainFavouriteSongsByUserServer(username, sessionToken) {
    var tmp$;
    println('obtainFavouriteSongsByUserServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/user/' + username + '/faved/', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
    return result;
  }
  function numbeOfSavoriteSongsByUserServer(username, sessionToken) {
    return obtainFavouriteSongsByUserServer(username, sessionToken).size;
  }
  function obtainRecomendationsForUserServer(username, sessionToken, cantidad) {
    return emptyList();
  }
  function obtainPopularSongsServer$DataSongs(country, upload_time, user_id, reproductions, id, title, likes) {
    this.country = country;
    this.upload_time = upload_time;
    this.user_id = user_id;
    this.reproductions = reproductions;
    this.id = id;
    this.title = title;
    this.likes = likes;
  }
  obtainPopularSongsServer$DataSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSongs',
    interfaces: []
  };
  obtainPopularSongsServer$DataSongs.prototype.component1 = function () {
    return this.country;
  };
  obtainPopularSongsServer$DataSongs.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainPopularSongsServer$DataSongs.prototype.component3 = function () {
    return this.user_id;
  };
  obtainPopularSongsServer$DataSongs.prototype.component4 = function () {
    return this.reproductions;
  };
  obtainPopularSongsServer$DataSongs.prototype.component5 = function () {
    return this.id;
  };
  obtainPopularSongsServer$DataSongs.prototype.component6 = function () {
    return this.title;
  };
  obtainPopularSongsServer$DataSongs.prototype.component7 = function () {
    return this.likes;
  };
  obtainPopularSongsServer$DataSongs.prototype.copy_rklif8$ = function (country, upload_time, user_id, reproductions, id, title, likes) {
    return new obtainPopularSongsServer$DataSongs(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, user_id === void 0 ? this.user_id : user_id, reproductions === void 0 ? this.reproductions : reproductions, id === void 0 ? this.id : id, title === void 0 ? this.title : title, likes === void 0 ? this.likes : likes);
  };
  obtainPopularSongsServer$DataSongs.prototype.toString = function () {
    return 'DataSongs(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', reproductions=' + Kotlin.toString(this.reproductions)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  obtainPopularSongsServer$DataSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.reproductions) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  obtainPopularSongsServer$DataSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.reproductions, other.reproductions) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.likes, other.likes)))));
  };
  function obtainPopularSongsServer$Data(songs, error, results) {
    this.songs = songs;
    this.error = error;
    this.results = results;
  }
  obtainPopularSongsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainPopularSongsServer$Data.prototype.component1 = function () {
    return this.songs;
  };
  obtainPopularSongsServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainPopularSongsServer$Data.prototype.component3 = function () {
    return this.results;
  };
  obtainPopularSongsServer$Data.prototype.copy_resib$ = function (songs, error, results) {
    return new obtainPopularSongsServer$Data(songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error, results === void 0 ? this.results : results);
  };
  obtainPopularSongsServer$Data.prototype.toString = function () {
    return 'Data(songs=' + Kotlin.toString(this.songs) + (', error=' + Kotlin.toString(this.error)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  obtainPopularSongsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  obtainPopularSongsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error) && Kotlin.equals(this.results, other.results)))));
  };
  function obtainPopularSongsServer(cantidad) {
    var tmp$;
    println('obtainPopularSongsServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/popular?n=' + cantidad, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList_0(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i.id);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function obtainNewSongsFromFollowedArtistOfUserServer$DataSongs(country, upload_time, user_id, reproductions, id, title, likes) {
    this.country = country;
    this.upload_time = upload_time;
    this.user_id = user_id;
    this.reproductions = reproductions;
    this.id = id;
    this.title = title;
    this.likes = likes;
  }
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSongs',
    interfaces: []
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component1 = function () {
    return this.country;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component3 = function () {
    return this.user_id;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component4 = function () {
    return this.reproductions;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component5 = function () {
    return this.id;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component6 = function () {
    return this.title;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.component7 = function () {
    return this.likes;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.copy_rklif8$ = function (country, upload_time, user_id, reproductions, id, title, likes) {
    return new obtainNewSongsFromFollowedArtistOfUserServer$DataSongs(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, user_id === void 0 ? this.user_id : user_id, reproductions === void 0 ? this.reproductions : reproductions, id === void 0 ? this.id : id, title === void 0 ? this.title : title, likes === void 0 ? this.likes : likes);
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.toString = function () {
    return 'DataSongs(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', reproductions=' + Kotlin.toString(this.reproductions)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.reproductions) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$DataSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.reproductions, other.reproductions) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.likes, other.likes)))));
  };
  function obtainNewSongsFromFollowedArtistOfUserServer$Data(songs, error, results) {
    this.songs = songs;
    this.error = error;
    this.results = results;
  }
  obtainNewSongsFromFollowedArtistOfUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.component1 = function () {
    return this.songs;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.component3 = function () {
    return this.results;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.copy_4xrdld$ = function (songs, error, results) {
    return new obtainNewSongsFromFollowedArtistOfUserServer$Data(songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error, results === void 0 ? this.results : results);
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.toString = function () {
    return 'Data(songs=' + Kotlin.toString(this.songs) + (', error=' + Kotlin.toString(this.error)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  obtainNewSongsFromFollowedArtistOfUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error) && Kotlin.equals(this.results, other.results)))));
  };
  function obtainNewSongsFromFollowedArtistOfUserServer(username, sessionToken, amount) {
    var tmp$;
    println('obtainPopularSongsServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/popular/user/' + username + '?n=' + amount, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList_0(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i.id);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function obtainTrendSongsServer$DataSongs(country, upload_time, user_id, reproductions, id, title, likes) {
    this.country = country;
    this.upload_time = upload_time;
    this.user_id = user_id;
    this.reproductions = reproductions;
    this.id = id;
    this.title = title;
    this.likes = likes;
  }
  obtainTrendSongsServer$DataSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSongs',
    interfaces: []
  };
  obtainTrendSongsServer$DataSongs.prototype.component1 = function () {
    return this.country;
  };
  obtainTrendSongsServer$DataSongs.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainTrendSongsServer$DataSongs.prototype.component3 = function () {
    return this.user_id;
  };
  obtainTrendSongsServer$DataSongs.prototype.component4 = function () {
    return this.reproductions;
  };
  obtainTrendSongsServer$DataSongs.prototype.component5 = function () {
    return this.id;
  };
  obtainTrendSongsServer$DataSongs.prototype.component6 = function () {
    return this.title;
  };
  obtainTrendSongsServer$DataSongs.prototype.component7 = function () {
    return this.likes;
  };
  obtainTrendSongsServer$DataSongs.prototype.copy_rklif8$ = function (country, upload_time, user_id, reproductions, id, title, likes) {
    return new obtainTrendSongsServer$DataSongs(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, user_id === void 0 ? this.user_id : user_id, reproductions === void 0 ? this.reproductions : reproductions, id === void 0 ? this.id : id, title === void 0 ? this.title : title, likes === void 0 ? this.likes : likes);
  };
  obtainTrendSongsServer$DataSongs.prototype.toString = function () {
    return 'DataSongs(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', reproductions=' + Kotlin.toString(this.reproductions)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  obtainTrendSongsServer$DataSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.reproductions) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  obtainTrendSongsServer$DataSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.reproductions, other.reproductions) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.likes, other.likes)))));
  };
  function obtainTrendSongsServer$Data(songs, error, results) {
    this.songs = songs;
    this.error = error;
    this.results = results;
  }
  obtainTrendSongsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainTrendSongsServer$Data.prototype.component1 = function () {
    return this.songs;
  };
  obtainTrendSongsServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainTrendSongsServer$Data.prototype.component3 = function () {
    return this.results;
  };
  obtainTrendSongsServer$Data.prototype.copy_o1507j$ = function (songs, error, results) {
    return new obtainTrendSongsServer$Data(songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error, results === void 0 ? this.results : results);
  };
  obtainTrendSongsServer$Data.prototype.toString = function () {
    return 'Data(songs=' + Kotlin.toString(this.songs) + (', error=' + Kotlin.toString(this.error)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  obtainTrendSongsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  obtainTrendSongsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error) && Kotlin.equals(this.results, other.results)))));
  };
  function obtainTrendSongsServer(amount) {
    var tmp$;
    println('obtainPopularSongsServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/popular?n=' + amount + '&daily=true', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList_0(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i.id);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function obtainTrendSongsInUserCountryServer$DataSongs(country, upload_time, user_id, reproductions, id, title, likes) {
    this.country = country;
    this.upload_time = upload_time;
    this.user_id = user_id;
    this.reproductions = reproductions;
    this.id = id;
    this.title = title;
    this.likes = likes;
  }
  obtainTrendSongsInUserCountryServer$DataSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSongs',
    interfaces: []
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component1 = function () {
    return this.country;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component3 = function () {
    return this.user_id;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component4 = function () {
    return this.reproductions;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component5 = function () {
    return this.id;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component6 = function () {
    return this.title;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.component7 = function () {
    return this.likes;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.copy_rklif8$ = function (country, upload_time, user_id, reproductions, id, title, likes) {
    return new obtainTrendSongsInUserCountryServer$DataSongs(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, user_id === void 0 ? this.user_id : user_id, reproductions === void 0 ? this.reproductions : reproductions, id === void 0 ? this.id : id, title === void 0 ? this.title : title, likes === void 0 ? this.likes : likes);
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.toString = function () {
    return 'DataSongs(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', reproductions=' + Kotlin.toString(this.reproductions)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.reproductions) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  obtainTrendSongsInUserCountryServer$DataSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.reproductions, other.reproductions) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.likes, other.likes)))));
  };
  function obtainTrendSongsInUserCountryServer$Data(songs, error, results) {
    this.songs = songs;
    this.error = error;
    this.results = results;
  }
  obtainTrendSongsInUserCountryServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.component1 = function () {
    return this.songs;
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.component3 = function () {
    return this.results;
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.copy_qnvldn$ = function (songs, error, results) {
    return new obtainTrendSongsInUserCountryServer$Data(songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error, results === void 0 ? this.results : results);
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.toString = function () {
    return 'Data(songs=' + Kotlin.toString(this.songs) + (', error=' + Kotlin.toString(this.error)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  obtainTrendSongsInUserCountryServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error) && Kotlin.equals(this.results, other.results)))));
  };
  function obtainTrendSongsInUserCountryServer(username, sessionToken, cantidad) {
    var tmp$;
    println('obtainTrendSongsInUserCountryServer');
    var user = obtainUserDataServer_0(username, sessionToken);
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/popular/' + toString(ensureNotNull(user).country) + '/?n=' + cantidad, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList_0(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i.id);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function obtainUpdatedPlaylistsFollowedByUserServer(username, sessionToken, cantidad) {
    return emptyList();
  }
  function obtainResultForQueryInSongServer$DataSongs(country, upload_time, user_id, reproductions, id, title, likes) {
    this.country = country;
    this.upload_time = upload_time;
    this.user_id = user_id;
    this.reproductions = reproductions;
    this.id = id;
    this.title = title;
    this.likes = likes;
  }
  obtainResultForQueryInSongServer$DataSongs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSongs',
    interfaces: []
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component1 = function () {
    return this.country;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component2 = function () {
    return this.upload_time;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component3 = function () {
    return this.user_id;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component4 = function () {
    return this.reproductions;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component5 = function () {
    return this.id;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component6 = function () {
    return this.title;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.component7 = function () {
    return this.likes;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.copy_rklif8$ = function (country, upload_time, user_id, reproductions, id, title, likes) {
    return new obtainResultForQueryInSongServer$DataSongs(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, user_id === void 0 ? this.user_id : user_id, reproductions === void 0 ? this.reproductions : reproductions, id === void 0 ? this.id : id, title === void 0 ? this.title : title, likes === void 0 ? this.likes : likes);
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.toString = function () {
    return 'DataSongs(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', reproductions=' + Kotlin.toString(this.reproductions)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.reproductions) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  obtainResultForQueryInSongServer$DataSongs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.reproductions, other.reproductions) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.likes, other.likes)))));
  };
  function obtainResultForQueryInSongServer$Data(songs, error, results) {
    this.songs = songs;
    this.error = error;
    this.results = results;
  }
  obtainResultForQueryInSongServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainResultForQueryInSongServer$Data.prototype.component1 = function () {
    return this.songs;
  };
  obtainResultForQueryInSongServer$Data.prototype.component2 = function () {
    return this.error;
  };
  obtainResultForQueryInSongServer$Data.prototype.component3 = function () {
    return this.results;
  };
  obtainResultForQueryInSongServer$Data.prototype.copy_zfdbqc$ = function (songs, error, results) {
    return new obtainResultForQueryInSongServer$Data(songs === void 0 ? this.songs : songs, error === void 0 ? this.error : error, results === void 0 ? this.results : results);
  };
  obtainResultForQueryInSongServer$Data.prototype.toString = function () {
    return 'Data(songs=' + Kotlin.toString(this.songs) + (', error=' + Kotlin.toString(this.error)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  obtainResultForQueryInSongServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  obtainResultForQueryInSongServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.error, other.error) && Kotlin.equals(this.results, other.results)))));
  };
  function obtainResultForQueryInSongServer(amount, query) {
    var tmp$;
    println('obtainResultForQueryInSongServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/search/?query=' + query + '&n=' + amount, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList_0(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i.id);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return result;
  }
  function obtainResultForQueryInUsersServer$Params(max_birth_time, min_reg_time, query, min_birth_time, max_reg_time) {
    this.max_birth_time = max_birth_time;
    this.min_reg_time = min_reg_time;
    this.query = query;
    this.min_birth_time = min_birth_time;
    this.max_reg_time = max_reg_time;
  }
  obtainResultForQueryInUsersServer$Params.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Params',
    interfaces: []
  };
  function obtainResultForQueryInUsersServer$Users(mail_visible, country, mail, birth_date, facebook, bio, register_date, instagram, nick, score, twitter, id, user) {
    this.mail_visible = mail_visible;
    this.country = country;
    this.mail = mail;
    this.birth_date = birth_date;
    this.facebook = facebook;
    this.bio = bio;
    this.register_date = register_date;
    this.instagram = instagram;
    this.nick = nick;
    this.score = score;
    this.twitter = twitter;
    this.id = id;
    this.user = user;
  }
  obtainResultForQueryInUsersServer$Users.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Users',
    interfaces: []
  };
  function obtainResultForQueryInUsersServer$Data(number, params, users) {
    this.number = number;
    this.params = params;
    this.users = users;
  }
  obtainResultForQueryInUsersServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  function obtainResultForQueryInUsersServer(amount, query) {
    var tmp$;
    println('obtainResultForQueryInUsersServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/search/?query=' + query + '&n=' + amount, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      tmp$ = toList_0(json.users).iterator();
      while (tmp$.hasNext()) {
        var one = tmp$.next();
        result.add_11rb$(ensureNotNull(obtainUserDataServerFromID_0(toLong(one.id), null)));
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return emptyList();
  }
  function obtainResultForQueryInPlaylistsServer(cantidad, query) {
    return ArrayList_init();
  }
  function obtainResultForQueryServer(cantidad, query, tipo) {
    var list = ArrayList_init();
    switch (tipo) {
      case 1:
        list.addAll_brywnq$(obtainResultForQueryInSongServer(cantidad, query));
        break;
      case 2:
        list.addAll_brywnq$(obtainResultForQueryInPlaylistsServer(cantidad, query));
        break;
      case 3:
        list.addAll_brywnq$(obtainResultForQueryInUsersServer(cantidad, query));
        break;
      default:list.addAll_brywnq$(obtainResultForQueryInSongServer(cantidad, query));
        list.addAll_brywnq$(obtainResultForQueryInPlaylistsServer(cantidad, query));
        list.addAll_brywnq$(obtainResultForQueryInUsersServer(cantidad, query));
        break;
    }
    return list;
  }
  function obtainPopularByGenreServer(cantidad) {
    return emptyList();
  }
  function isOtherSessionOpenFromSameUserServer$Data(error, size, songs) {
    this.error = error;
    this.size = size;
    this.songs = songs;
  }
  isOtherSessionOpenFromSameUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.component2 = function () {
    return this.size;
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.component3 = function () {
    return this.songs;
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.copy_74krkc$ = function (error, size, songs) {
    return new isOtherSessionOpenFromSameUserServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, songs === void 0 ? this.songs : songs);
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', songs=' + Kotlin.toString(this.songs)) + ')';
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    return result;
  };
  isOtherSessionOpenFromSameUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.songs, other.songs)))));
  };
  function isOtherSessionOpenFromSameUserServer(username, sessionToken) {
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/session_open?token=' + sessionToken, false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return true;
      }
       else if (equals(json.error, 'sessionClosed')) {
        return false;
      }
       else {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + req.status.toString());
    }
    return false;
  }
  function obtainLastSongListenedServer$Data(error, size, songs) {
    this.error = error;
    this.size = size;
    this.songs = songs;
  }
  obtainLastSongListenedServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainLastSongListenedServer$Data.prototype.component1 = function () {
    return this.error;
  };
  obtainLastSongListenedServer$Data.prototype.component2 = function () {
    return this.size;
  };
  obtainLastSongListenedServer$Data.prototype.component3 = function () {
    return this.songs;
  };
  obtainLastSongListenedServer$Data.prototype.copy_74krkc$ = function (error, size, songs) {
    return new obtainLastSongListenedServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, songs === void 0 ? this.songs : songs);
  };
  obtainLastSongListenedServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', songs=' + Kotlin.toString(this.songs)) + ')';
  };
  obtainLastSongListenedServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    return result;
  };
  obtainLastSongListenedServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.songs, other.songs)))));
  };
  function obtainLastSongListenedServer(username, sessionToken) {
    var tmp$;
    println('obtainLastSongListenedServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/songs/lastListened', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = toList(json.songs).iterator();
        while (tmp$.hasNext()) {
          var i = tmp$.next();
          var song = obtainSongFromID(i);
          if (song != null) {
            result.add_11rb$(song);
          }
        }
      }
      var index = get_lastIndex(result);
      if (index === -1) {
        return null;
      }
      return result.get_za3lpa$(index);
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function createPlaylistServer$DataList(creation_time, amount, author, id) {
    this.creation_time = creation_time;
    this.amount = amount;
    this.author = author;
    this.id = id;
  }
  createPlaylistServer$DataList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataList',
    interfaces: []
  };
  createPlaylistServer$DataList.prototype.component1 = function () {
    return this.creation_time;
  };
  createPlaylistServer$DataList.prototype.component2 = function () {
    return this.amount;
  };
  createPlaylistServer$DataList.prototype.component3 = function () {
    return this.author;
  };
  createPlaylistServer$DataList.prototype.component4 = function () {
    return this.id;
  };
  createPlaylistServer$DataList.prototype.copy_tmi9z9$ = function (creation_time, amount, author, id) {
    return new createPlaylistServer$DataList(creation_time === void 0 ? this.creation_time : creation_time, amount === void 0 ? this.amount : amount, author === void 0 ? this.author : author, id === void 0 ? this.id : id);
  };
  createPlaylistServer$DataList.prototype.toString = function () {
    return 'DataList(creation_time=' + Kotlin.toString(this.creation_time) + (', amount=' + Kotlin.toString(this.amount)) + (', author=' + Kotlin.toString(this.author)) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  createPlaylistServer$DataList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.creation_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.amount) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  createPlaylistServer$DataList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.creation_time, other.creation_time) && Kotlin.equals(this.amount, other.amount) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.id, other.id)))));
  };
  function createPlaylistServer$Data(error, list) {
    this.error = error;
    this.list = list;
  }
  createPlaylistServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  createPlaylistServer$Data.prototype.component1 = function () {
    return this.error;
  };
  createPlaylistServer$Data.prototype.component2 = function () {
    return this.list;
  };
  createPlaylistServer$Data.prototype.copy_ret7mq$ = function (error, list) {
    return new createPlaylistServer$Data(error === void 0 ? this.error : error, list === void 0 ? this.list : list);
  };
  createPlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', list=' + Kotlin.toString(this.list)) + ')';
  };
  createPlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    return result;
  };
  createPlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.list, other.list)))));
  };
  function createPlaylistServer(username, sessionToken, playlist) {
    println('createPlaylistServer');
    var req = new XMLHttpRequest();
    req.open('PUT', server + '/user-lists/' + username + '/create?token=' + sessionToken + '&title=' + playlist.name, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
       else {
        playlist.id = Kotlin.Long.fromInt(json.list.id);
        return Kotlin.Long.fromInt(json.list.id);
      }
    }
     else {
      Exception_init('Error');
    }
    return L_1;
  }
  function deletePlaylistServer$Data(error) {
    this.error = error;
  }
  deletePlaylistServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  deletePlaylistServer$Data.prototype.component1 = function () {
    return this.error;
  };
  deletePlaylistServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new deletePlaylistServer$Data(error === void 0 ? this.error : error);
  };
  deletePlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  deletePlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  deletePlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function deletePlaylistServer(username, sessionToken, playlist) {
    println('deletePlaylistServer');
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/user-lists/' + username + '/create?token=' + sessionToken + '&title=' + playlist.name, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
       else {
        Exception_init('Error');
      }
    }
  }
  function addSongToPlayListServer$Data(error) {
    this.error = error;
  }
  addSongToPlayListServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  addSongToPlayListServer$Data.prototype.component1 = function () {
    return this.error;
  };
  addSongToPlayListServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new addSongToPlayListServer$Data(error === void 0 ? this.error : error);
  };
  addSongToPlayListServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  addSongToPlayListServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  addSongToPlayListServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function addSongToPlayListServer(username, sessionToken, playlistId, song) {
    println('addSongToPlayListServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/user-lists/' + username + '/' + playlistId + '/add', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', toString(song.id))]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
  }
  function removeSongToPlayListServer$Data(error) {
    this.error = error;
  }
  removeSongToPlayListServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  removeSongToPlayListServer$Data.prototype.component1 = function () {
    return this.error;
  };
  removeSongToPlayListServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new removeSongToPlayListServer$Data(error === void 0 ? this.error : error);
  };
  removeSongToPlayListServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  removeSongToPlayListServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  removeSongToPlayListServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function removeSongToPlayListServer(username, sessionToken, playlistId, song) {
    println('removeSongToPlayListServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/user-lists/' + username + '/' + playlistId + '/remove', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', toString(song.id))]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
  }
  function updatePlaylistServer(username, sessionToken, playlist) {
    var tmp$, tmp$_0;
    var serverlist = obtainPlaylistDataServer(ensureNotNull(playlist.id));
    tmp$ = playlist.content.iterator();
    while (tmp$.hasNext()) {
      var song = tmp$.next();
      if (!ensureNotNull(serverlist).content.contains_11rb$(song)) {
        addSongToPlayListServer(username, new String_0(), ensureNotNull(playlist.id), song);
      }
    }
    tmp$_0 = ensureNotNull(serverlist).content.iterator();
    while (tmp$_0.hasNext()) {
      var song_0 = tmp$_0.next();
      if (!playlist.content.contains_11rb$(song_0)) {
        removeSongToPlayListServer(username, new String_0(), ensureNotNull(playlist.id), song_0);
      }
    }
  }
  function obtainGeneresServer() {
    return emptyList();
  }
  function obtainAlbumsFromUserServer$Data(error, size, albums) {
    this.error = error;
    this.size = size;
    this.albums = albums;
  }
  obtainAlbumsFromUserServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  obtainAlbumsFromUserServer$Data.prototype.component1 = function () {
    return this.error;
  };
  obtainAlbumsFromUserServer$Data.prototype.component2 = function () {
    return this.size;
  };
  obtainAlbumsFromUserServer$Data.prototype.component3 = function () {
    return this.albums;
  };
  obtainAlbumsFromUserServer$Data.prototype.copy_74krkc$ = function (error, size, albums) {
    return new obtainAlbumsFromUserServer$Data(error === void 0 ? this.error : error, size === void 0 ? this.size : size, albums === void 0 ? this.albums : albums);
  };
  obtainAlbumsFromUserServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', size=' + Kotlin.toString(this.size)) + (', albums=' + Kotlin.toString(this.albums)) + ')';
  };
  obtainAlbumsFromUserServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.albums) | 0;
    return result;
  };
  obtainAlbumsFromUserServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.albums, other.albums)))));
  };
  function obtainAlbumsFromUserServer(username) {
    var tmp$, tmp$_0;
    println('obtainAlbumsFromUserServer');
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/albums', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.albums;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var album = obtainAlbumFromID(i);
          if (album != null) {
            result.add_11rb$(album);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
    return emptyList();
  }
  function createAlbumsServer$DataAlbum(publish_year, image, update_time, user_id, songs, id, title) {
    this.publish_year = publish_year;
    this.image = image;
    this.update_time = update_time;
    this.user_id = user_id;
    this.songs = songs;
    this.id = id;
    this.title = title;
  }
  createAlbumsServer$DataAlbum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataAlbum',
    interfaces: []
  };
  createAlbumsServer$DataAlbum.prototype.component1 = function () {
    return this.publish_year;
  };
  createAlbumsServer$DataAlbum.prototype.component2 = function () {
    return this.image;
  };
  createAlbumsServer$DataAlbum.prototype.component3 = function () {
    return this.update_time;
  };
  createAlbumsServer$DataAlbum.prototype.component4 = function () {
    return this.user_id;
  };
  createAlbumsServer$DataAlbum.prototype.component5 = function () {
    return this.songs;
  };
  createAlbumsServer$DataAlbum.prototype.component6 = function () {
    return this.id;
  };
  createAlbumsServer$DataAlbum.prototype.component7 = function () {
    return this.title;
  };
  createAlbumsServer$DataAlbum.prototype.copy_kjd391$ = function (publish_year, image, update_time, user_id, songs, id, title) {
    return new createAlbumsServer$DataAlbum(publish_year === void 0 ? this.publish_year : publish_year, image === void 0 ? this.image : image, update_time === void 0 ? this.update_time : update_time, user_id === void 0 ? this.user_id : user_id, songs === void 0 ? this.songs : songs, id === void 0 ? this.id : id, title === void 0 ? this.title : title);
  };
  createAlbumsServer$DataAlbum.prototype.toString = function () {
    return 'DataAlbum(publish_year=' + Kotlin.toString(this.publish_year) + (', image=' + Kotlin.toString(this.image)) + (', update_time=' + Kotlin.toString(this.update_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', songs=' + Kotlin.toString(this.songs)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  createAlbumsServer$DataAlbum.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.publish_year) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.update_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.songs) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  createAlbumsServer$DataAlbum.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.publish_year, other.publish_year) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.update_time, other.update_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title)))));
  };
  function createAlbumsServer$Data(album, error) {
    this.album = album;
    this.error = error;
  }
  createAlbumsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  createAlbumsServer$Data.prototype.component1 = function () {
    return this.album;
  };
  createAlbumsServer$Data.prototype.component2 = function () {
    return this.error;
  };
  createAlbumsServer$Data.prototype.copy_rqgn41$ = function (album, error) {
    return new createAlbumsServer$Data(album === void 0 ? this.album : album, error === void 0 ? this.error : error);
  };
  createAlbumsServer$Data.prototype.toString = function () {
    return 'Data(album=' + Kotlin.toString(this.album) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  createAlbumsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.album) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  createAlbumsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.album, other.album) && Kotlin.equals(this.error, other.error)))));
  };
  function createAlbumsServer(username, sessionToken, album) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + username + '/create', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('title', album.name), to('year', album.releaseDate.getFullYear().toString())]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
       else {
        album.id = Kotlin.Long.fromInt(json.album.id);
        album.creator = ensureNotNull(obtainUserDataServerFromID_0(json.album.user_id, null));
        return Kotlin.Long.fromInt(json.album.id);
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
    return L_1;
  }
  function addSongToAlbumServer$Data(error) {
    this.error = error;
  }
  addSongToAlbumServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  addSongToAlbumServer$Data.prototype.component1 = function () {
    return this.error;
  };
  addSongToAlbumServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new addSongToAlbumServer$Data(error === void 0 ? this.error : error);
  };
  addSongToAlbumServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  addSongToAlbumServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  addSongToAlbumServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function addSongToAlbumServer(username, sessionToken, albumId, song) {
    println('addSongToAlbumServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + username + '/' + albumId + '/add', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', toString(song.id))]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
  }
  function removeSongToAlbumServer$Data(error) {
    this.error = error;
  }
  removeSongToAlbumServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  removeSongToAlbumServer$Data.prototype.component1 = function () {
    return this.error;
  };
  removeSongToAlbumServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new removeSongToAlbumServer$Data(error === void 0 ? this.error : error);
  };
  removeSongToAlbumServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  removeSongToAlbumServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  removeSongToAlbumServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function removeSongToAlbumServer(username, sessionToken, albumId, song) {
    println('removeSongToAlbumServers');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + username + '/' + albumId + '/delete', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('songId', toString(song.id))]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
  }
  function updateAlbumsServer(username, sessionToken, album) {
    var tmp$, tmp$_0;
    var serverlist = obtainAlbumFromID(ensureNotNull(album.id));
    tmp$ = album.content.iterator();
    while (tmp$.hasNext()) {
      var song = tmp$.next();
      if (!ensureNotNull(serverlist).content.contains_11rb$(song)) {
        addSongToPlayListServer(username, new String_0(), ensureNotNull(album.id), song);
      }
    }
    tmp$_0 = ensureNotNull(serverlist).content.iterator();
    while (tmp$_0.hasNext()) {
      var song_0 = tmp$_0.next();
      if (!album.content.contains_11rb$(song_0)) {
        removeSongToPlayListServer(username, new String_0(), ensureNotNull(album.id), song_0);
      }
    }
  }
  function deleteAlbumsServer$Data(error) {
    this.error = error;
  }
  deleteAlbumsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  deleteAlbumsServer$Data.prototype.component1 = function () {
    return this.error;
  };
  deleteAlbumsServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new deleteAlbumsServer$Data(error === void 0 ? this.error : error);
  };
  deleteAlbumsServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  deleteAlbumsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  deleteAlbumsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function deleteAlbumsServer(username, sessionToken, album) {
    println('deleteAlbumsServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + toString(album.id) + '/delete', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('nick', username), to('token', sessionToken)]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
       else {
        return true;
      }
    }
     else {
      Exception_init('Error ' + toString(req.response));
    }
    return false;
  }
  function isUserAdmin(username, sessionToken) {
    var user = obtainUserDataServer_0(username, sessionToken);
    if (ensureNotNull(user).admin == null) {
      return false;
    }
     else {
      return ensureNotNull(user.admin);
    }
  }
  function verifyUser$Data(error) {
    this.error = error;
  }
  verifyUser$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  verifyUser$Data.prototype.component1 = function () {
    return this.error;
  };
  verifyUser$Data.prototype.copy_61zpoe$ = function (error) {
    return new verifyUser$Data(error === void 0 ? this.error : error);
  };
  verifyUser$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  verifyUser$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  verifyUser$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function verifyUser(username, admin, sessionToken, verify) {
    println('verifyUser');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + username + '/verify', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('self', admin), to('verify', verify.toString())]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function deleteSongServer$Data(error) {
    this.error = error;
  }
  deleteSongServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  deleteSongServer$Data.prototype.component1 = function () {
    return this.error;
  };
  deleteSongServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new deleteSongServer$Data(error === void 0 ? this.error : error);
  };
  deleteSongServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  deleteSongServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  deleteSongServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function deleteSongServer(username, sessionToken, song) {
    println('deleteSongServer');
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/' + toString(song.id) + '/delete', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = createForm(mapOf_0([to('token', sessionToken), to('nick', username)]));
    req.send(data);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        throw Exception_init(json.error);
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function doUpdateAccountServer$Data(error) {
    this.error = error;
  }
  doUpdateAccountServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  doUpdateAccountServer$Data.prototype.component1 = function () {
    return this.error;
  };
  doUpdateAccountServer$Data.prototype.copy_qk3xy8$ = function (error) {
    return new doUpdateAccountServer$Data(error === void 0 ? this.error : error);
  };
  doUpdateAccountServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  doUpdateAccountServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  doUpdateAccountServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function doUpdateAccountServer(user, sessionToken) {
    var tmp$;
    var username = user.name;
    var update = '{"update":{"username":';
    update += 'username:' + toString(username) + ',mail:' + toString(user.email) + ',bio:' + toString(user.biography) + ',birth_date:' + toString(user.birthDate) + '}}';
    println('deleteSongServer');
    var req = new XMLHttpRequest();
    req.open('PUT', server + '/users/' + toString(username) + '?token=' + sessionToken + '&body={' + update + '}', false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      println(req.responseText);
      var json = JSON.parse(req.responseText);
      tmp$ = iterator(Object.keys(json.error));
      while (tmp$.hasNext()) {
        var key = tmp$.next();
        if (!equals(json.error[key], 'ok')) {
          throw Exception_init(toString(json.error[key]));
        }
      }
    }
     else {
      throw Exception_init('Error ' + req.status);
    }
  }
  function main(args) {
  }
  function test_user() {
    try {
      var user = User_init('testJS', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token = doSignUpServer(user);
      var token2 = doLoginServer('testJS', '1234567');
      println('Check if equals ' + equals(token, token2).toString());
      println('Check if deleted ' + toString(doDeleteAccountServer('testJS', token)));
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
        return false;
      }
       else
        throw e;
    }
  }
  function test_logout() {
    try {
      var user = User_init('testJS', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token = doSignUpServer(user);
      doLogoutServer('testJS', token);
      try {
        if (doDeleteAccountServer('testJS', token)) {
          println('Test Error');
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println(e);
          println('Test ' + equals(e.message, 'invalidToken').toString());
        }
         else
          throw e;
      }
      var token2 = doLoginServer('testJS', '1234567');
      if (doDeleteAccountServer('testJS', token2)) {
        println('PASSED');
        return true;
      }
       else {
        return false;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        var token_0 = doLoginServer('testJS', '1234567');
        doDeleteAccountServer('testJS', token_0);
        return false;
      }
       else
        throw e;
    }
  }
  function test_following() {
    try {
      var user = User_init('testJS1', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token1 = doSignUpServer(user);
      var following = getFollowedUsersServer('testJS1');
      if (!following.isEmpty()) {
        return false;
      }
      var user2 = User_init('testJS2', '1234567');
      user2.name = 'Test2';
      user2.email = 'test2@test.com';
      var token = doSignUpServer(user2);
      if (!addFollowerToUserServer('testJS1', token1, 'testJS2')) {
        return false;
      }
      if (!isUserFollowedByUserServer('testJS1', 'testJS2')) {
        return false;
      }
      if (isUserFollowedByUserServer('testJS2', 'testJS1')) {
        return false;
      }
      var number = getNumberOfFollowersOfUserServer('testJS2');
      if (number.toInt() !== 1) {
        return false;
      }
      following = getFollowersOfUserServer('testJS2');
      if (following.size !== 1 || !equals(following.get_za3lpa$(0).username, 'testJS1')) {
        return false;
      }
      following = getFollowedUsersServer('testJS1');
      if (following.size !== 1 || !equals(following.get_za3lpa$(0).username, 'testJS2')) {
        return false;
      }
      if (!deleteFollowerToUserServer('testJS1', '', 'testJS2')) {
        return false;
      }
      following = getFollowedUsersServer('testJS1');
      if (!following.isEmpty()) {
        return false;
      }
      token = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token);
      token = doLoginServer('testJS2', '1234567');
      doDeleteAccountServer('testJS2', token);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      }
       else
        throw e;
    }
    finally {
      var token_0 = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token_0);
      token_0 = doLoginServer('testJS2', '1234567');
      doDeleteAccountServer('testJS2', token_0);
    }
    return false;
  }
  function test_album() {
    try {
      var user = User_init('testJS1', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token1 = doSignUpServer(user);
      var albums = obtainAlbumsFromUserServer('testJS1');
      if (!albums.isEmpty()) {
        return false;
      }
      var album = new Album(L0, 'testJSAlbum', ensureNotNull(obtainUserDataServer_0('testJS1', null)), new Date(Date.now()), '', ArrayList_init());
      createAlbumsServer('testJS1', token1, album);
      albums = obtainAlbumsFromUserServer('testJS1');
      if (albums.size === 0 || !equals(albums.get_za3lpa$(0).name, 'testJSAlbum')) {
        return false;
      }
      if (!deleteAlbumsServer('testJS1', token1, album)) {
        return false;
      }
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      }
       else
        throw e;
    }
    finally {
      var token = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token);
    }
    return false;
  }
  function testfav() {
    try {
      var user = User_init('testJS1', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token1 = doSignUpServer(user);
      var albums = obtainAlbumsFromUserServer('testJS1');
      if (!albums.isEmpty()) {
        return false;
      }
      var song = new Song(L_1, 'TestJSSong', 'ESP', '', L0, null, '', null);
      uploadSongServer('testJS1', token1, song);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      }
       else
        throw e;
    }
    finally {
      var token = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token);
    }
    return false;
  }
  function test_songlist() {
    try {
      var user = User_init('testJS1', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token1 = doSignUpServer(user);
      var songlist = getFollowedPlaylistsServer('testJS1');
      if (!songlist.isEmpty()) {
        return false;
      }
      var playlist = new Playlist(L_1, 'myPlaylist', user, '', emptyList(), emptyList());
      createPlaylistServer('testJS1', token1, playlist);
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      }
       else
        throw e;
    }
    finally {
      var token = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token);
    }
    return false;
  }
  function test_songs() {
    try {
      var user = User_init('testJS1', '1234567');
      user.name = 'Test1';
      user.email = 'test@test.com';
      var token1 = doSignUpServer(user);
      var songs = obtainSongsFromUserServer('testJS1');
      if (!songs.isEmpty()) {
        return false;
      }
      var song = new Song(L_1, 'TestJSSong', 'ESP', '', L0, null, '', null);
      uploadSongServer('testJS1', token1, song);
      songs = obtainSongsFromUserServer('testJS1');
      if (songs.size !== 1 || !equals(songs.get_za3lpa$(0).name, 'TestJSSong')) {
        return false;
      }
      return true;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        println(e);
      }
       else
        throw e;
    }
    finally {
      var token = doLoginServer('testJS1', '1234567');
      doDeleteAccountServer('testJS1', token);
    }
    return false;
  }
  function main_0(args) {
    var s3 = s3Connection();
    ListBuckets(s3);
  }
  function Album(id, name, creator, releaseDate, artLocationUri, content) {
    if (id === void 0)
      id = null;
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.releaseDate = releaseDate;
    this.artLocationUri = artLocationUri;
    this.content = content;
  }
  Album.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Album',
    interfaces: []
  };
  function Playlist(id, name, creator, artLocationUri, content, followed) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.artLocationUri = artLocationUri;
    this.content = content;
    this.followed = followed;
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
  function Song(id, name, country, locationUri, duration, album, genere, lyricsPath) {
    this.id = id;
    this.name = name;
    this.country = country;
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
  function User(username) {
    this.username = username;
    this.name = null;
    this.pictureLocationUri = null;
    this.biography = null;
    this.email = null;
    this.password = null;
    this.birthDate = null;
    this.verifiedAccount = false;
    this.twitterAccount = null;
    this.facebookAccount = null;
    this.instagramAccount = null;
    this.country = null;
    this.admin = false;
    this.shareLink = 'http://155.210.13.105:8006/profile?user=' + this.username;
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
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: [Recommendation]
  };
  function User_init(username, password, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this, username);
    $this.password = password;
    return $this;
  }
  function User_init_0(username, name, pictureLocationUri, verifiedAccount, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this, username);
    $this.name = name;
    $this.verifiedAccount = verifiedAccount;
    $this.pictureLocationUri = pictureLocationUri;
    return $this;
  }
  function User_init_1(username, name, pictureLocationUri, verifiedAccount, email, biography, birthDate, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this, username);
    $this.name = name;
    $this.email = email;
    $this.pictureLocationUri = pictureLocationUri;
    $this.verifiedAccount = verifiedAccount;
    $this.biography = biography;
    $this.birthDate = birthDate;
    return $this;
  }
  function User_init_2(username, name, pictureLocationUri, email, biography, birthDate, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this, username);
    $this.name = name;
    $this.email = email;
    $this.pictureLocationUri = pictureLocationUri;
    $this.verifiedAccount = false;
    $this.biography = biography;
    $this.birthDate = birthDate;
    return $this;
  }
  function User_init_3(username, password, name, pictureLocationUri, email, biography, birthDate, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this, username);
    $this.password = password;
    $this.name = name;
    $this.email = email;
    $this.pictureLocationUri = pictureLocationUri;
    $this.verifiedAccount = false;
    $this.biography = biography;
    $this.birthDate = birthDate;
    return $this;
  }
  function ServerEmulator() {
    ServerEmulator_instance = this;
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
  function InstrumentedTestBackEndSpreadYoutMusic() {
  }
  InstrumentedTestBackEndSpreadYoutMusic.prototype.UserRequestTest = function () {
    var username = 'usuarioPruebasAndroid223';
    var username2 = 'usuarioPruebasAndroid334';
    var token;
    var token2;
    var password = '1234';
    var user = User_init_3(username, password, 'Prueba', 'd', 'prueba@prupru.com', null, new Date(1998, 1, 1));
    var user2 = User_init_3(username2, password, 'Prueba', 'd', 'prueb2a@prupru.com', null, new Date(1998, 1, 1));
    try {
      token = doSignUpServer(user);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token = doLoginServer(username, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    try {
      token2 = doSignUpServer(user2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token2 = doLoginServer(username2, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    doLogoutServer(username, token);
    token = doLoginServer(username, password);
    obtainUserDataServer_0(username, '');
    obtainUserDataServer_0(username, token);
    try {
      addFollowerToUserServer(username, token, username2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'alreadyFollowing')) {
          println(e.message);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    if (getFollowedUsersServer(username).size !== 1)
      throw Exception_init('getFollowedUsers');
    if (!isUserFollowedByUserServer(username, username2))
      throw Exception_init('isUserFollowedByUserServer');
    if (!equals(getNumberOfFollowersOfUserServer(username2), L1))
      throw Exception_init('getNumberOfFollowersOfUserServer');
    deleteFollowerToUserServer(username, token, username2);
    doDeleteAccountServer(username, token);
    doDeleteAccountServer(username2, token2);
  };
  InstrumentedTestBackEndSpreadYoutMusic.prototype.AlbumRequestTest = function () {
    var username = 'usuarioPruebasAndroid555';
    var username2 = 'usuarioPruebasAndroid444';
    var token;
    var token2;
    var password = '1234';
    var user = User_init_3(username, password, 'Prueba', 'd', 'prueba@prupru.com', null, new Date(1998, 1, 1));
    var user2 = User_init_3(username2, password, 'Prueba', 'd', 'prueb2a@prupru.com', null, new Date(1998, 1, 1));
    var album = new Album(null, 'Spiderman', user, new Date(1998, 1, 1), 'sdf', emptyList());
    try {
      token = doSignUpServer(user);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token = doLoginServer(username, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    try {
      token2 = doSignUpServer(user2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token2 = doLoginServer(username2, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    var id = createAlbumsServer(username, token, album);
    obtainAlbumFromID(id);
    var song = new Song(null, 'nobre', 'df', '', L0, null, null, '');
    var idS = uploadSongServer(username, token, song);
    var songD = obtainSongFromID(idS);
    addSongToAlbumServer(username, token, id, song);
    var album2 = obtainAlbumFromID(id);
    if (ensureNotNull(album2).content.size !== 1)
      throw Exception_init('obtainAlbumsFromUserServer');
    removeSongToAlbumServer(username, token, id, song);
    album2 = obtainAlbumFromID(id);
    if (!ensureNotNull(album2).content.isEmpty())
      throw Exception_init('obtainAlbumsFromUserServer');
    deleteAlbumsServer(username, token, album2);
    doDeleteAccountServer(username, token);
    doDeleteAccountServer(username2, token2);
  };
  InstrumentedTestBackEndSpreadYoutMusic.prototype.SongsRequestTest = function () {
    var username = 'usuarioPruebasAndroid666';
    var username2 = 'usuarioPruebasAndroid777';
    var token;
    var token2;
    var password = '1234';
    var user = User_init_3(username, password, 'Prueba', 'd', 'prueba@prupru.com', null, new Date(1998, 1, 1));
    var user2 = User_init_3(username2, password, 'Prueba', 'd', 'prueb2a@prupru.com', null, new Date(1998, 1, 1));
    var album = new Album(null, 'Spiderman', user, new Date(1998, 1, 1), 'sdf', emptyList());
    try {
      token = doSignUpServer(user);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token = doLoginServer(username, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    try {
      token2 = doSignUpServer(user2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token2 = doLoginServer(username2, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    var id = createAlbumsServer(username, token, album);
    var albumpass = obtainAlbumFromID(id);
    var song = new Song(null, 'nobre', 'df', '', L0, ensureNotNull(albumpass), 'ds', null);
    var idS = uploadSongServer(username, token, song);
    var songD = obtainSongFromID(idS);
    addReproductionToSongServer(username2, token2, idS);
    setSongFavoutireServer(username2, token2, idS);
    if (!isSongFavoutireByUserServer(username2, token2, idS))
      throw Exception_init('isSongFavoutireByUserServer');
    obtainFavouriteSongsByUserServer(username2, token2);
    obtainLastSongListenedServer(username2, token2);
    unSetSongFavoutireServer(username2, token2, idS);
    deleteSongServer(username, token, ensureNotNull(songD));
    doDeleteAccountServer(username, token);
    doDeleteAccountServer(username2, token2);
  };
  InstrumentedTestBackEndSpreadYoutMusic.prototype.PlaylistRequestTest = function () {
    var username = 'usuarioPruebasAndroid888';
    var username2 = 'usuarioPruebasAndroid999';
    var token;
    var token2;
    var password = '1234';
    var user = User_init_3(username, password, 'Prueba', 'd', 'prueba@prupru.com', null, new Date(1998, 1, 1));
    var user2 = User_init_3(username2, password, 'Prueba', 'd', 'prueb2a@prupru.com', null, new Date(1998, 1, 1));
    var album = new Album(null, 'Spiderman', user, new Date(1998, 1, 1), 'sdf', emptyList());
    try {
      token = doSignUpServer(user);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token = doLoginServer(username, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    try {
      token2 = doSignUpServer(user2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token2 = doLoginServer(username2, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    var id = createAlbumsServer(username, token, album);
    var albumpass = obtainAlbumFromID(id);
    var song = new Song(null, 'nobre', 'df', '', L0, ensureNotNull(albumpass), null, '');
    var idS = uploadSongServer(username, token, song);
    var songD = obtainSongFromID(idS);
    var songList = ArrayList_init();
    songList.add_11rb$(ensureNotNull(songD));
    var playlist = new Playlist(null, 'nombre', albumpass.creator, 'sadas', songList, emptyList());
    var pid = createPlaylistServer(playlist.creator.username, token, playlist);
    var playlistData = obtainPlaylistDataServer(pid);
    addFollowerToPlaylistServer(username2, token2, pid);
    if (!isPlaylistFollowedByUserServer(username2, pid))
      throw Exception_init('isPlaylistFollowedByUserServer');
    getNumberOfFollowersOfPlaylistServer(pid);
    getFollowedPlaylistsServer(username2);
    obtainUpdatedPlaylistsFollowedByUserServer(username2, token2, L30);
    deleteFollowerToPlaylistServer(username2, token2, pid);
    deleteSongServer(username, token, songD);
    deletePlaylistServer(playlist.creator.username, token, ensureNotNull(playlistData));
    doDeleteAccountServer(username, token);
    doDeleteAccountServer(username2, token2);
  };
  InstrumentedTestBackEndSpreadYoutMusic.prototype.ComplexRequestsTest = function () {
    var username = 'usuarioPruebasAndroid10101r';
    var username2 = 'usuarioPruebasAndroid1010d';
    var token;
    var token2;
    var password = '1234';
    var user = User_init_3(username, password, 'Prueba', 'd', 'prueba@prupru.com', null, new Date(1998, 1, 1));
    var user2 = User_init_3(username2, password, 'Prueba', 'd', 'prueb2a@prupru.com', null, new Date(1998, 1, 1));
    var album = new Album(null, 'Spiderman', user, new Date(1998, 1, 1), 'sdf', emptyList());
    try {
      token = doSignUpServer(user);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token = doLoginServer(username, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    try {
      token2 = doSignUpServer(user2);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        if (equals(e.message, 'userExists')) {
          token2 = doLoginServer(username2, password);
        }
         else {
          throw Exception_init_0(e);
        }
      }
       else
        throw e;
    }
    var id = createAlbumsServer(username, token, album);
    var albumpass = obtainAlbumFromID(id);
    var song = new Song(null, 'nobre', 'df', '', L0, album, null, '');
    var idS = uploadSongServer(username, token, song);
    var songD = obtainSongFromID(idS);
    var songList = ArrayList_init();
    songList.add_11rb$(ensureNotNull(songD));
    var playlist = new Playlist(null, 'nombre', ensureNotNull(albumpass).creator, 'sadas', songList, emptyList());
    var pid = createPlaylistServer(playlist.creator.username, token, playlist);
    var playlistData = obtainPlaylistDataServer(pid);
    addFollowerToPlaylistServer(username2, token2, pid);
    if (!isPlaylistFollowedByUserServer(username2, pid))
      throw Exception_init('isPlaylistFollowedByUserServer');
    getNumberOfFollowersOfPlaylistServer(pid);
    getFollowedPlaylistsServer(username2);
    obtainUpdatedPlaylistsFollowedByUserServer(username2, token2, L30);
    deleteFollowerToPlaylistServer(username2, token2, pid);
    obtainSongsFromUserServer(albumpass.creator.username);
    obtainPlaylistsFromUserServer(albumpass.creator.username);
    obtainRecomendationsForUserServer(username, token, L20);
    obtainResultForQueryServer(L20, 'gosepumbs', null);
    obtainResultForQueryServer(L20, 'gosepumbs', 1);
    obtainPopularByGenreServer(L20);
    isOtherSessionOpenFromSameUserServer(username, token);
    obtainGeneresServer();
    doDeleteAccountServer(username, token);
    doDeleteAccountServer(username2, token2);
  };
  InstrumentedTestBackEndSpreadYoutMusic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstrumentedTestBackEndSpreadYoutMusic',
    interfaces: []
  };
  var package$apis = _.apis || (_.apis = {});
  package$apis.createForm_alv746$ = createForm;
  Object.defineProperty(package$apis, 'server', {
    get: function () {
      return server;
    },
    set: function (value) {
      server = value;
    }
  });
  Object.defineProperty(package$apis, 's3', {
    get: function () {
      return s3;
    },
    set: function (value) {
      s3 = value;
    }
  });
  package$apis.obtainAlbumFromID_s8cxhz$ = obtainAlbumFromID;
  package$apis.obtainSongFromID_2gd3um$ = obtainSongFromID;
  package$apis.obtainUserDataServerFromID_s8cxhz$ = obtainUserDataServerFromID;
  package$apis.obtainUserDataServerFromID_tqiios$ = obtainUserDataServerFromID_0;
  package$apis.obtainUserDataServer_61zpoe$ = obtainUserDataServer;
  package$apis.obtainUserDataServer_jyasbz$ = obtainUserDataServer_0;
  package$apis.obtainSongsFromUserServer_61zpoe$ = obtainSongsFromUserServer;
  package$apis.obtainPlaylistDataServer_s8cxhz$ = obtainPlaylistDataServer;
  package$apis.obtainPlaylistsFromUserServer_61zpoe$ = obtainPlaylistsFromUserServer;
  package$apis.isServerOnline = isServerOnline;
  package$apis.doLoginServer_puj7f4$ = doLoginServer;
  package$apis.doSignUpServer_m5kwz3$ = doSignUpServer;
  package$apis.doDeleteAccountServer_puj7f4$ = doDeleteAccountServer;
  package$apis.doLogoutServer_puj7f4$ = doLogoutServer;
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
  package$apis.uploadSongServer_jecffn$ = uploadSongServer;
  package$apis.obtainFavouriteSongsByUserServer_puj7f4$ = obtainFavouriteSongsByUserServer;
  package$apis.numbeOfSavoriteSongsByUserServer_puj7f4$ = numbeOfSavoriteSongsByUserServer;
  package$apis.obtainRecomendationsForUserServer_18v4st$ = obtainRecomendationsForUserServer;
  package$apis.obtainPopularSongsServer_s8cxhz$ = obtainPopularSongsServer;
  package$apis.obtainNewSongsFromFollowedArtistOfUserServer_18v4st$ = obtainNewSongsFromFollowedArtistOfUserServer;
  package$apis.obtainTrendSongsServer_s8cxhz$ = obtainTrendSongsServer;
  package$apis.obtainTrendSongsInUserCountryServer_18v4st$ = obtainTrendSongsInUserCountryServer;
  package$apis.obtainUpdatedPlaylistsFollowedByUserServer_18v4st$ = obtainUpdatedPlaylistsFollowedByUserServer;
  package$apis.obtainResultForQueryServer_4k4yms$ = obtainResultForQueryServer;
  package$apis.obtainPopularByGenreServer_s8cxhz$ = obtainPopularByGenreServer;
  package$apis.isOtherSessionOpenFromSameUserServer_puj7f4$ = isOtherSessionOpenFromSameUserServer;
  package$apis.obtainLastSongListenedServer_puj7f4$ = obtainLastSongListenedServer;
  package$apis.createPlaylistServer_l2qie2$ = createPlaylistServer;
  package$apis.deletePlaylistServer_l2qie2$ = deletePlaylistServer;
  package$apis.addSongToPlayListServer_x57oka$ = addSongToPlayListServer;
  package$apis.removeSongToPlayListServer_x57oka$ = removeSongToPlayListServer;
  package$apis.updatePlaylistServer_l2qie2$ = updatePlaylistServer;
  package$apis.obtainGeneresServer = obtainGeneresServer;
  package$apis.obtainAlbumsFromUserServer_61zpoe$ = obtainAlbumsFromUserServer;
  package$apis.createAlbumsServer_xdras9$ = createAlbumsServer;
  package$apis.addSongToAlbumServer_x57oka$ = addSongToAlbumServer;
  package$apis.removeSongToAlbumServer_x57oka$ = removeSongToAlbumServer;
  package$apis.updateAlbumsServer_xdras9$ = updateAlbumsServer;
  package$apis.deleteAlbumsServer_xdras9$ = deleteAlbumsServer;
  package$apis.isUserAdmin_puj7f4$ = isUserAdmin;
  package$apis.verifyUser_shg59h$ = verifyUser;
  package$apis.deleteSongServer_jecffn$ = deleteSongServer;
  package$apis.doUpdateAccountServer_oqo341$ = doUpdateAccountServer;
  var package$controller = _.controller || (_.controller = {});
  package$controller.main_kand9s$ = main;
  _.test_user = test_user;
  _.test_logout = test_logout;
  _.test_following = test_following;
  _.test_album = test_album;
  _.testfav = testfav;
  _.test_songlist = test_songlist;
  _.test_songs = test_songs;
  _.main_kand9s$ = main_0;
  var package$models = _.models || (_.models = {});
  package$models.Album = Album;
  package$models.Playlist = Playlist;
  package$models.Recommendation = Recommendation;
  package$models.Song = Song;
  package$models.User_init_puj7f4$ = User_init;
  package$models.User_init_ii6ut2$ = User_init_0;
  package$models.User_init_jxwrzd$ = User_init_1;
  package$models.User_init_op6446$ = User_init_2;
  package$models.User_init_2cpulk$ = User_init_3;
  package$models.User = User;
  var package$test = _.test || (_.test = {});
  Object.defineProperty(package$test, 'ServerEmulator', {
    get: ServerEmulator_getInstance
  });
  package$test.InstrumentedTestBackEndSpreadYoutMusic = InstrumentedTestBackEndSpreadYoutMusic;
  server = 'http://155.210.13.105:7800';
  dataServerAdress = 'http://155.210.13.105:7480';
  songLocationUploadPrefix = 'song_';
  songLyricsUploadPrefix = 'lyric_';
  userUploadPrefix = 'user_';
  albumUploadPrefix = 'album_';
  playlistUploadPrefix = 'playlist_';
  s3 = null;
  main_0([]);
  Kotlin.defineModule('KOTLINJS', _);
  return _;
}(typeof KOTLINJS === 'undefined' ? {} : KOTLINJS, kotlin);

//# sourceMappingURL=KOTLINJS.js.map
