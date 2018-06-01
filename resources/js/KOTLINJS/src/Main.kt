import apis.*
import models.Album
import models.Playlist
import models.Song
import models.User
import org.w3c.xhr.XMLHttpRequest
import test.InstrumentedTestBackEndSpreadYoutMusic
import kotlin.js.Date
import kotlin.js.Json
import kotlin.js.iterator
import kotlin.js.json

fun test_user(): Boolean{
    try {
        var user = User("testJS", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token = doSignUpServer(user)
        var token2 = doLoginServer("testJS", "1234567")
        println("Check if equals " + (token == token2).toString())
        println("Check if deleted " + doDeleteAccountServer("testJS", token))
        return true
    } catch (e: Exception) {
        println(e)
        return false
    }

}

fun test_logout(): Boolean{
    try {
        var user = User("testJS", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token = doSignUpServer(user)
        doLogoutServer("testJS", token)
        try {
            if (doDeleteAccountServer("testJS", token)) {
                println("Test Error")
            }

        } catch (e: Exception) {
            println(e)
            println("Test "+(e.message =="invalidToken").toString())
        }
        var token2 = doLoginServer("testJS", "1234567")
        if (doDeleteAccountServer("testJS", token2)){
            println("PASSED")
            return true
        }else{
            return false
        }
    } catch (e: Exception) {
        var token = doLoginServer("testJS","1234567")
        doDeleteAccountServer("testJS", token)
        return false
    }
}

fun test_following():Boolean {
    try {
        var user = User("testJS1", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)
        var following = getFollowedUsersServer("testJS1")
        if (following.isNotEmpty()) {
            return false
        }
        var user2 = User("testJS2", "1234567")
        user2.name = "Test2"
        user2.email = "test2@test.com"
        var token = doSignUpServer(user2)
        // El usuario testJS1 sigue a testJS2
        if (!addFollowerToUserServer("testJS1", token1, "testJS2")) {
            return false
        }
        if(!isUserFollowedByUserServer("testJS1", "testJS2")){
            return false
        }
        if(isUserFollowedByUserServer("testJS2", "testJS1")){
            return false
        }
        // testJS2 tiene 1 seguidor
        var number : Long = getNumberOfFollowersOfUserServer("testJS2")
        if (number.toInt() != 1) {
            return false
        }
        // testJS2 su seguirdor es testJS1
        following = getFollowersOfUserServer("testJS2")
        if (following.size != 1 || following[0].username != "testJS1") {
            return false
        }
        // testJS1 sigue a un usuario que es testJS2
        following = getFollowedUsersServer("testJS1")
        if (following.size != 1 || following[0].username != "testJS2") {
            return false
        }
        // Ya no le sigue
        if (!deleteFollowerToUserServer("testJS1", "", "testJS2")) {
            return false
        }
        // testJS1 ya no sigue a nadie
        following = getFollowedUsersServer("testJS1")
        if (following.isNotEmpty()) {
            return false
        }
        token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)
        token = doLoginServer("testJS2", "1234567")
        doDeleteAccountServer("testJS2", token)
        return true

    } catch (e: Exception) {
        println(e)
    }finally {
        var token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)
        token = doLoginServer("testJS2", "1234567")
        doDeleteAccountServer("testJS2", token)
    }
    return false
}
fun test_album():Boolean{
    try {

        var user = User("testJS1", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)

        var albums = obtainAlbumsFromUserServer("testJS1")
        if (albums.isNotEmpty()){
            return false
        }
        var album = Album(0, "testJSAlbum", obtainUserDataServer("testJS1",null)!!, Date(Date.now()),"", mutableListOf())
        createAlbumsServer("testJS1",token1,album)
        albums = obtainAlbumsFromUserServer("testJS1")
        if (albums.size == 0 || albums[0].name != "testJSAlbum"){
            return false
        }
        if(!deleteAlbumsServer("testJS1",token1,album)){
            return false
        }
        return true
    }catch (e: Exception){
        println(e)
    }finally {
        var token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)
    }
    return false
}
fun testfav():Boolean{
    try {

        var user = User("testJS1", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)

        var albums = obtainAlbumsFromUserServer("testJS1")
        if (albums.isNotEmpty()){
            return false
        }
        var song : Song = Song(-1,"TestJSSong","ESP","",0,null,"",null)

        uploadSongServer("testJS1", token1,song)



        return true
    }catch (e: Exception){
        println(e)
    }finally {
        var token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)
    }
    return false
}

fun test_songlist():Boolean{
    try {

        var user = User("testJS1", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)

        var songlist = getFollowedPlaylistsServer("testJS1")
        if (songlist.isNotEmpty()){
            return false
        }
        val playlist = Playlist(-1,"myPlaylist",user,"", listOf(), listOf())
        createPlaylistServer("testJS1",token1,playlist)


        return true
    }catch (e: Exception){
        println(e)
    }finally {
        var token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)
    }
    return false
}

fun test_songs():Boolean{
    try {

        var user = User("testJS1", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)

        var songs = obtainSongsFromUserServer("testJS1")
        if (songs.isNotEmpty()){
            return false
        }
        var song : Song = Song(-1,"TestJSSong","ESP","",0,null,"",null)

        uploadSongServer("testJS1", token1,song)
        songs = obtainSongsFromUserServer("testJS1")
        if (songs.size != 1 || songs[0].name != "TestJSSong"){
            return false
        }

        return true
    }catch (e: Exception){
        println(e)

    }finally {
        var token = doLoginServer("testJS1", "1234567")
        doDeleteAccountServer("testJS1", token)

    }
    return false
}


fun main(args: Array<String>) {
    //isUserAdmin("abel","bmckb8sp5afrrjdz")


    val Test = InstrumentedTestBackEndSpreadYoutMusic()
    //Test.UserRequestTest() //PASSED
    //Test.SongsRequestTest() //PASSED
    //Test.AlbumRequestTest() //PASSED
    Test.PlaylistRequestTest()
    Test.ComplexRequestsTest()


}