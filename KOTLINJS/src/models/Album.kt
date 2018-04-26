package com.spreadyourmusic.spreadyourmusic.models

import kotlin.js.Date

/**
 * Created by abel on 26/04/18.
 */

class Album(val id:Long, val name: String, val creator: User, val releaseDate: Date, var artLocationUri : String)