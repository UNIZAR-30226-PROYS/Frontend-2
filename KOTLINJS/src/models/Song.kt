package com.spreadyourmusic.spreadyourmusic.models

/**
 * Created by abel on 26/04/18.
 */

class Song(val id: Long, val name: String, var locationUri: String, val duration: Long, val album: Album, val genere:String?, val lyricsPath:String?) : Recommendation {

    fun getShareLink(): String{
        //TODO: El link devuelto ha de ser el que apunta a la misma cancion desde la interfaz web
        return "https://www.google.es/"
    }
}