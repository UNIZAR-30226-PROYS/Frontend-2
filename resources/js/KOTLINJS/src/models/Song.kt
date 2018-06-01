package models

/**
 * Created by abel on 26/04/18.
 */

class Song() : Recommendation {
        var id: Long = 0
        var name: String = ""
        var country: String  = ""
        var locationUri: String  = ""
        var duration: Long = 0
        var album: Album = Album()
        var genere:String? = null
        var lyricsPath:String? = null

    constructor(id: Long, name: String, country: String, locationUri: String, duration:Long, album:Album, genere:String, lyrics:String):this(){
        this.id = id
        this.name = name
        this.country = country
        this.locationUri = locationUri
        this.duration = duration
        this.album = album
        this.genere = genere
        this.lyricsPath = lyrics
    }

    constructor(album: Album, id: Int, name: String, duration: Long, locationUri: String, lyricsPath: String, genere: String, country: String):this(){

    }

    constructor(id: Long, title: String, country: String, songLocationPath: String, i: Int, nothing: Nothing?, s: String, songLyricsPath: String):this(){
        this.id = id
        this.name = title
        this.country = country
        this.locationUri = songLocationPath

    }

}


