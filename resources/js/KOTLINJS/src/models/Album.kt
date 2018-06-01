package models

import kotlin.js.Date

/**
 * Created by abel on 26/04/18.
 */

class Album() : Recommendation {

    var id: Long = 0
    var name: String = ""
    var creator: User? = null
    var releaseDate: Date = Date(2018, 6)
    var artLocationUri: String? = null
    var content: List<Song> = emptyList()

    constructor(id: Long, name: String, creator: User, releaseDate: Date, artLocationUri: String, content: List<Song>) : this() {
        this.id = id
        this.name = name
        this.creator = creator
        this.artLocationUri = artLocationUri
        this.content = content
        this.releaseDate = releaseDate
    }

    constructor(id: Long, name: String, creator: User, artLocationUri: String) : this() {
        this.id = id
        this.name = name
        this.creator = creator
        this.artLocationUri = artLocationUri
    }

}