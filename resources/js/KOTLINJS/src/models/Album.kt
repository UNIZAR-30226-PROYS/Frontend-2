package models

import kotlin.js.Date

/**
 * Created by abel on 26/04/18.
 */

class Album(
        var id:Long,
        val name: String,
        var creator: User,
        val releaseDate: Date,
        var artLocationUri : String,
        var content: List<Song>
)