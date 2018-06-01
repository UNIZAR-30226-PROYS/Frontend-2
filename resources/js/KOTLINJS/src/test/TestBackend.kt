package test

import apis.*
import models.Album
import models.Playlist
import models.Song
import models.User
import kotlin.js.Date

/**
 * Instrumented test, which will execute on an Android device.
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */


class InstrumentedTestBackEndSpreadYoutMusic {

    fun UserRequestTest() {
        val username = "usuarioPruebasAndroid223"
        val username2 = "usuarioPruebasAndroid334"
        var token: String
        var token2: String
        val password = "1234"
        val user = User(username, password, "Prueba", "d", "prueba@prupru.com", null, Date(1998, 1, 1))
        val user2 = User(username2, password, "Prueba", "d", "prueb2a@prupru.com", null, Date(1998, 1, 1))
        //user.twitterAccount = "dfsdf"
        try {
            token = doSignUpServer(user)

        }catch (e: Exception){
            if (e.message == "userExists") {
                token = doLoginServer(username, password)
            }else{
                throw Exception(e)
            }
        }
        try{
            token2 = doSignUpServer(user2)
        }catch (e: Exception){
            if (e.message == "userExists") {
                token2 = doLoginServer(username2, password)
            }else{
                throw Exception(e)
            }
        }

        //user.instagramAccount = "dfsdf"
        //user.facebookAccount = "dfsdf"
        //doUpdateAccountServer(user,token,)

        doLogoutServer(username, token)
        token = doLoginServer(username, password)

        obtainUserDataServer(username, "")
        obtainUserDataServer(username, token)


        try {
            addFollowerToUserServer(username, token, username2)
        }catch(e: Exception){
            if (e.message == "alreadyFollowing") {
                println(e.message)
            }else{
                throw Exception(e)
            }
        }

        if (getFollowedUsersServer(username).size != 1) throw Exception("getFollowedUsers")

        if (!isUserFollowedByUserServer(username, username2)) throw Exception("isUserFollowedByUserServer")

        if (getNumberOfFollowersOfUserServer(username2) != 1L) throw Exception("getNumberOfFollowersOfUserServer")

        deleteFollowerToUserServer(username, token, username2)

        doDeleteAccountServer(username, token)
        doDeleteAccountServer(username2, token2)
    }

    
    fun AlbumRequestTest() {
        val username = "usuarioPruebasAndroid555"
        val username2 = "usuarioPruebasAndroid444"
        var token: String
        var token2: String
        val password = "1234"
        val user = User(username, password, "Prueba", "d", "prueba@prupru.com", null, Date(1998, 1, 1))
        val user2 = User(username2, password, "Prueba", "d", "prueb2a@prupru.com", null, Date(1998, 1, 1))
        //user.twitterAccount = "dfsdf"

        val album = Album(null,"Spiderman", user, Date(1998, 1, 1), "sdf", listOf())

        try {
            token = doSignUpServer(user)

        }catch (e: Exception){
            if (e.message == "userExists") {
                token = doLoginServer(username, password)
            }else{
                throw Exception(e)
            }
        }
        try{
            token2 = doSignUpServer(user2)
        }catch (e: Exception){
            if (e.message == "userExists") {
                token2 = doLoginServer(username2, password)
            }else{
                throw Exception(e)
            }
        }

        val id = createAlbumsServer(username, token, album)

        obtainAlbumFromID(id)

        //if (obtainAlbumsFromUserServer(username).size != 1) throw Exception("obtainAlbumsFromUserServer")

        val song = Song(null,"nobre", "df", "", 0, null, null,"")

        val idS = uploadSongServer(username, token, song)
        val songD = obtainSongFromID(idS)

        addSongToAlbumServer(username,token,id,song)
        var album2 = obtainAlbumFromID(id)

        if(album2!!.content.size != 1 ) throw Exception("obtainAlbumsFromUserServer")

        removeSongToAlbumServer(username,token,id,song)

        album2 = obtainAlbumFromID(id)

        if(album2!!.content.isNotEmpty()) throw Exception("obtainAlbumsFromUserServer")

        deleteAlbumsServer(username, token,album2)

        doDeleteAccountServer(username, token)
        doDeleteAccountServer(username2, token2)
    }

    
    fun SongsRequestTest() {
        val username = "usuarioPruebasAndroid666"
        val username2 = "usuarioPruebasAndroid777"
        var token: String
        var token2: String
        val password = "1234"
        val user = User(username, password, "Prueba", "d", "prueba@prupru.com", null, Date(1998, 1, 1))
        val user2 = User(username2, password, "Prueba", "d", "prueb2a@prupru.com", null, Date(1998, 1, 1))
        val album = Album(null,"Spiderman", user, Date(1998, 1, 1), "sdf", listOf())

        try {
            token = doSignUpServer(user)

        }catch (e: Exception){
            if (e.message == "userExists") {
                token = doLoginServer(username, password)
            }else{
                throw Exception(e)
            }
        }
        try{
            token2 = doSignUpServer(user2)
        }catch (e: Exception){
            if (e.message == "userExists") {
                token2 = doLoginServer(username2, password)
            }else{
                throw Exception(e)
            }
        }

        val id = createAlbumsServer(username, token, album)

        val albumpass = obtainAlbumFromID(id)
        val song = Song(null,"nobre", "df", "",0,albumpass!!, "ds", null)

        val idS = uploadSongServer(username, token, song)
        val songD = obtainSongFromID(idS)

        addReproductionToSongServer(username2, token2, idS)

        setSongFavoutireServer(username2, token2, idS)
        if (!isSongFavoutireByUserServer(username2, token2, idS)) throw Exception("isSongFavoutireByUserServer")
        obtainFavouriteSongsByUserServer(username2, token2)

        //obtainPopularSongsServer(50)

        //obtainNewSongsFromFollowedArtistOfUserServer(username2, token2, 20)

        //obtainTrendSongsServer(50)

        //obtainTrendSongsInUserCountryServer(username2, token2, 20)

        obtainLastSongListenedServer(username2, token2)

        unSetSongFavoutireServer(username2, token2, idS)

        deleteSongServer(username, token, songD!!)
        doDeleteAccountServer(username, token)
        doDeleteAccountServer(username2, token2)
    }

    
    fun PlaylistRequestTest() {
        val username = "usuarioPruebasAndroid888"
        val username2 = "usuarioPruebasAndroid999"
        var token: String
        var token2: String
        val password = "1234"
        val user = User(username, password, "Prueba", "d", "prueba@prupru.com", null, Date(1998, 1, 1))
        val user2 = User(username2, password, "Prueba", "d", "prueb2a@prupru.com", null, Date(1998, 1, 1))
        val album = Album(null,"Spiderman", user, Date(1998, 1, 1), "sdf", listOf())

        try {
            token = doSignUpServer(user)

        }catch (e: Exception){
            if (e.message == "userExists") {
                token = doLoginServer(username, password)
            }else{
                throw Exception(e)
            }
        }
        try{
            token2 = doSignUpServer(user2)
        }catch (e: Exception){
            if (e.message == "userExists") {
                token2 = doLoginServer(username2, password)
            }else{
                throw Exception(e)
            }
        }

        val id = createAlbumsServer(username, token, album)

        val albumpass = obtainAlbumFromID(id)
        val song = Song(null,"nobre", "df", "", 0, albumpass!!, null,"")

        val idS = uploadSongServer(username, token, song)
        val songD = obtainSongFromID(idS)

        val songList = ArrayList<Song>()
        songList.add(songD!!)

        val playlist = Playlist(null,"nombre", albumpass.creator, "sadas", songList, listOf())

        val pid = createPlaylistServer(playlist.creator.username, token, playlist)

        val playlistData = obtainPlaylistDataServer(pid)

        addFollowerToPlaylistServer(username2, token2, pid)

        if (!isPlaylistFollowedByUserServer(username2, pid)) throw Exception("isPlaylistFollowedByUserServer")
        getNumberOfFollowersOfPlaylistServer(pid)
        getFollowedPlaylistsServer(username2)
        obtainUpdatedPlaylistsFollowedByUserServer(username2, token2, 30)
        deleteFollowerToPlaylistServer(username2, token2, pid)


        deleteSongServer(username, token, songD)

        deletePlaylistServer(playlist.creator.username, token, playlistData!!)

        doDeleteAccountServer(username, token)
        doDeleteAccountServer(username2, token2)
    }

    
    fun ComplexRequestsTest() {
        val username = "usuarioPruebasAndroid10101r"
        val username2 = "usuarioPruebasAndroid1010d"
        var token: String
        var token2: String
        val password = "1234"
        val user = User(username, password, "Prueba", "d", "prueba@prupru.com", null, Date(1998, 1, 1))
        val user2 = User(username2, password, "Prueba", "d", "prueb2a@prupru.com", null, Date(1998, 1, 1))
        val album = Album(null,"Spiderman", user, Date(1998, 1, 1), "sdf", listOf())
        try {
            token = doSignUpServer(user)

        }catch (e: Exception){
            if (e.message == "userExists") {
                token = doLoginServer(username, password)
            }else{
                throw Exception(e)
            }
        }
        try{
            token2 = doSignUpServer(user2)
        }catch (e: Exception){
            if (e.message == "userExists") {
                token2 = doLoginServer(username2, password)
            }else{
                throw Exception(e)
            }
        }

        val id = createAlbumsServer(username, token, album)

        val albumpass = obtainAlbumFromID(id)
        val song = Song(null,"nobre", "df","",0,album,null,"")

        val idS = uploadSongServer(username, token, song)
        val songD = obtainSongFromID(idS)

        val songList = ArrayList<Song>()
        songList.add(songD!!)

        val playlist = Playlist(null,"nombre", albumpass!!.creator, "sadas", songList, listOf())

        val pid = createPlaylistServer(playlist.creator.username, token, playlist)

        val playlistData = obtainPlaylistDataServer(pid)

        addFollowerToPlaylistServer(username2, token2, pid)

        if (!isPlaylistFollowedByUserServer(username2, pid)) throw Exception("isPlaylistFollowedByUserServer")
        getNumberOfFollowersOfPlaylistServer(pid)
        getFollowedPlaylistsServer(username2)
        obtainUpdatedPlaylistsFollowedByUserServer(username2, token2, 30)
        deleteFollowerToPlaylistServer(username2, token2, pid)

        obtainSongsFromUserServer(albumpass.creator.username)

        obtainPlaylistsFromUserServer(albumpass.creator.username)

        obtainRecomendationsForUserServer(username, token, 20)

        obtainResultForQueryServer(20, "gosepumbs", null)
        obtainResultForQueryServer(20, "gosepumbs", 1)
        obtainPopularByGenreServer(20)

        isOtherSessionOpenFromSameUserServer(username, token)
        obtainGeneresServer()

        //deleteSongServer(username, token, songD)
        //deletePlaylistServer(playlist.creator.username, token, playlistData!!)

        doDeleteAccountServer(username, token)
        doDeleteAccountServer(username2, token2)
    }

}