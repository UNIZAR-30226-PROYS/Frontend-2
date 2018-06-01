package apis


import models.*
import test.*
import org.w3c.xhr.*
import kotlin.js.Date
import kotlin.js.Json

fun createForm(mapa: Map<String, String?>): String{
    var result = String()
    for(i in mapa){
        println(i)
        if (i.value != null) {
            result = if (result.isEmpty()){
                "${i.key}=${i.value}"
            }else {
                result.concat("&${i.key}=${i.value}")
            }
        }
    }
    return result
}

/**
 * Created by abel on 26/04/18.
 */

/**
 * Devuelve true si se puede acceder al servidor, false en caso contrario
 * Warning: esta operación puede ser costosa en tiempo
 */
var server = "http://155.210.13.105:7800"

/**
 * Address of Back-End Server
 */

/**
 * Address of Data Server
 */
private const val dataServerAdress = "http://155.210.13.105:7480"

/**
 * Direcciónes de los diferentes tipos de datos en el servidor de almacenamiento
 */
private const val songLocationUploadPrefix = "song_"
private const val songLyricsUploadPrefix = "lyric_"
private const val userUploadPrefix = "user_"
private const val albumUploadPrefix = "album_"
private const val playlistUploadPrefix = "playlist_"

/**
 * Created by abel on 8/03/18.
 */
/**
 * Función auxiliar que permite obtener el JSON de una request al back end
 * Si la request exige GET postData ha de ser null
 */

/**
 * Devuelve la dirección de las letras de una canción
 */
private fun getSongLyricsPath(songId: Long): String {
    return "$dataServerAdress/$songLyricsUploadPrefix$songId"
}

/**
 * Devuelve la dirección del archivo de música de una canción
 */
private fun getSongLocationPath(songId: Long): String {
    return "$dataServerAdress/$songLocationUploadPrefix$songId"
}

/**
 * Devuelve la dirección de la foto de perfil de un usuario
 */
private fun getUserProfilePicturePath(username: String): String {
    return "$dataServerAdress/$userUploadPrefix$username"
}

/**
 * Devuelve la dirección de la foto de portada de una playlist
 */
private fun getPlaylistCoverPath(playlistId: Long): String {
    return "$dataServerAdress/$playlistUploadPrefix$playlistId"
}

/**
 * Devuelve la dirección de la foto de portada de un álbum
 */
private fun getAlbumCoverPath(albumId: Long): String {
    return "$dataServerAdress/$albumUploadPrefix$albumId"
}

@JsModule("S3")
external  fun ListBuckets(s3: Any)
external fun s3Connection(): Any
external fun UploadFile(s3: Any, file: String, key: String):Boolean
external fun DeleteFile(s3:Any, key: String):Boolean

var s3: Any? = null

/**
 * Elimina las letras de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteSongLyrics(songId: Long): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return DeleteFile(s3!!,"$songLyricsUploadPrefix$songId")
}

/**
 * Elimina el archivo de música de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteSongLocation(songId: Long): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return DeleteFile(s3!!,"$songLyricsUploadPrefix$songId")
}

/**
 * Elimina la foto de perfil de un usuario
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteUserProfilePicture(username: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return DeleteFile(s3!!,"$userUploadPrefix$username")
}

/**
 * Elimina la foto de portada de una playlist
 * Devuelve true si la operación ha tenido exito
 */
private fun deletePlaylistCover(playlistId: Long): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return DeleteFile(s3!!,"$playlistUploadPrefix$playlistId")
}

/**
 * Elimina la foto de portada de un álbum
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteAlbumCover(albumId: Long): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return DeleteFile(s3!!,"$albumUploadPrefix$albumId")
}


/**
 * Sube las letras de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadSongLyrics(songId: Long, filePath: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return UploadFile(s3!!,filePath, "$songLyricsUploadPrefix$songId")
}

/**
 * Sube el archivo de música de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadSongLocation(songId: Long, filePath: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return UploadFile(s3!!,filePath, "$songLocationUploadPrefix$songId")
}

/**
 * Sube la foto de perfil de un usuario
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadUserProfilePicture(username: String, filePath: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return UploadFile(s3!!,filePath, "$userUploadPrefix$username")
}

/**
 * Sube la foto de portada de una playlist
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadPlaylistCover(playlistId: Long, filePath: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return UploadFile(s3!!,filePath, "$playlistUploadPrefix$playlistId")
}

/**
 * Sube la foto de portada de un álbum
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadAlbumCover(albumId: Long, filePath: String): Boolean {
    if (s3 == null){
        s3 = s3Connection()
    }
    return UploadFile(s3!!,filePath, "$albumUploadPrefix$albumId")
}

/*
                            PETICIONES AUXILIARES
 */

fun obtainAlbumFromID(id: Long): Album? {
    val req = XMLHttpRequest()
    req.open("GET", "$server/albums/$id", false)
    req.send(null)
    if (req.status.compareTo(200) == 0) {
        data class AlbumData(val publish_year: Int, val image: String, val update_time: Long, val user_id: Long,
                             val id: Long, val title: String, val songs: LongArray)

        data class Data(val album: AlbumData, val error: String)
        println(req.responseText)
        val json = JSON.parse<Data>(req.responseText)

        if (json.error == "ok") {
            val songs = mutableListOf<Song>()
            for(i in json.album.songs.toList()){
                val song = obtainSongFromID(i, false)
                if (song != null) {
                    songs.add(song)
                }
            }
            val album = Album(json.album.id, json.album.title, obtainUserDataServerFromID(json.album.user_id, null)!!, Date(), getAlbumCoverPath(json.album.id), songs)
            for(i in songs){
                i.album = album
            }
            return album
        } else {
            Exception(json.error)
        }
    } else {
        Exception("Error")
    }
    return null
}

fun obtainSongFromID(id: Long, album: Boolean = true): Song? {
    val req = XMLHttpRequest()
    req.open("GET", "$server/songs/$id", false)
    req.send(null)
    if (req.status.compareTo(200) == 0) {
        data class DataSong(val country: String, val upload_time: Long, val id: Long, val album_id: Long, val title: String, val user_id: Long)
        data class Data(val song: DataSong, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            if (album) {
                return Song(json.song.id, json.song.title, json.song.country, getSongLocationPath(json.song.id), 0,
                        obtainAlbumFromID(json.song.album_id), "", getSongLyricsPath(json.song.id))
            }else{
                return Song(json.song.id, json.song.title, json.song.country, getSongLocationPath(json.song.id), 0,
                        null, "", getSongLyricsPath(json.song.id))
            }
        }else{
            Exception(json.error)}
    }
    return null
}
fun obtainUserDataServerFromID(userID: Long): User?{
    return obtainUserDataServerFromID(userID, null)
}

fun obtainUserDataServerFromID(userID: Long, sessionToken: String? = null): User? {
    val req = XMLHttpRequest()

    req.open("GET", "$server/users/$userID/id", false)

    req.send(null)
    if (req.status.compareTo(200) == 0) {
        data class UserData(val nick: String, val mail_visible: Boolean, val country: String, val mail: String?,
                            val birth_date: String, val verified: Boolean, val bio: String,
                            val register_date: Long, val id: Int, val user: String, val facebook: String, val twitter: String,
                            val intragram: String, val admin: Boolean)
        data class Data(val profile: UserData, val error: Boolean)
        val json = JSON.parse<Data>(req.responseText)
        var userDate: Date? = null
        if (json.profile.birth_date.toString() != "-1") {
            val date = json.profile.birth_date.split('-')
            userDate= Date(date[0].toInt(), date[1].toInt(), date[2].toInt())
        }
        val user = User(json.profile.nick,json.profile.user, getUserProfilePicturePath(json.profile.bio), json.profile.verified,json.profile.mail!!,json.profile.bio,userDate)
        user.country = json.profile.country
        user.facebookAccount = json.profile.facebook
        user.twitterAccount = json.profile.twitter
        user.instagramAccount = json.profile.intragram
        user.admin = json.profile.admin
        return user
    }else {
        Exception("Error")
    }
    return null
}

/**
 * Obtiene la información asociada al usuario con nick @username
 */
fun obtainUserDataServer(username: String): User?{
    return obtainUserDataServer(username, null)
}
//TESTED
//@Throws(Exception::class)
fun obtainUserDataServer(username: String, sessionToken: String?): User? {
    val req = XMLHttpRequest()
    if (sessionToken != null){
        req.open("GET", "$server/users/$username?token=$sessionToken", false)
    }else{
        req.open("GET", "$server/users/$username", false)
    }
    req.send(null)
    if (req.status.compareTo(200) == 0) {
        data class UserData(val nick: String, val mail_visible: Boolean, val country: String, val mail: String?,
                            val birth_date: String, val verified: Boolean, val bio: String,
                            val register_date: Long, val id: Int, val user: String,val facebook: String, val twitter: String,
                            val intragram: String, val admin: Boolean)
        data class Data(val profile: UserData, val error: Boolean)
        val json = JSON.parse<Data>(req.responseText)
        var userDate: Date? = null
        if (json.profile.birth_date.toString() != "-1") {
            val date = json.profile.birth_date.split('-')
            userDate= Date(date[0].toInt(), date[1].toInt(), date[2].toInt())
        }
        val user = User(json.profile.nick,json.profile.user, getUserProfilePicturePath(json.profile.bio), json.profile.verified,json.profile.mail!!,json.profile.bio,userDate)
        user.country = json.profile.country
        user.country = json.profile.country
        user.facebookAccount = json.profile.facebook
        user.twitterAccount = json.profile.twitter
        user.instagramAccount = json.profile.intragram
        user.admin = json.profile.admin
        return user
    }else {
        Exception("Error")
    }
    return null
}

/**
 * Obtiene las canciones creados por el usuario @user del servidor
 */
//CARE
//@Throws(Exception::class)
fun obtainSongsFromUserServer(username: String): List<Song> {
    println("obtainSongsFromUserServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/songs", false)
    req.send(null)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val size: Int, val songs: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.songs.toList()) {
                val song = obtainSongFromID(i)
                if (song != null) {
                    result.add(song)
                }
            }
            return result
        }else{

            Exception(json.error)}
    }else {
        println("Error " + req.status.toString())
        Exception("Error")
        return result
    }
    return listOf()
}

/**
 * Obtiene la información asociada a la playlist con id @id
 * Warning: esta operación puede ser costosa en tiempo
 */
//@Throws(Exception::class)
fun obtainPlaylistDataServer(id: Long): Playlist? {
    val req = XMLHttpRequest()
    req.open("GET", "$server/songs/$id", false)
    if (req.status.compareTo(200) == 0) {
        //val id: Long, val name: String, val creator: User, val artLocationUri: String, val content: List<Song>
        data class Data(val title: String, val author: Long, val creation_time: Long, val songs_size: Int,
                        val songs: LongArray, val followers_size: Int, val followers: LongArray,  val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            val songs = mutableListOf<Song>()
            for(i in json.songs.toList()){
                val song = obtainSongFromID(i)
                if (song != null) {
                    songs.add(song)
                }
            }
            val users = mutableListOf<User>()
            for(i in json.followers.toList()){
                val user = obtainUserDataServerFromID(i, null)
                if (user != null) {
                    users.add(user)
                }
            }
            return Playlist(id, json.title, obtainUserDataServerFromID(json.author, null)!!, getPlaylistCoverPath(id),songs, users)
        }else{
            Exception(json.error)}
    }
    return null
}

/**
 * Obtiene las playlist creadas por el usuario @user del servidor
 */
//@Throws(Exception::class)
fun obtainPlaylistsFromUserServer(username: String): List<Playlist> {
    val req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$username/lists", false)
    val result = mutableListOf<Playlist>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val size: Int, val id: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.id.toList()) {
                val songlist = obtainPlaylistDataServer(i)
                if (songlist != null) {
                    result.add(songlist)
                }
            }
            return result
        }else{
            Exception(json.error)}
    }
    return result
}


fun isServerOnline(): Boolean {
    try {
        var req = XMLHttpRequest()
        req.open("GET", "$server/users/lAngelP", false)
        println(req.status)
        if(req.status.toInt() != 200){
            println("error")
            return false
        }else{
            return true
        }
    }catch (e: Exception){
        return false
    }

}

/**
 * Realiza un login en el servidor y devuelve el token de sesión
 */
//TESTED
//@Throws(Exception::class)
fun doLoginServer(username: String, password: String): String {
    println("LoginServer")
    println("sending  request")
    val req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/login", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    val data = createForm(mapOf("pass" to password))
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val user: String, val token: String, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok"){
            throw Exception(json.error)
        }
        return json.token
    } else {
        throw Exception("Error ${req.status}")
    }
}



/**
 * Realiza una creación de usuario en el servidor y devuelve el token de sesión
 */
//TESTED
//@Throws(Exception::class)
fun doSignUpServer(user: User): String {
    println("SignUpServer")
    val nick = user.username
    val pass = user.password
    val email = user.email
    val username = user.name
    val birth = null

    val data = createForm(mapOf("mail" to email, "pass0" to pass, "pass1" to pass, "user" to username, "birth" to birth))
    val req = XMLHttpRequest()
    req.open("POST", "$server/users/$nick/signup?", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val user: String, val token: String, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok"){
            throw Exception(json.error)
        }
        return json.token
    } else {
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Elimina cuenta servidor
 */
//TESTED
//@Throws(Exception::class)
fun doDeleteAccountServer(user: String, sessionToken: String): Boolean {
    println("DeleteAccountServer")
    val req = XMLHttpRequest()
    req.open("DELETE", "$server/users/$user?token=$sessionToken", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            return true
        }else{
            println("Exception "+json.error)
            throw Exception(json.error)
        }
    }else{
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Realiza un logout en el servidor
 */
//TESTED
//@Throws(Exception::class)
fun doLogoutServer(username: String, sessionToken: String):Boolean {
    val req = XMLHttpRequest()
    req.open("DELETE", "$server/users/$username/login?token=$sessionToken", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok"){
            Exception(json.error)
         }
        return true
    }
    return false
}




/**
 * Devuelve una lista con los usuarios a los que sigue el usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun getFollowedUsersServer(username: String): List<User> {
    println("FollowedUsersServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/follows", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    val result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Int, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (users_id in json.users.toList()) {
                val user = obtainUserDataServerFromID(users_id, null)
                if (user != null) {
                    result.add(user)
                }
            }
            return result
        }else{
            println("Exception "+json.error)
            throw Exception(json.error)
        }
    }else{
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Devuelve true si el usuario @user es seguido por el usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun isUserFollowedByUserServer(username: String, user: String): Boolean {
   val followers = getFollowersOfUserServer(user)
    for (one : User in followers){
        if (one.username == username){
            return true
        }
    }
    return false
}

/**
 * Devuelve una lista con los usuarios que siguen al usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun getFollowersOfUserServer(username: String): List<User> {
    println("FollowedUsersServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/followers", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    val result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Int, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (users_id in json.users.toList()) {
                val user = obtainUserDataServerFromID(users_id, null)
                if (user != null) {
                    result.add(user)
                }
            }
            return result
        }else{
            println("Exception "+json.error)
            throw Exception(json.error)
        }
    }else{
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Devuelve el numero de seguidores del usuario @username
 */

//TESTED
//@Throws(Exception::class)
fun getNumberOfFollowersOfUserServer(username: String): Long {
    println("FollowedUsersServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/followers", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Int, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            return json.size.toLong()
        }else{
            println("Exception "+json.error)
            throw Exception(json.error)
        }
    }else{
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Añade el usuario @username como seguidor del usuario @followed
 */
//TESTED
//@Throws(Exception::class)
fun addFollowerToUserServer(username: String, sessionToken: String, followed: String): Boolean {

    val req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/follow/$followed", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send("token=$sessionToken")
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            return true

        }else{
            throw Exception(json.error)
        }
    } else {
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Elimina el usuario @username como seguidor del usuario @followed
 */
//TESTED
//@Throws(Exception::class)
fun deleteFollowerToUserServer(username: String, sessionToken: String, followed: String): Boolean {
    val req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/unfollow/$followed", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send("token=$sessionToken")
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            return true
        }else{
            throw Exception(json.error)
        }
    } else {
        println("Error")
        throw Exception("Error ${req.status}")
    }
}

/**
 * Devuelve una lista con las playlist que sigue el usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun getFollowedPlaylistsServer(username: String): List<Playlist> {
    println("getFollowedPlaylistsServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$username/following", false)
    req.send(null)
    val result = mutableListOf<Playlist>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val id: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.id.toList()) {
                val songlist = obtainPlaylistDataServer(i)
                if (songlist != null) {
                    result.add(songlist)
                }
            }
            return result
        }else{
            Exception(json.error)}
    }
    return listOf()

}

/**
 * Devuelve true si la playlist @playlist es seguida por el usuario @username
 */
//@Throws(Exception::class)
fun isPlaylistFollowedByUserServer(username: String, playlist: Long): Boolean {
    val lists = getFollowedPlaylistsServer(username)
    for(list in lists){
        if (list.id == playlist){
            return true
        }
    }
    return false
}


/**
 * Devuelve una lista con los usuarios que siguen a la playlist @playlist
 */
//@Throws(Exception::class)
fun getFollowersOfPlaylistServer(playlist: Long): List<User> {
    val req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$playlist/followed", false)
    val result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val error: String, val size: Int, val id: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok") {
            for (i in json.id) {
                val user = obtainUserDataServerFromID(i, null)
                if (user != null) {
                    result.add(user)
                }
            }
        }
        return result
    } else {
        Exception("Error")
    }
    return result
}
    /**
     * Devuelve el numero de seguidores de la playlist @playlist
     */
//@Throws(Exception::class)
    fun getNumberOfFollowersOfPlaylistServer(playlist: Long): Long {
        val list = getFollowersOfPlaylistServer(playlist)
        return list.size.toLong()
    }

    /**
     * Añade el usuario @username como seguidor de la playlist @followed
     */
//@Throws(Exception::class)
    fun addFollowerToPlaylistServer(username: String, sessionToken: String, followed: Long) {
        val req = XMLHttpRequest()
        req.open("PUT", "$server/user-lists/$username/$followed/follow?token=$sessionToken", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            }
        } else {
            Exception("Error")
        }
    }

    /**
     * Elimina el usuario @username como seguidor de la playlist @followed
     */
//@Throws(Exception::class)
    fun deleteFollowerToPlaylistServer(username: String, sessionToken: String, followed: Long) {
        val req = XMLHttpRequest()
        req.open("DELETE", "$server/user-lists/$username/$followed/unfollow?token=$sessionToken", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            }
        } else {
            Exception("Error "+req.status.toString())
        }
    }

    /**
     * Añade una reproducción a la canción @song
     * En caso de ser un usuario no logeado username y sessionToken seran igual a null
     */
//@Throws(Exception::class)
    fun addReproductionToSongServer(username: String?, sessionToken: String?, song: Long) {
        println("addReproductionToSongServer")
        val req = XMLHttpRequest()
        req.open("POST", "$server/songs/$song/listen", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        val data = createForm(mapOf("token" to sessionToken, "nick" to username))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val user: String, val token: String, val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
        } else {
            throw Exception("Error ${req.status}")
        }
    }

    /**
     * Añade la cancion @song como favorita del usuario @username
     */
//@Throws(Exception::class)
    fun setSongFavoutireServer(username: String, sessionToken: String, song: Long) {
        println("setSongFavoutireServer")
        val req = XMLHttpRequest()
        req.open("POST", "$server/songs/user/$username/fav", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        val data = createForm(mapOf("token" to sessionToken, "songId" to song.toString()))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val user: String, val token: String, val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
        } else {
            throw Exception("Error ${req.status}")
        }
    }

    /**
     * Elimina la cancion @song como favorita del usuario @username
     */
//@Throws(Exception::class)
    fun unSetSongFavoutireServer(username: String, sessionToken: String, song: Long) {
        println("unSetSongFavoutireServer")
        val req = XMLHttpRequest()
        req.open("POST", "$server/songs/user/$username/unfav", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        val data = createForm(mapOf("token" to sessionToken, "songId" to song.toString()))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val user: String, val token: String, val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
        } else {
            throw Exception("Error ${req.status}")
        }
    }

    /**
     * Devuelve true si la cancion @song es favorita del usuario @username
     */
//@Throws(Exception::class)
    fun isSongFavoutireByUserServer(username: String, sessionToken: String, song: Long): Boolean {
        println("isSongFavoutireByUserServer")
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/user/$username/faved/$song", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val error: String)
            val json = JSON.parse<Data>(req.responseText)
            return when {
                json.error == "ok" -> true
                json.error == "noFav" -> false
                else -> {
                    println("Exception "+json.error)
                    throw Exception(json.error)
                }
            }
        }else{
            println("Error")
            throw Exception("Error ${req.status}")
        }
    }



    //@Throws(Exception::class)
    fun uploadSongServer(username: String, sessionToken: String, song: Song): Long {
        println("Upload Song")
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/$username/create", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        var data: String
        if (song.album == null){
            data = createForm(mapOf("token" to sessionToken, "title" to song.name, "albumID" to null,
                    "country" to song.country))
        }else{
            data = createForm(mapOf("token" to sessionToken, "title" to song.name, "albumID" to song.album!!.id.toString(),
                    "country" to song.country))
        }

        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class DataSong(val country: String, val upload_time: Long, val id: Int, val title: String, val user_id: Long)
            data class Data(val song: DataSong, val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
            song.id = json.song.id.toLong()
            return json.song.id.toLong()
        } else {
            throw Exception("Error ${req.status}")
        }
    }

    /**
     * Devuelve las canciones favoritas de un usuario
     */
//@Throws(Exception::class)
    fun obtainFavouriteSongsByUserServer(username: String, sessionToken: String): List<Song> {
        println("obtainFavouriteSongsByUserServer")
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/user/$username/faved/", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val songs: LongArray)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result
        } else {
            Exception("Error ${req.response.toString()}")
        }
        return result

    }

fun  numbeOfSavoriteSongsByUserServer(username: String, sessionToken: String):Int{
    return obtainFavouriteSongsByUserServer(username, sessionToken).size
}

    /**
     * Devuelve una lista de @cantidad de Artistas, Playlist y Canciones recomendadas para el usuario @username
     */
//@Throws(Exception::class)
    fun obtainRecomendationsForUserServer(username: String, sessionToken: String, cantidad: Long): List<Recommendation>? {
//TODO:
        return listOf()
    }

    /**
     * Devuelve las canciones populares (plazo de una semana o un mes)
     */
//@Throws(Exception::class)
    fun obtainPopularSongsServer(cantidad: Long): List<Song>? {
        println("obtainPopularSongsServer")
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/popular?n=$cantidad", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class DataSongs(val country: String,
                                 val upload_time: Long,
                                 val user_id: Int,
                                 val reproductions: Int,
                                 val id: Long,
                                 val title: String,
                                 val likes: Int)
            data class Data(val songs: List<DataSongs>,
                                val error: String,
                                val results: Int)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                // Muy Ineficiente quizas requiera reimplementación
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i.id)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result

        } else {
            Exception("Error")
        }
        return result
    }

    /**
     * Devuelve la lista de maximo @cantidad canciones nuevas de los artistas seguidos
     */
    //MIRAR!!
//@Throws(Exception::class)
    fun obtainNewSongsFromFollowedArtistOfUserServer(username: String, sessionToken: String, amount: Long): List<Song>? {
        println("obtainPopularSongsServer")
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/popular/user/$username?n=$amount", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class DataSongs(val country: String,
                                 val upload_time: Long,
                                 val user_id: Int,
                                 val reproductions: Int,
                                 val id: Long,
                                 val title: String,
                                 val likes: Int)
            data class Data(val songs: List<DataSongs>,
                            val error: String,
                            val results: Int)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                // Muy Ineficiente quizas requiera reimplementación
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i.id)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result

        } else {
            Exception("Error")
        }
        return result
    }

    /**
     * Devuelve las canciones populares (ultimo dia o ultimos dias)
     */
//@Throws(Exception::class)
    fun obtainTrendSongsServer(amount: Long): List<Song>? {
        println("obtainPopularSongsServer")
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/popular?n=$amount&daily=true", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class DataSongs(val country: String,
                                 val upload_time: Long,
                                 val user_id: Int,
                                 val reproductions: Int,
                                 val id: Long,
                                 val title: String,
                                 val likes: Int)
            data class Data(val songs: List<DataSongs>,
                            val error: String,
                            val results: Int)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                // Muy Ineficiente quizas requiera reimplementación
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i.id)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result

        } else {
            Exception("Error")
        }
        return result
    }

    /**
     * Devuelve las canciones populares en el pais de origen del usuario (ultimo dia o ultimos dias)
     */
//@Throws(Exception::class)
    fun obtainTrendSongsInUserCountryServer(username: String, sessionToken: String, cantidad: Long): List<Song>? {
        println("obtainTrendSongsInUserCountryServer")
        val user = obtainUserDataServer(username, sessionToken)
        val req = XMLHttpRequest()
        req.open("GET", "$server/songs/popular/${user!!.country}/?n=$cantidad", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class DataSongs(val country: String,
                                 val upload_time: Long,
                                 val user_id: Int,
                                 val reproductions: Int,
                                 val id: Long,
                                 val title: String,
                                 val likes: Int)
            data class Data(val songs: List<DataSongs>,
                            val error: String,
                            val results: Int)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                // Muy Ineficiente quizas requiera reimplementación
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i.id)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result

        } else {
            Exception("Error")
        }
        return result
    }

    /**
     * Devuelve la lista de maximo @cantidad playlists seguidas que se han actualizado
     */
//@Throws(Exception::class)
    fun obtainUpdatedPlaylistsFollowedByUserServer(username: String, sessionToken: String, cantidad: Long): List<Playlist>? {
//TODO:
        return listOf()
    }

    /**
     * Devuelve la lista de maximo @cantidad resultados a la consulta @query
     * Si tipo es null devuelve todos los resultados a la query realizada, si tipo es 1 devuelve solamente canciones, si tipo = 2
     * devuelve solamente playlists y si tipo = 3 devuelve solamente autores
     */


/**
 * Funcion auxiliar para obtainResultForQuery
 */
private fun obtainResultForQueryInSongServer(amount: Long, query: String): List<Song> {
    println("obtainResultForQueryInSongServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/songs/search/?query=$query&n=$amount", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        data class DataSongs(val country: String,
                             val upload_time: Long,
                             val user_id: Int,
                             val reproductions: Int,
                             val id: Long,
                             val title: String,
                             val likes: Int)
        data class Data(val songs: List<DataSongs>,
                        val error: String,
                        val results: Int)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok") {
            // Muy Ineficiente quizas requiera reimplementación
            for (i in json.songs.toList()) {
                val song = obtainSongFromID(i.id)
                if (song != null) {
                    result.add(song)
                }
            }
        }
        return result

    } else {
        Exception("Error")
    }
    return result
}

/**
 * Funcion auxiliar para obtainResultForQuery
 */
private fun obtainResultForQueryInUsersServer(amount: Long, query: String): List<User> {

    //TODO(Preguntar)
    println("obtainResultForQueryInUsersServer")
    val req = XMLHttpRequest()
    req.open("GET", "$server/users/search/?query=$query&n=$amount", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
    val result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        class Params(val max_birth_time: Long,
                     val min_reg_time: Int,
                     val query: String,
                     val min_birth_time: Int,
                     val max_reg_time: Long)
        class Users(val mail_visible: Boolean,
                    val country: String,
                    val mail: String,
                    val birth_date: String,
                    val facebook: String,
                    val bio: String,
                    val register_date: String,
                    val instagram: String,
                    val nick: String,
                    val score: Double,
                    val twitter: String,
                    val id: String,
                    val user: String)
        class Data(val number: Int,
                   val params: Params,
                   val users: List<Users>)
        val json = JSON.parse<Data>(req.responseText)
        for(one in json.users.toList()){
            result.add(obtainUserDataServerFromID(one.id.toLong(), null)!!)
        }
        return result

    } else {
        Exception("Error")
    }
    return listOf()
}

/**
 * Funcion auxiliar para obtainResultForQuery
 */
private fun obtainResultForQueryInPlaylistsServer(cantidad: Long, query: String): List<Playlist> {
// TODO: Esperar nueva especificacion
    return ArrayList<Playlist>()
}

//@Throws(Exception::class)
fun obtainResultForQueryServer(cantidad: Long, query: String, tipo: Int?): List<Recommendation>? {
val list = ArrayList<Recommendation>()
when(tipo){
    1 -> list.addAll(obtainResultForQueryInSongServer(cantidad,query))
    2 -> list.addAll(obtainResultForQueryInPlaylistsServer(cantidad,query))
    3 -> list.addAll(obtainResultForQueryInUsersServer(cantidad,query))
    else ->{
        list.addAll(obtainResultForQueryInSongServer(cantidad,query))
        list.addAll(obtainResultForQueryInPlaylistsServer(cantidad,query))
        list.addAll(obtainResultForQueryInUsersServer(cantidad,query))
    }
}
return list

}

    /**
     * Devuelve una lista compuesta por pares nombre del genero, canciones populares. Las canciones populares
     * tendrán un máximo de @cantidad canciones
     */
//@Throws(Exception::class)
    fun obtainPopularByGenreServer(cantidad: Long): List<Pair<String, List<Recommendation>>>? {
//TODO:
        return listOf()
    }

    /**
     * Devuelve true si el usuario tiene una sesión abierta
     */
//TESTED
//@Throws(Exception::class)
fun isOtherSessionOpenFromSameUserServer(username: String, sessionToken: String): Boolean {
    var req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/session_open?token=$sessionToken", false)
    req.send(null)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val error: String, val size: Int, val songs: LongArray)

        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok") {
            return true
        }else if(json.error == "sessionClosed"){
            return false
        }else {
            Exception(json.error)
        }
    } else {
        Exception("Error "+req.status.toString())
    }
    return false
}

    /**
     * Devuelve la última canción escuchada por el usuario en alguna de sus sesiones
     */
//@Throws(Exception::class)
    fun obtainLastSongListenedServer(username: String, sessionToken: String): Song? {
        println("obtainLastSongListenedServer")
        var req = XMLHttpRequest()
        req.open("GET", "$server/users/$username/songs/lastListened", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val songs: LongArray)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.songs.toList()) {
                    val song = obtainSongFromID(i)
                    if (song != null) {
                        result.add(song)
                    }
                }
            }
            return result[-1]
        } else {
            Exception("Error")
        }
        return null
    }

    /**
     * Crea una lista en el servidor
     */
//@Throws(Exception::class)
    fun createPlaylistServer(username: String, sessionToken: String, playlist: Playlist):Long {
        println("createPlaylistServer")
        var req = XMLHttpRequest()
        req.open("PUT", "$server/user-lists/$username/create?token=$sessionToken&title=${playlist.name}", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class DataList(val creation_time: Long, val amount: Int,val author: Int, val id: Int)
            data class Data(val error: String, val list: DataList)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            }else {
                playlist.id = json.list.id.toLong()
                return json.list.id.toLong()
            }

        }else {
                Exception("Error")
            }
        return -1
    }

    /**
     * Elimina una lista en el servidor
     */
//@Throws(Exception::class)
    fun deletePlaylistServer(username: String, sessionToken: String, playlist: Playlist) {
        println("deletePlaylistServer")
        var req = XMLHttpRequest()
        req.open("DELETE", "$server/user-lists/$username/create?token=$sessionToken&title=${playlist.name}", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            } else {
                Exception("Error")
            }
        }
    }


fun addSongToPlayListServer(username: String, sessionToken: String, playlistId: Long, song: Song){
    println("addSongToPlayListServer")
    var req = XMLHttpRequest()
    req.open("POST", "$server/user-lists/$username/$playlistId/add", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var data = createForm(mapOf("token" to sessionToken, "songId" to song.id.toString()))
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        data class Data ( val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok") {
            Exception(json.error)
        }
    }else {
        Exception("Error ${req.response.toString()}")
    }
}


fun removeSongToPlayListServer(username: String, sessionToken: String, playlistId: Long, song: Song){
    println("removeSongToPlayListServer")
    var req = XMLHttpRequest()
    req.open("POST", "$server/user-lists/$username/$playlistId/remove", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var data = createForm(mapOf("token" to sessionToken, "songId" to song.id.toString()))
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        data class Data ( val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok") {
            Exception(json.error)
        }
    }else {
        Exception("Error ${req.response.toString()}")
    }
}
    /**
     * Actualiza una lista en el servidor
     */
    // CAREFULL NEED TESTING
//@Throws(Exception::class)
    fun updatePlaylistServer(username: String, sessionToken: String, playlist: Playlist) {
        val serverlist = obtainPlaylistDataServer(playlist.id!!)
        for (song in playlist.content){
            if (song !in serverlist!!.content){
                addSongToPlayListServer(username, String(),playlist.id!!,song)
            }
        }
        for (song in serverlist!!.content){
            if (song !in playlist.content){
                removeSongToPlayListServer(username, String(),playlist.id!!,song)
            }
        }
    }

    //@Throws(Exception::class)
    fun obtainGeneresServer(): List<String> {
        //TODO:
        return listOf()
    }

    //@Throws(Exception::class)
    fun obtainAlbumsFromUserServer(username: String): List<Album> {
        println("obtainAlbumsFromUserServer")
        var req = XMLHttpRequest()
        req.open("GET", "$server/users/$username/albums", false)
        req.send(null)
        val result = mutableListOf<Album>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val albums: LongArray)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.albums) {
                    val album = obtainAlbumFromID(i)
                    if (album != null) {
                        result.add(album)
                    }
                }
            }
            return result
        } else {
            Exception("Error ${req.response.toString()}")
        }
        return listOf()
    }


    //@Throws(Exception::class)
    fun createAlbumsServer(username: String, sessionToken: String, album: Album):Long {
        var req = XMLHttpRequest()
        req.open("POST", "$server/albums/$username/create", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        var data = createForm(mapOf("token" to sessionToken, "title" to album.name, "year" to album.releaseDate.getFullYear().toString()))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            data class DataAlbum(val publish_year: Int,
                                 val image: String,
                                 val update_time: Long,
                                 val user_id: Long,
                                 val songs: List<String>,
                                 val id: Int,
                                 val title: String)
            data class Data (val album: DataAlbum, val error: String)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            }else{
                album.id = json.album.id.toLong()
                album.creator = obtainUserDataServerFromID(json.album.user_id, null)!!
                return json.album.id.toLong()
            }
        }else {
                Exception("Error ${req.response.toString()}")
            }
        return -1
    }

fun addSongToAlbumServer(username: String, sessionToken: String, albumId: Long, song: Song){
    println("addSongToAlbumServer")
    var req = XMLHttpRequest()
    req.open("POST", "$server/albums/$username/$albumId/add", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var data = createForm(mapOf("token" to sessionToken, "songId" to song.id.toString()))
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        data class Data ( val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok") {
            Exception(json.error)
        }
    }else {
        Exception("Error ${req.response.toString()}")
    }
}
fun removeSongToAlbumServer(username: String, sessionToken: String, albumId: Long, song: Song){
    println("removeSongToAlbumServers")
    var req = XMLHttpRequest()
    req.open("POST", "$server/user-lists/$username/$albumId/delete", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var data = createForm(mapOf("token" to sessionToken, "songId" to song.id.toString()))
    req.send(data)
    if (req.status.compareTo(200) == 0) {
        data class Data ( val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error != "ok") {
            Exception(json.error)
        }
    }else {
        Exception("Error ${req.response.toString()}")
    }
}
    //@Throws(Exception::class)
    fun updateAlbumsServer(username: String, sessionToken: String, album: Album) {
        val serverlist = obtainAlbumFromID(album.id!!)
        for (song in album.content){
            if (song !in serverlist!!.content){
                addSongToPlayListServer(username, String(),album.id!!,song)
            }
        }
        for (song in serverlist!!.content){
            if (song !in album.content){
                removeSongToPlayListServer(username, String(),album.id!!,song)
            }
        }
    }

    //@Throws(Exception::class)
    fun deleteAlbumsServer(username: String, sessionToken: String, album: Album):Boolean {
        println("deleteAlbumsServer")
        var req = XMLHttpRequest()
        req.open("POST", "$server/albums/${album.id}/delete", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        var data = createForm(mapOf("nick" to username, "token" to sessionToken))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            data class Data ( val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            }else{
                return true
            }
        }else {
            Exception("Error ${req.response.toString()}")
        }
        return false
    }

    fun isUserAdmin(username: String, sessionToken: String): Boolean{
        val user = obtainUserDataServer(username, sessionToken)
        if (user!!.admin == null){
            return false
        }else {
            return user.admin!!
        }
    }
    fun verifyUser(username: String, admin: String, sessionToken: String, verify: Boolean){
        println("verifyUser")
        val req = XMLHttpRequest()
        req.open("POST", "$server/users/$username/verify", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        val data = createForm(mapOf("token" to sessionToken, "self" to admin, "verify" to verify.toString()))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
        } else {
            throw Exception("Error ${req.status}")
        }
    }
    fun deleteSongServer(username: String, sessionToken: String, song: Song){
        println("deleteSongServer")
        val req = XMLHttpRequest()
        req.open("POST", "$server/songs/${song.id}/delete", false)
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        val data = createForm(mapOf("token" to sessionToken, "nick" to username))
        req.send(data)
        if (req.status.compareTo(200) == 0) {
            println(req.responseText)
            data class Data(val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok"){
                throw Exception(json.error)
            }
        } else {
            throw Exception("Error ${req.status}")
        }
    }
fun doUpdateAccountServer(user: User, sessionToken: String){
    var username = user.name
    var update :String = "{\"update\":{\"username\":"
    update += "username:$username,mail:${user.email},bio:${user.biography},birth_date:${user.birthDate}}}"
    println("deleteSongServer")
    val req = XMLHttpRequest()
    req.open("PUT", "$server/users/$username?token=$sessionToken&body={$update}", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: Json)
        val json = JSON.parse<Data>(req.responseText)
        for(key in js("Object").keys(json.error)){
            if (json.error[key] != "ok"){
                throw Exception(json.error[key].toString())
            }
        }
    } else {
        throw Exception("Error ${req.status}")
    }
}







