package apis


import models.*
import test.*
import org.w3c.xhr.*
import kotlin.js.Date
import kotlin.js.Json
import kotlin.js.iterator

fun createForm(mapa: Map<String, String?>): String{
    var result = String()
    for(i in mapa){
        println(i)
        if (i.value != null) {
            if (result.isEmpty()){
                result = "${i.key}=${i.value}"
            }else {
                result = result.concat("&${i.key}=${i.value}")
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

/*
/**
 * Elimina las letras de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteSongLyrics(songId: Long, context: Context): Boolean {
    AmazonS3UploadFileService.deleteFile("$songLyricsUploadPrefix$songId", context, {
    })
    return true
}

/**
 * Elimina el archivo de música de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteSongLocation(songId: Long, context: Context): Boolean {
    AmazonS3UploadFileService.deleteFile("$songLocationUploadPrefix$songId", context, {
    })
    return true
}

/**
 * Elimina la foto de perfil de un usuario
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteUserProfilePicture(username: String, context: Context): Boolean {
    AmazonS3UploadFileService.deleteFile("$userUploadPrefix$username", context, {
    })
    return true
}

/**
 * Elimina la foto de portada de una playlist
 * Devuelve true si la operación ha tenido exito
 */
private fun deletePlaylistCover(playlistId: Long, context: Context): Boolean {
    AmazonS3UploadFileService.deleteFile("$playlistUploadPrefix$playlistId", context, {
    })
    return true
}

/**
 * Elimina la foto de portada de un álbum
 * Devuelve true si la operación ha tenido exito
 */
private fun deleteAlbumCover(albumId: Long, context: Context): Boolean {
    AmazonS3UploadFileService.deleteFile("$albumUploadPrefix$albumId", context, {
    })
    return true
}


/**
 * Sube las letras de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadSongLyrics(songId: Long, filePath: String, context: Context): Boolean {
    AmazonS3UploadFileService.uploadFile(filePath, "$songLyricsUploadPrefix$songId", context, {
        // CUIDADO: Si falla al subir no se está tratando el error
    })

    return true
}

/**
 * Sube el archivo de música de una canción
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadSongLocation(songId: Long, filePath: String, context: Context): Boolean {
    AmazonS3UploadFileService.uploadFile(filePath, "$songLocationUploadPrefix$songId", context, {
        // CUIDADO: Si falla al subir no se está tratando el error
    })
    return true
}

/**
 * Sube la foto de perfil de un usuario
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadUserProfilePicture(username: String, filePath: String, context: Context): Boolean {
    AmazonS3UploadFileService.uploadFile(filePath, "$userUploadPrefix$username", context, {
        // CUIDADO: Si falla al subir no se está tratando el error
    })
    return true
}

/**
 * Sube la foto de portada de una playlist
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadPlaylistCover(playlistId: Long, filePath: String, context: Context): Boolean {
    AmazonS3UploadFileService.uploadFile(filePath, "$playlistUploadPrefix$playlistId", context, {
        // CUIDADO: Si falla al subir no se está tratando el error
    })
    return true
}

/**
 * Sube la foto de portada de un álbum
 * Devuelve true si la operación ha tenido exito
 */
private fun uploadAlbumCover(albumId: Long, filePath: String, context: Context): Boolean {
    AmazonS3UploadFileService.uploadFile(filePath, "$albumUploadPrefix$albumId", context, {
        // CUIDADO: Si falla al subir no se está tratando el error
    })
    return true
}
*/
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
    var req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/login", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    var data = createForm(mapOf("pass" to password))
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
    var id = user.id
    var nick = user.username
    var pass = user.password
    var email = user.email
    var user = user.name
    var birth = null

    var data = createForm(mapOf("mail" to email, "pass0" to pass, "pass1" to pass, "user" to user, "birth" to birth))
    var req = XMLHttpRequest()
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
    var req = XMLHttpRequest()
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
    return false
}

/**
 * Realiza un logout en el servidor
 */
//TESTED
//@Throws(Exception::class)
fun doLogoutServer(username: String, sessionToken: String):Boolean {
    var req = XMLHttpRequest()
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
 * Obtiene la información asociada al usuario con nick @username
 */
//TESTED
//@Throws(Exception::class)
fun obtainUserDataServer(username: String, sessionToken: String?): User? {
    var req = XMLHttpRequest()
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
                            val intragram: String)
        data class Data(val profile: UserData, val error: Boolean)
        val json = JSON.parse<Data>(req.responseText)
        var user = User(json.profile.nick,json.profile.user, json.profile.mail!!, getUserProfilePicturePath(json.profile.bio))
        user.biography = json.profile.bio
        if (json.profile.birth_date.toString() != "-1") {
            var date = json.profile.birth_date.split('-')
            user.birthDate = Date(date[0].toInt(), date[1].toInt(), date[2].toInt())
        }
        user.country = json.profile.country
        user.country = json.profile.country
        user.facebookAccount = json.profile.facebook
        user.twitterAccount = json.profile.twitter
        user.instagramAccount = json.profile.intragram
        return user
    }else {
        Exception("Error")
    }
    return null
}


fun getSong(songId: Long): Song?{
    var req = XMLHttpRequest()
    req.open("GET", "$server/songs/$songId", false)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        data class DataSong(val country: String, val upload_time: Long, val id: Long, val title: String, val user_id: Long)
        data class Data(val song: DataSong, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            var song = Song(json.song.id,json.song.title, getSongLocationPath(json.song.id), 0,null, null, getSongLyricsPath(json.song.id))
            return song
        }else{
            Exception(json.error)}
    }
    return null
}
/**
 * Obtiene las canciones creados por el usuario @user del servidor
 */
//@Throws(Exception::class)
fun obtainSongsFromUserServer(username: String): List<Song> {
    var req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/songs", false)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val size: Int, val songs: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.songs) {
                val song = getSong(i)
                if (song != null) {
                    result.add(song)
                }
            }
            return result
        }else{
        Exception(json.error)}
    }
    return result
}
//TESTED
fun getUser(userid: Long): User?{
    var req = XMLHttpRequest()

    req.open("GET", "$server/users/$userid/id", false)

    req.send(null)
    if (req.status.compareTo(200) == 0) {
        data class UserData(val nick: String, val mail_visible: Boolean, val country: String, val mail: String?,
                            val birth_date: String, val verified: Boolean, val bio: String,
                            val register_date: Long, val id: Int, val user: String, val facebook: String, val twitter: String,
                            val intragram: String)
        data class Data(val profile: UserData, val error: Boolean)
        val json = JSON.parse<Data>(req.responseText)
        var user = User(json.profile.nick,json.profile.user, json.profile.mail!!, getUserProfilePicturePath(json.profile.bio))
        user.biography = json.profile.bio
        if (json.profile.birth_date.toString() != "-1") {
            var date = json.profile.birth_date.split('-')
            user.birthDate = Date(date[0].toInt(), date[1].toInt(), date[2].toInt())
        }
        user.country = json.profile.country
        user.facebookAccount = json.profile.facebook
        user.twitterAccount = json.profile.twitter
        user.instagramAccount = json.profile.intragram
        return user
    }else {
        Exception("Error")
    }
    return null
}

fun getSongList(songId: Long): Playlist?{
    var req = XMLHttpRequest()
    req.open("GET", "$server/songs/$songId", false)
    val result = mutableListOf<Song>()
    if (req.status.compareTo(200) == 0) {
        //val id: Long, val name: String, val creator: User, val artLocationUri: String, val content: List<Song>
         data class Data(val title: String, val author: Long, val creation_time: Long, val songs_size: Int,
                        val songs: LongArray, val followers_size: Int, val followers: LongArray,  val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            val Songs = mutableListOf<Song>()
            for(i in json.songs){
                val song = getSong(i)
                if (song != null) {
                    Songs.add(song)
                }
            }
            var pl = Playlist(songId, json.title, getUser(json.author)!!, getPlaylistCoverPath(songId),Songs)
            return pl
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
    var req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$username/lists", false)
    val result = mutableListOf<Playlist>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val size: Int, val id: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.id) {
                val songlist = getSongList(i)
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

/**
 * Devuelve una lista con los usuarios a los que sigue el usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun getFollowedUsersServer(username: String): List<User> {
    println("FollowedUsersServer")
    var req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/follows", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    var result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Int, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (users_id in json.users.toList()) {
                var user = getUser(users_id)
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
//@Throws(Exception::class)
fun isUserFollowedByUserServer(username: String, user: String): Boolean {
//TODO:
    if (ServerEmulator.artistasSeguidos.containsKey(username)) {
        for (i in ServerEmulator.artistasSeguidos[username]!!) {
            if (i.username == user) return true
        }
        return false
    } else {
        return false
    }
}

/**
 * Devuelve una lista con los usuarios que siguen al usuario @username
 */
//TESTED
//@Throws(Exception::class)
fun getFollowersOfUserServer(username: String): List<User> {
    println("FollowedUsersServer")
    var req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/followers", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    var result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Int, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (users_id in json.users.toList()) {
                var user = getUser(users_id)
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

// NOT WORKING
//@Throws(Exception::class)
fun getNumberOfFollowersOfUserServer(username: String): Long {
    println("FollowedUsersServer")
    var req = XMLHttpRequest()
    req.open("GET", "$server/users/$username/followers", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send()
    if (req.status.compareTo(200) == 0) {
        println(req.responseText)
        data class Data(val error: String, val size: Long, val users: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            return json.size
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
//@Throws(Exception::class)
fun addFollowerToUserServer(username: String, sessionToken: String, followed: String): Boolean {

    var req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/follow/$followed", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
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
//@Throws(Exception::class)
fun deleteFollowerToUserServer(username: String, sessionToken: String, followed: String): Boolean {
    var req = XMLHttpRequest()
    req.open("POST", "$server/users/$username/unfollow/$followed", false)
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.send(null)
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
//@Throws(Exception::class)
fun getFollowedPlaylistsServer(username: String): List<Playlist> {
    var req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$username/following", false)
    val result = mutableListOf<Playlist>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val id: LongArray, val error: String)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok"){
            for (i in json.id) {
                val songlist = getSongList(i)
                if (songlist != null) {
                    result.add(songlist)
                }
            }
            return result
        }else{
            Exception(json.error)}
    }
    return ServerEmulator.playlistSeguidos[username]!!

}

/**
 * Devuelve true si la playlist @playlist es seguida por el usuario @username
 */
//@Throws(Exception::class)
fun isPlaylistFollowedByUserServer(username: String, playlist: Long): Boolean {
    var Lists = getFollowedPlaylistsServer(username)
    for(list in Lists){
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
    var req = XMLHttpRequest()
    req.open("GET", "$server/user-lists/$playlist/followed", false)
    val result = mutableListOf<User>()
    if (req.status.compareTo(200) == 0) {
        data class Data(val error: String, val size: Int, val id: LongArray)
        val json = JSON.parse<Data>(req.responseText)
        if (json.error == "ok") {
            for (i in json.id) {
                val user = getUser(i)
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
        var list = getFollowersOfPlaylistServer(playlist)
        return list.size.toLong()
    }

    /**
     * Añade el usuario @username como seguidor de la playlist @followed
     */
//@Throws(Exception::class)
    fun addFollowerToPlaylistServer(username: String, sessionToken: String, followed: Long) {
        var req = XMLHttpRequest()
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
        var req = XMLHttpRequest()
        req.open("DELETE", "$server/user-lists/$username/$followed/unfollow?token=$sessionToken", false)
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
        val seguido = ServerEmulator.playlistList[followed]
        ServerEmulator.playlistSeguidos[username]!!.remove(seguido!!)
    }

    /**
     * Añade una reproducción a la canción @song
     * En caso de ser un usuario no logeado username y sessionToken seran igual a null
     */
//@Throws(Exception::class)
    fun addReproductionToSongServer(username: String?, sessionToken: String?, song: Long) {
        //TODO:
    }

    /**
     * Añade la cancion @song como favorita del usuario @username
     */
//@Throws(Exception::class)
    fun setSongFavoutireServer(username: String, sessionToken: String, song: Long) {
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/user/$username/fav?token=$sessionToken&songId=$song", false)
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
     * Elimina la cancion @song como favorita del usuario @username
     */
//@Throws(Exception::class)
    fun unSetSongFavoutireServer(username: String, sessionToken: String, song: Long) {
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/user/$username/unfav?token=$sessionToken&songId=$song", false)
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
     * Devuelve true si la cancion @song es favorita del usuario @username
     */
//@Throws(Exception::class)
    fun isSongFavoutireByUserServer(username: String, sessionToken: String, song: Long): Boolean {
        var req = XMLHttpRequest()
        req.open("GET", "$server/songs/user/$username/faved/$song", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                return true
            } else {
                if (json.error == "noFav") {
                    return false
                } else {
                    Exception(json.error)
                }
            }
        } else {
            Exception("Error")
        }
        return false
    }

    /**
     * Obtiene la información asociada a la playlist con id @id
     * Warning: esta operación puede ser costosa en tiempo
     */
//@Throws(Exception::class)
    fun obtainPlaylistDataServer(id: Long): Playlist? {
        return getSongList(id)
    }

    //@Throws(Exception::class)
    fun uploadSongServer(username: String, sessionToken: String, song: Song) {
//TODO:
    }

    /**
     * Devuelve las canciones favoritas de un usuario
     */
//@Throws(Exception::class)
    fun obtainFavouriteSongsByUserServer(username: String, sessionToken: String): List<Song>? {
        var req = XMLHttpRequest()
        req.open("GET", "$server/songs/user/$username/faved/", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val songs: LongArray)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.songs) {
                    val songlist = getSong(i)
                    if (songlist != null) {
                        result.add(songlist)
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
     * Devuelve una lista de @cantidad de Artistas, Playlist y Canciones recomendadas para el usuario @username
     */
//@Throws(Exception::class)
    fun obtainRecomendationsForUserServer(username: String, sessionToken: String, cantidad: Long): List<Recommendation>? {
//TODO:
        return ServerEmulator.recomendaciones[username]
    }

    /**
     * Devuelve las canciones populares (plazo de una semana o un mes)
     */
//@Throws(Exception::class)
    fun obtainPopularSongsServer(cantidad: Long): List<Song>? {
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/popular?n=$cantidad", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            //TODO
        } else {
            Exception("Error")
        }
        return result
    }

    /**
     * Devuelve la lista de maximo @cantidad canciones nuevas de los artistas seguidos
     */
//@Throws(Exception::class)
    fun obtainNewSongsFromFollowedArtistOfUserServer(username: String, sessionToken: String, cantidad: Long): List<Song>? {
//TODO:
        return ServerEmulator.trends
    }

    /**
     * Devuelve las canciones populares (ultimo dia o ultimos dias)
     */
//@Throws(Exception::class)
    fun obtainTrendSongsServer(cantidad: Long): List<Song>? {
//TODO:
        return ServerEmulator.trends
    }

    /**
     * Devuelve las canciones populares en el pais de origen del usuario (ultimo dia o ultimos dias)
     */
//@Throws(Exception::class)
    fun obtainTrendSongsInUserCountryServer(username: String, cantidad: Long): List<Song>? {
        var user = obtainUserDataServer(username, null)
        var country = user!!.country
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/popular/$country?n=$cantidad", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            //TODO
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
        return ServerEmulator.playlistSeguidos[username]
    }

    /**
     * Devuelve la lista de maximo @cantidad resultados a la consulta @query
     * Si tipo es null devuelve todos los resultados a la query realizada, si tipo es 1 devuelve solamente canciones, si tipo = 2
     * devuelve solamente playlists y si tipo = 3 devuelve solamente autores
     */
//@Throws(Exception::class)
    fun obtainResultForQueryServer(cantidad: Long, query: String, tipo: Int?): List<Recommendation>? {
        return ServerEmulator.trends
        var req = XMLHttpRequest()
        req.open("POST", "$server/songs/search?n=$cantidad&query=$query", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            //TODO
        } else {
            Exception("Error")
        }

    }

    /**
     * Devuelve una lista compuesta por pares nombre del genero, canciones populares. Las canciones populares
     * tendrán un máximo de @cantidad canciones
     */
//@Throws(Exception::class)
    fun obtainPopularByGenreServer(cantidad: Long): List<Pair<String, List<Recommendation>>>? {
//TODO:
        return ServerEmulator.generos
    }

    /**
     * Devuelve true si el usuario tiene una sesión abierta
     */
//@Throws(Exception::class)
    fun isOtherSessionOpenFromSameUserServer(username: String, sessionToken: String): Boolean {
//TODO:
        return false
    }

    /**
     * Devuelve la última canción escuchada por el usuario en alguna de sus sesiones
     */
//@Throws(Exception::class)
    fun obtainLastSongListenedServer(username: String, sessionToken: String): Song? {
        var req = XMLHttpRequest()
        req.open("GET", "$server/users/$username/songs/lastListened", false)
        req.send(null)
        val result = mutableListOf<Song>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val songs: LongArray)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.songs) {
                    val songlist = getSong(i)
                    if (songlist != null) {
                        result.add(songlist)
                    }
                }
            }
            return result[-1]
        } else {
            Exception("Error")
        }
        return ServerEmulator.songList[1]
    }

    /**
     * Crea una lista en el servidor
     */
//@Throws(Exception::class)
    fun createPlaylistServer(username: String, sessionToken: String, playlist: Playlist) {
        var req = XMLHttpRequest()
        req.open("PUT", "$server/user-lists/$username/create?token=$sessionToken&title=${playlist.name}", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val id: Long)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            } else {
                Exception("Error")
            }
        }
    }

    /**
     * Elimina una lista en el servidor
     */
//@Throws(Exception::class)
    fun deletePlaylistServer(username: String, sessionToken: String, playlist: Playlist) {
        var req = XMLHttpRequest()
        req.open("DELETE", "$server/user-lists/$username/create?token=$sessionToken&title=${playlist.name}", false)
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

    /**
     * Actualiza una lista en el servidor
     */
//@Throws(Exception::class)
    fun updatePlaylistServer(username: String, sessionToken: String, playlist: Playlist) {
//TODO:
    }

    //@Throws(Exception::class)
    fun obtainGeneresServer(): List<String> {
        //TODO:
        return ServerEmulator.generesList
    }

    fun getAlbum(albumId: Long): Album? {
        var req = XMLHttpRequest()
        req.open("GET", "$server/albums/$albumId", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            data class AlbumData(val publish_year: Int, val image: String, val update_time: Long, val user_id: Long,
                                 val id: Long, val title: String)

            data class Data(val album: AlbumData, val error: String)

            val json = JSON.parse<Data>(req.responseText)

            if (json.error == "ok") {
                var album = Album(json.album.id, json.album.title, getUser(json.album.user_id)!!, Date(), getAlbumCoverPath(json.album.id))

            } else {
                Exception(json.error)
            }
        } else {
            Exception("Error")
        }
        return null
    }

    //@Throws(Exception::class)
    fun obtainAlbumsFromUserServer(username: String): List<Album> {
        var req = XMLHttpRequest()
        req.open("GET", "$server/users/$username/albums", false)
        req.send(null)
        val result = mutableListOf<Album>()
        if (req.status.compareTo(200) == 0) {
            data class Data(val error: String, val size: Int, val albums: LongArray)

            val json = JSON.parse<Data>(req.responseText)
            if (json.error == "ok") {
                for (i in json.albums) {
                    val album = getAlbum(i)
                    if (album != null) {
                        result.add(album)
                    }
                }
            }
            return result
        } else {
            Exception("Error")
        }
        return ServerEmulator.albumList
    }


    //@Throws(Exception::class)
    fun createAlbumsServer(username: String, sessionToken: String, album: Album) {
        var req = XMLHttpRequest()
        req.open("POST", "$server/albums/$username/create?token=$sessionToken&title=${album.name}", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            //TODO
            data class Data(val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            } else {
                Exception("Error")
            }
        } else {
            ServerEmulator.albumList.add(album)
        }
    }

    //@Throws(Exception::class)
    fun updateAlbumsServer(username: String, sessionToken: String, album: Album) {
        //TODO:
    }

    //@Throws(Exception::class)
    fun deleteAlbumsServer(username: String, sessionToken: String, album: Album) {
        var req = XMLHttpRequest()
        req.open("POST", "$server/albums/$username/create?token=$sessionToken&title=${album.id}", false)
        req.send(null)
        if (req.status.compareTo(200) == 0) {
            //TODO
            data class Data(val error: String)
            val json = JSON.parse<Data>(req.responseText)
            if (json.error != "ok") {
                Exception(json.error)
            } else {
                Exception("Error")
            }
        } else {
            ServerEmulator.albumList.add(album)
        }
    }







