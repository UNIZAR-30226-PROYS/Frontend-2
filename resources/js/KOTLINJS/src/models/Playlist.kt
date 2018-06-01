package models

/**
 * Created by abel on 26/04/18.
 */

<<<<<<< HEAD
class Playlist() : Recommendation{

    var id: Long = 0
    var name: String = ""
    var creator: User? = null
    var artLocationUri: String? = null
    var content: List<Song> = emptyList()
	var followed: List<User> = emptyList()

    constructor( id: Long, name: String,  creator: User, artLocationUri: String, content: List<Song>, followed: List<User>): this(){
        this.id = id
        this.name = name
        this.creator = creator
        this.artLocationUri = artLocationUri
        this.content = content
		this.followed = followed;
    }

    constructor( id: Long, name: String,  creator: User, artLocationUri: String): this(){
        this.id = id
        this.name = name
        this.creator = creator
        this.artLocationUri = artLocationUri
    }

=======
class Playlist(var id: Long?, val name: String, val creator: User, val artLocationUri: String,
               val content: List<Song>, val followed: List<User>) : Recommendation{
>>>>>>> backend
    fun getShareLink(): String{
        //TODO: El link devuelto ha de ser el que apunta a la misma playlist desde la interfaz web
        return "https://www.google.es/"
    }
}