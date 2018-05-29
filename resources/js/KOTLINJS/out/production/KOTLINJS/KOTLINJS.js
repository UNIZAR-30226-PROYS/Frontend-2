if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KOTLINJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KOTLINJS'.");
}
var KOTLINJS = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var String_0 = String;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var equals = Kotlin.equals;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var L0 = Kotlin.Long.ZERO;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var L4 = Kotlin.Long.fromInt(4);
  var L1 = Kotlin.Long.ONE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var L2 = Kotlin.Long.fromInt(2);
  var L103000 = Kotlin.Long.fromInt(103000);
  var L132000 = Kotlin.Long.fromInt(132000);
  var Pair = Kotlin.kotlin.Pair;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function Data2(A) {
    this.A = A;
  }
  Data2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data2',
    interfaces: []
  };
  Data2.prototype.component1 = function () {
    return this.A;
  };
  Data2.prototype.copy_61zpoe$ = function (A) {
    return new Data2(A === void 0 ? this.A : A);
  };
  Data2.prototype.toString = function () {
    return 'Data2(A=' + Kotlin.toString(this.A) + ')';
  };
  Data2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.A) | 0;
    return result;
  };
  Data2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.A, other.A))));
  };
  function Data(a, b) {
    this.a = a;
    this.b = b;
  }
  Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  Data.prototype.component1 = function () {
    return this.a;
  };
  Data.prototype.component2 = function () {
    return this.b;
  };
  Data.prototype.copy_jxyw2u$ = function (a, b) {
    return new Data(a === void 0 ? this.a : a, b === void 0 ? this.b : b);
  };
  Data.prototype.toString = function () {
    return 'Data(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + ')';
  };
  Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    return result;
  };
  Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b)))));
  };
  function test_signup() {
    var user = User_init('test1', '1234567');
    user.name = 'Test1';
    user.email = 'test@test.com';
    var result = doSignUpServer(user);
    println(result);
  }
  function test_login() {
    var result = doLoginServer('test1', '1234567');
    println(result);
  }
  function test_detelete() {
    var result = doDeleteAccountServer('test1', 'w2cigv17h2q6w6ly');
    println(result);
  }
  function main(args) {
    test_detelete();
  }
  function createForm(mapa) {
    var tmp$;
    var result = new String_0();
    tmp$ = mapa.entries.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      println(i);
      if (i.value != null) {
        if (result.length === 0) {
          result = i.key + '=' + toString(i.value);
        }
         else {
          var $receiver = result;
          var str = '&' + i.key + '=' + toString(i.value);
          result = $receiver.concat(str);
        }
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
  function isServerOnline() {
    try {
      var req = new XMLHttpRequest();
      req.open('GET', server + '/users/lAngelP', false);
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
    var id = user.id;
    var nick = user.username;
    var pass = user.password;
    var email = user.email;
    var user_0 = user.name;
    var birth = null;
    var data = createForm(mapOf_0([to('mail', email), to('pass0', pass), to('pass1', pass), to('user', user_0), to('birth', birth)]));
    var req = new XMLHttpRequest();
    req.open('POST', server + '/users/' + toString(nick) + '/signup?', false);
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
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/users/' + user + '?token=' + sessionToken, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
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
    req.open('DELETE', server + '/users/' + username + '?token=' + sessionToken, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (!equals(json.error, 'ok')) {
        Exception_init(json.error);
      }
    }
  }
  function obtainUserDataServer$UserData(nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram) {
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
  obtainUserDataServer$UserData.prototype.copy_nrxf3w$ = function (nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram) {
    return new obtainUserDataServer$UserData(nick === void 0 ? this.nick : nick, mail_visible === void 0 ? this.mail_visible : mail_visible, country === void 0 ? this.country : country, mail === void 0 ? this.mail : mail, birth_date === void 0 ? this.birth_date : birth_date, verified === void 0 ? this.verified : verified, bio === void 0 ? this.bio : bio, register_date === void 0 ? this.register_date : register_date, id === void 0 ? this.id : id, user === void 0 ? this.user : user, facebook === void 0 ? this.facebook : facebook, twitter === void 0 ? this.twitter : twitter, intragram === void 0 ? this.intragram : intragram);
  };
  obtainUserDataServer$UserData.prototype.toString = function () {
    return 'UserData(nick=' + Kotlin.toString(this.nick) + (', mail_visible=' + Kotlin.toString(this.mail_visible)) + (', country=' + Kotlin.toString(this.country)) + (', mail=' + Kotlin.toString(this.mail)) + (', birth_date=' + Kotlin.toString(this.birth_date)) + (', verified=' + Kotlin.toString(this.verified)) + (', bio=' + Kotlin.toString(this.bio)) + (', register_date=' + Kotlin.toString(this.register_date)) + (', id=' + Kotlin.toString(this.id)) + (', user=' + Kotlin.toString(this.user)) + (', facebook=' + Kotlin.toString(this.facebook)) + (', twitter=' + Kotlin.toString(this.twitter)) + (', intragram=' + Kotlin.toString(this.intragram)) + ')';
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
    return result;
  };
  obtainUserDataServer$UserData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nick, other.nick) && Kotlin.equals(this.mail_visible, other.mail_visible) && Kotlin.equals(this.country, other.country) && Kotlin.equals(this.mail, other.mail) && Kotlin.equals(this.birth_date, other.birth_date) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.bio, other.bio) && Kotlin.equals(this.register_date, other.register_date) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.facebook, other.facebook) && Kotlin.equals(this.twitter, other.twitter) && Kotlin.equals(this.intragram, other.intragram)))));
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
  function obtainUserDataServer(username, sessionToken) {
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
      var user = User_init_2(json.profile.nick, json.profile.user, ensureNotNull(json.profile.mail), getUserProfilePicturePath(json.profile.bio));
      user.biography = json.profile.bio;
      var date = split(json.profile.birth_date, Kotlin.charArrayOf(45));
      user.birthDate = new Date(toInt(date.get_za3lpa$(0)), toInt(date.get_za3lpa$(1)), toInt(date.get_za3lpa$(2)));
      user.country = json.profile.country;
      user.country = json.profile.country;
      user.facebookAccount = json.profile.facebook;
      user.twitterAccount = json.profile.twitter;
      user.instagramAccount = json.profile.intragram;
      return user;
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function getSong$DataSong(country, upload_time, id, title, user_id) {
    this.country = country;
    this.upload_time = upload_time;
    this.id = id;
    this.title = title;
    this.user_id = user_id;
  }
  getSong$DataSong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataSong',
    interfaces: []
  };
  getSong$DataSong.prototype.component1 = function () {
    return this.country;
  };
  getSong$DataSong.prototype.component2 = function () {
    return this.upload_time;
  };
  getSong$DataSong.prototype.component3 = function () {
    return this.id;
  };
  getSong$DataSong.prototype.component4 = function () {
    return this.title;
  };
  getSong$DataSong.prototype.component5 = function () {
    return this.user_id;
  };
  getSong$DataSong.prototype.copy_e8famf$ = function (country, upload_time, id, title, user_id) {
    return new getSong$DataSong(country === void 0 ? this.country : country, upload_time === void 0 ? this.upload_time : upload_time, id === void 0 ? this.id : id, title === void 0 ? this.title : title, user_id === void 0 ? this.user_id : user_id);
  };
  getSong$DataSong.prototype.toString = function () {
    return 'DataSong(country=' + Kotlin.toString(this.country) + (', upload_time=' + Kotlin.toString(this.upload_time)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', user_id=' + Kotlin.toString(this.user_id)) + ')';
  };
  getSong$DataSong.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    result = result * 31 + Kotlin.hashCode(this.upload_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    return result;
  };
  getSong$DataSong.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.country, other.country) && Kotlin.equals(this.upload_time, other.upload_time) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.user_id, other.user_id)))));
  };
  function getSong$Data(song, error) {
    this.song = song;
    this.error = error;
  }
  getSong$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getSong$Data.prototype.component1 = function () {
    return this.song;
  };
  getSong$Data.prototype.component2 = function () {
    return this.error;
  };
  getSong$Data.prototype.copy_3ybq0n$ = function (song, error) {
    return new getSong$Data(song === void 0 ? this.song : song, error === void 0 ? this.error : error);
  };
  getSong$Data.prototype.toString = function () {
    return 'Data(song=' + Kotlin.toString(this.song) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  getSong$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.song) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  getSong$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.song, other.song) && Kotlin.equals(this.error, other.error)))));
  };
  function getSong(songId) {
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/' + songId, false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        var song = new Song(json.song.id, json.song.title, getSongLocationPath(json.song.id), L0, null, null, getSongLyricsPath(json.song.id));
        return song;
      }
       else {
        Exception_init(json.error);
      }
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
  function obtainSongsFromUserServer(username) {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/songs', false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.songs;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var song = getSong(i);
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
    return result;
  }
  function getUser$UserData(nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram) {
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
  }
  getUser$UserData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserData',
    interfaces: []
  };
  getUser$UserData.prototype.component1 = function () {
    return this.nick;
  };
  getUser$UserData.prototype.component2 = function () {
    return this.mail_visible;
  };
  getUser$UserData.prototype.component3 = function () {
    return this.country;
  };
  getUser$UserData.prototype.component4 = function () {
    return this.mail;
  };
  getUser$UserData.prototype.component5 = function () {
    return this.birth_date;
  };
  getUser$UserData.prototype.component6 = function () {
    return this.verified;
  };
  getUser$UserData.prototype.component7 = function () {
    return this.bio;
  };
  getUser$UserData.prototype.component8 = function () {
    return this.register_date;
  };
  getUser$UserData.prototype.component9 = function () {
    return this.id;
  };
  getUser$UserData.prototype.component10 = function () {
    return this.user;
  };
  getUser$UserData.prototype.component11 = function () {
    return this.facebook;
  };
  getUser$UserData.prototype.component12 = function () {
    return this.twitter;
  };
  getUser$UserData.prototype.component13 = function () {
    return this.intragram;
  };
  getUser$UserData.prototype.copy_nrxf3w$ = function (nick, mail_visible, country, mail, birth_date, verified, bio, register_date, id, user, facebook, twitter, intragram) {
    return new getUser$UserData(nick === void 0 ? this.nick : nick, mail_visible === void 0 ? this.mail_visible : mail_visible, country === void 0 ? this.country : country, mail === void 0 ? this.mail : mail, birth_date === void 0 ? this.birth_date : birth_date, verified === void 0 ? this.verified : verified, bio === void 0 ? this.bio : bio, register_date === void 0 ? this.register_date : register_date, id === void 0 ? this.id : id, user === void 0 ? this.user : user, facebook === void 0 ? this.facebook : facebook, twitter === void 0 ? this.twitter : twitter, intragram === void 0 ? this.intragram : intragram);
  };
  getUser$UserData.prototype.toString = function () {
    return 'UserData(nick=' + Kotlin.toString(this.nick) + (', mail_visible=' + Kotlin.toString(this.mail_visible)) + (', country=' + Kotlin.toString(this.country)) + (', mail=' + Kotlin.toString(this.mail)) + (', birth_date=' + Kotlin.toString(this.birth_date)) + (', verified=' + Kotlin.toString(this.verified)) + (', bio=' + Kotlin.toString(this.bio)) + (', register_date=' + Kotlin.toString(this.register_date)) + (', id=' + Kotlin.toString(this.id)) + (', user=' + Kotlin.toString(this.user)) + (', facebook=' + Kotlin.toString(this.facebook)) + (', twitter=' + Kotlin.toString(this.twitter)) + (', intragram=' + Kotlin.toString(this.intragram)) + ')';
  };
  getUser$UserData.prototype.hashCode = function () {
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
    return result;
  };
  getUser$UserData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.nick, other.nick) && Kotlin.equals(this.mail_visible, other.mail_visible) && Kotlin.equals(this.country, other.country) && Kotlin.equals(this.mail, other.mail) && Kotlin.equals(this.birth_date, other.birth_date) && Kotlin.equals(this.verified, other.verified) && Kotlin.equals(this.bio, other.bio) && Kotlin.equals(this.register_date, other.register_date) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.user, other.user) && Kotlin.equals(this.facebook, other.facebook) && Kotlin.equals(this.twitter, other.twitter) && Kotlin.equals(this.intragram, other.intragram)))));
  };
  function getUser$Data(profile, error) {
    this.profile = profile;
    this.error = error;
  }
  getUser$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getUser$Data.prototype.component1 = function () {
    return this.profile;
  };
  getUser$Data.prototype.component2 = function () {
    return this.error;
  };
  getUser$Data.prototype.copy_3ekwb4$ = function (profile, error) {
    return new getUser$Data(profile === void 0 ? this.profile : profile, error === void 0 ? this.error : error);
  };
  getUser$Data.prototype.toString = function () {
    return 'Data(profile=' + Kotlin.toString(this.profile) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  getUser$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.profile) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  getUser$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.profile, other.profile) && Kotlin.equals(this.error, other.error)))));
  };
  function getUser(userid) {
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + userid + '/id', false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      var user = User_init_2(json.profile.nick, json.profile.user, ensureNotNull(json.profile.mail), getUserProfilePicturePath(json.profile.bio));
      user.biography = json.profile.bio;
      var date = split(json.profile.birth_date, Kotlin.charArrayOf(45));
      user.birthDate = new Date(toInt(date.get_za3lpa$(0)), toInt(date.get_za3lpa$(1)), toInt(date.get_za3lpa$(2)));
      user.country = json.profile.country;
      user.facebookAccount = json.profile.facebook;
      user.twitterAccount = json.profile.twitter;
      user.instagramAccount = json.profile.intragram;
      return user;
    }
     else {
      Exception_init('Error');
    }
    return null;
  }
  function getSongList$Data(title, author, creation_time, songs_size, songs, followers_size, followers, error) {
    this.title = title;
    this.author = author;
    this.creation_time = creation_time;
    this.songs_size = songs_size;
    this.songs = songs;
    this.followers_size = followers_size;
    this.followers = followers;
    this.error = error;
  }
  getSongList$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getSongList$Data.prototype.component1 = function () {
    return this.title;
  };
  getSongList$Data.prototype.component2 = function () {
    return this.author;
  };
  getSongList$Data.prototype.component3 = function () {
    return this.creation_time;
  };
  getSongList$Data.prototype.component4 = function () {
    return this.songs_size;
  };
  getSongList$Data.prototype.component5 = function () {
    return this.songs;
  };
  getSongList$Data.prototype.component6 = function () {
    return this.followers_size;
  };
  getSongList$Data.prototype.component7 = function () {
    return this.followers;
  };
  getSongList$Data.prototype.component8 = function () {
    return this.error;
  };
  getSongList$Data.prototype.copy_v7dy06$ = function (title, author, creation_time, songs_size, songs, followers_size, followers, error) {
    return new getSongList$Data(title === void 0 ? this.title : title, author === void 0 ? this.author : author, creation_time === void 0 ? this.creation_time : creation_time, songs_size === void 0 ? this.songs_size : songs_size, songs === void 0 ? this.songs : songs, followers_size === void 0 ? this.followers_size : followers_size, followers === void 0 ? this.followers : followers, error === void 0 ? this.error : error);
  };
  getSongList$Data.prototype.toString = function () {
    return 'Data(title=' + Kotlin.toString(this.title) + (', author=' + Kotlin.toString(this.author)) + (', creation_time=' + Kotlin.toString(this.creation_time)) + (', songs_size=' + Kotlin.toString(this.songs_size)) + (', songs=' + Kotlin.toString(this.songs)) + (', followers_size=' + Kotlin.toString(this.followers_size)) + (', followers=' + Kotlin.toString(this.followers)) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  getSongList$Data.prototype.hashCode = function () {
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
  getSongList$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.creation_time, other.creation_time) && Kotlin.equals(this.songs_size, other.songs_size) && Kotlin.equals(this.songs, other.songs) && Kotlin.equals(this.followers_size, other.followers_size) && Kotlin.equals(this.followers, other.followers) && Kotlin.equals(this.error, other.error)))));
  };
  function getSongList(songId) {
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/' + songId, false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        var Songs = ArrayList_init();
        tmp$ = json.songs;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var song = getSong(i);
          if (song != null) {
            Songs.add_11rb$(song);
          }
        }
        var pl = new Playlist(songId, json.title, ensureNotNull(getUser(json.author)), getPlaylistCoverPath(songId), Songs);
        return pl;
      }
       else {
        Exception_init(json.error);
      }
    }
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
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/user-lists/' + username + '/lists', false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.id;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var songlist = getSongList(i);
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
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/user-lists/' + username + '/following', false);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.id;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var songlist = getSongList(i);
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
    return ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username));
  }
  function isPlaylistFollowedByUserServer(username, playlist) {
    var tmp$;
    var Lists = getFollowedPlaylistsServer(username);
    tmp$ = Lists.iterator();
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
          var user = getUser(i);
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
      Exception_init('Error');
    }
    var seguido = ServerEmulator_getInstance().playlistList.get_11rb$(followed);
    ensureNotNull(ServerEmulator_getInstance().playlistSeguidos.get_11rb$(username)).remove_11rb$(ensureNotNull(seguido));
  }
  function addReproductionToSongServer(username, sessionToken, song) {
  }
  function setSongFavoutireServer$Data(error) {
    this.error = error;
  }
  setSongFavoutireServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  setSongFavoutireServer$Data.prototype.component1 = function () {
    return this.error;
  };
  setSongFavoutireServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new setSongFavoutireServer$Data(error === void 0 ? this.error : error);
  };
  setSongFavoutireServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  setSongFavoutireServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  setSongFavoutireServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function setSongFavoutireServer(username, sessionToken, song) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/user/' + username + '/fav?token=' + sessionToken + '&songId=' + song, false);
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
  function unSetSongFavoutireServer$Data(error) {
    this.error = error;
  }
  unSetSongFavoutireServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  unSetSongFavoutireServer$Data.prototype.component1 = function () {
    return this.error;
  };
  unSetSongFavoutireServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new unSetSongFavoutireServer$Data(error === void 0 ? this.error : error);
  };
  unSetSongFavoutireServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  unSetSongFavoutireServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  unSetSongFavoutireServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function unSetSongFavoutireServer(username, sessionToken, song) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/user/' + username + '/unfav?token=' + sessionToken + '&songId=' + song, false);
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
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/user/' + username + '/faved/' + song, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        return true;
      }
       else {
        if (equals(json.error, 'noFav')) {
          return false;
        }
         else {
          Exception_init(json.error);
        }
      }
    }
     else {
      Exception_init('Error');
    }
    return false;
  }
  function obtainPlaylistDataServer(id) {
    return getSongList(id);
  }
  function uploadSongServer(username, sessionToken, song) {
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
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/songs/user/' + username + '/faved/', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.songs;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var songlist = getSong(i);
          if (songlist != null) {
            result.add_11rb$(songlist);
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
  function obtainRecomendationsForUserServer(username, sessionToken, cantidad) {
    return ServerEmulator_getInstance().recomendaciones.get_11rb$(username);
  }
  function obtainPopularSongsServer(cantidad) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/popular?n=' + cantidad, false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) !== 0) {
      Exception_init('Error');
    }
    return result;
  }
  function obtainNewSongsFromFollowedArtistOfUserServer(username, sessionToken, cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainTrendSongsServer(cantidad) {
    return ServerEmulator_getInstance().trends;
  }
  function obtainTrendSongsInUserCountryServer(username, cantidad) {
    var user = obtainUserDataServer(username, null);
    var country = ensureNotNull(user).country;
    var req = new XMLHttpRequest();
    req.open('POST', server + '/songs/popular/' + toString(country) + '?n=' + cantidad, false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) !== 0) {
      Exception_init('Error');
    }
    return result;
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
    var tmp$, tmp$_0;
    var req = new XMLHttpRequest();
    req.open('GET', server + '/users/' + username + '/songs/lastListened', false);
    req.send(null);
    var result = ArrayList_init();
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        tmp$ = json.songs;
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var i = tmp$[tmp$_0];
          var songlist = getSong(i);
          if (songlist != null) {
            result.add_11rb$(songlist);
          }
        }
      }
      return result.get_za3lpa$(-1);
    }
     else {
      Exception_init('Error');
    }
    return ServerEmulator_getInstance().songList.get_11rb$(L1);
  }
  function createPlaylistServer$Data(error, id) {
    this.error = error;
    this.id = id;
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
    return this.id;
  };
  createPlaylistServer$Data.prototype.copy_4wgjuj$ = function (error, id) {
    return new createPlaylistServer$Data(error === void 0 ? this.error : error, id === void 0 ? this.id : id);
  };
  createPlaylistServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  createPlaylistServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  createPlaylistServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.error, other.error) && Kotlin.equals(this.id, other.id)))));
  };
  function createPlaylistServer(username, sessionToken, playlist) {
    var req = new XMLHttpRequest();
    req.open('PUT', server + '/user-lists/' + username + '/create?token=' + sessionToken + '&title=' + playlist.name, false);
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
    var req = new XMLHttpRequest();
    req.open('DELETE', server + '/user-lists/' + username + '/create?token=' + sessionToken + '&title=' + playlist.name, false);
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
  function updatePlaylistServer(username, sessionToken, playlist) {
  }
  function obtainGeneresServer() {
    return ServerEmulator_getInstance().generesList;
  }
  function getAlbum$AlbumData(publish_year, image, update_time, user_id, id, title) {
    this.publish_year = publish_year;
    this.image = image;
    this.update_time = update_time;
    this.user_id = user_id;
    this.id = id;
    this.title = title;
  }
  getAlbum$AlbumData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlbumData',
    interfaces: []
  };
  getAlbum$AlbumData.prototype.component1 = function () {
    return this.publish_year;
  };
  getAlbum$AlbumData.prototype.component2 = function () {
    return this.image;
  };
  getAlbum$AlbumData.prototype.component3 = function () {
    return this.update_time;
  };
  getAlbum$AlbumData.prototype.component4 = function () {
    return this.user_id;
  };
  getAlbum$AlbumData.prototype.component5 = function () {
    return this.id;
  };
  getAlbum$AlbumData.prototype.component6 = function () {
    return this.title;
  };
  getAlbum$AlbumData.prototype.copy_sy0bk3$ = function (publish_year, image, update_time, user_id, id, title) {
    return new getAlbum$AlbumData(publish_year === void 0 ? this.publish_year : publish_year, image === void 0 ? this.image : image, update_time === void 0 ? this.update_time : update_time, user_id === void 0 ? this.user_id : user_id, id === void 0 ? this.id : id, title === void 0 ? this.title : title);
  };
  getAlbum$AlbumData.prototype.toString = function () {
    return 'AlbumData(publish_year=' + Kotlin.toString(this.publish_year) + (', image=' + Kotlin.toString(this.image)) + (', update_time=' + Kotlin.toString(this.update_time)) + (', user_id=' + Kotlin.toString(this.user_id)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + ')';
  };
  getAlbum$AlbumData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.publish_year) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.update_time) | 0;
    result = result * 31 + Kotlin.hashCode(this.user_id) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  getAlbum$AlbumData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.publish_year, other.publish_year) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.update_time, other.update_time) && Kotlin.equals(this.user_id, other.user_id) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title)))));
  };
  function getAlbum$Data(album, error) {
    this.album = album;
    this.error = error;
  }
  getAlbum$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  getAlbum$Data.prototype.component1 = function () {
    return this.album;
  };
  getAlbum$Data.prototype.component2 = function () {
    return this.error;
  };
  getAlbum$Data.prototype.copy_9csf3f$ = function (album, error) {
    return new getAlbum$Data(album === void 0 ? this.album : album, error === void 0 ? this.error : error);
  };
  getAlbum$Data.prototype.toString = function () {
    return 'Data(album=' + Kotlin.toString(this.album) + (', error=' + Kotlin.toString(this.error)) + ')';
  };
  getAlbum$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.album) | 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  getAlbum$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.album, other.album) && Kotlin.equals(this.error, other.error)))));
  };
  function getAlbum(albumId) {
    var req = new XMLHttpRequest();
    req.open('GET', server + '/albums/' + albumId, false);
    req.send(null);
    if (Kotlin.primitiveCompareTo(req.status, 200) === 0) {
      var json = JSON.parse(req.responseText);
      if (equals(json.error, 'ok')) {
        var album = new Album(json.album.id, json.album.title, ensureNotNull(getUser(json.album.user_id)), new Date(), getAlbumCoverPath(json.album.id));
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
          var album = getAlbum(i);
          if (album != null) {
            result.add_11rb$(album);
          }
        }
      }
      return result;
    }
     else {
      Exception_init('Error');
    }
    return ServerEmulator_getInstance().albumList;
  }
  function createAlbumsServer$Data(error) {
    this.error = error;
  }
  createAlbumsServer$Data.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Data',
    interfaces: []
  };
  createAlbumsServer$Data.prototype.component1 = function () {
    return this.error;
  };
  createAlbumsServer$Data.prototype.copy_61zpoe$ = function (error) {
    return new createAlbumsServer$Data(error === void 0 ? this.error : error);
  };
  createAlbumsServer$Data.prototype.toString = function () {
    return 'Data(error=' + Kotlin.toString(this.error) + ')';
  };
  createAlbumsServer$Data.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  createAlbumsServer$Data.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  function createAlbumsServer(username, sessionToken, album) {
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + username + '/create?token=' + sessionToken + '&title=' + album.name, false);
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
     else {
      ServerEmulator_getInstance().albumList.add_11rb$(album);
    }
  }
  function updateAlbumsServer(username, sessionToken, album) {
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
    var req = new XMLHttpRequest();
    req.open('POST', server + '/albums/' + username + '/create?token=' + sessionToken + '&title=' + album.id, false);
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
     else {
      ServerEmulator_getInstance().albumList.add_11rb$(album);
    }
  }
  function isServerOnline2() {
    return true;
  }
  function main_0(args) {
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
    this.id = null;
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
  function User_init_1(id, $this) {
    $this = $this || Object.create(User.prototype);
    User.call($this);
    $this.id = id;
    return $this;
  }
  function User_init_2(username, name, email, pictureLocationUri, $this) {
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
    this.cancionesFavoritas = HashMap_init();
    this.artistasSeguidos = HashMap_init();
    this.playlistSeguidos = HashMap_init();
    this.recomendaciones = HashMap_init();
    this.trends = ArrayList_init();
    this.generos = ArrayList_init();
    var autor1 = User_init_2('Media', 'Media', 'Right', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var autor2 = User_init_2('Silent', 'Silent', 'Partner', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var autor3 = User_init_2('abelcht', 'Abel ChT', 'Lion', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var autor4 = User_init_2('Prueba', 'PRU', 'sdfdsfd', 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var album1 = new Album(L1, 'Jazz', autor1, new Date(2018, 3, 22), 'http://storage.googleapis.com/automotive-media/album_art.jpg');
    var album2 = new Album(L2, 'Blues', autor2, new Date(2017, 6, 27), 'http://storage.googleapis.com/automotive-media/album_art_2.jpg');
    var cancion1 = new Song(L1, 'Jazz in Paris', 'http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3', L103000, album1, null, null);
    var cancion2 = new Song(L2, 'The Messenger', 'http://storage.googleapis.com/automotive-media/The_Messenger.mp3', L132000, album2, null, null);
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
    this.albumList.add_11rb$(album1);
    this.albumList.add_11rb$(album2);
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
  _.Data2 = Data2;
  _.Data = Data;
  _.test_signup = test_signup;
  _.test_login = test_login;
  _.test_detelete = test_detelete;
  _.main_kand9s$ = main;
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
  package$apis.isServerOnline = isServerOnline;
  package$apis.doLoginServer_puj7f4$ = doLoginServer;
  package$apis.doSignUpServer_m5kwz3$ = doSignUpServer;
  package$apis.doDeleteAccountServer_puj7f4$ = doDeleteAccountServer;
  package$apis.doLogoutServer_puj7f4$ = doLogoutServer;
  package$apis.obtainUserDataServer_jyasbz$ = obtainUserDataServer;
  package$apis.getSong_s8cxhz$ = getSong;
  package$apis.obtainSongsFromUserServer_61zpoe$ = obtainSongsFromUserServer;
  package$apis.getUser_s8cxhz$ = getUser;
  package$apis.getSongList_s8cxhz$ = getSongList;
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
  package$apis.getAlbum_s8cxhz$ = getAlbum;
  package$apis.obtainAlbumsFromUserServer_61zpoe$ = obtainAlbumsFromUserServer;
  package$apis.createAlbumsServer_xdras9$ = createAlbumsServer;
  package$apis.updateAlbumsServer_xdras9$ = updateAlbumsServer;
  package$apis.deleteAlbumsServer_xdras9$ = deleteAlbumsServer;
  package$apis.isServerOnline2 = isServerOnline2;
  var package$controller = _.controller || (_.controller = {});
  package$controller.main_kand9s$ = main_0;
  var package$models = _.models || (_.models = {});
  package$models.Album = Album;
  package$models.Playlist = Playlist;
  package$models.Recommendation = Recommendation;
  package$models.Song = Song;
  package$models.User_init_puj7f4$ = User_init;
  package$models.User_init_61zpoe$ = User_init_0;
  package$models.User_init_s8cxhz$ = User_init_1;
  package$models.User_init_w74nik$ = User_init_2;
  package$models.User = User;
  var package$test = _.test || (_.test = {});
  Object.defineProperty(package$test, 'ServerEmulator', {
    get: ServerEmulator_getInstance
  });
  server = 'http://155.210.13.105:7800';
  dataServerAdress = 'http://155.210.13.105:7480';
  songLocationUploadPrefix = 'song_';
  songLyricsUploadPrefix = 'lyric_';
  userUploadPrefix = 'user_';
  albumUploadPrefix = 'album_';
  playlistUploadPrefix = 'playlist_';
  main([]);
  Kotlin.defineModule('KOTLINJS', _);
  return _;
}(typeof KOTLINJS === 'undefined' ? {} : KOTLINJS, kotlin);

//# sourceMappingURL=KOTLINJS.js.map
