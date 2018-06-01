package models

/**
 * Created by abel on 26/04/18.
 */

class Playlist(var id: Long?, val name: String, val creator: User, val artLocationUri: String,
               val content: List<Song>, val followed: List<User>) : Recommendation{
    fun getShareLink(): String{
        //TODO: El link devuelto ha de ser el que apunta a la misma playlist desde la interfaz web
        return "https://www.google.es/"
    }
}