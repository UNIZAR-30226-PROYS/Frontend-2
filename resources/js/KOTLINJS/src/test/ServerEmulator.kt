package test

import models.*
import kotlin.collections.ArrayList
import kotlin.js.Date

object ServerEmulator {
    val songList = HashMap<Long, Song>()
    val userList = HashMap<String, User>()
    val playlistList = HashMap<Long, Playlist>()
    val generesList = ArrayList<String>()
    val albumList = ArrayList<Album>()

    val albumaux = ArrayList<Song>()
    val artistas = ArrayList<User>()
    val albumes = ArrayList<Album>()
    val songsVarious = ArrayList<Song>()
    val songList2 = ArrayList<Song>()


    val cancionesFavoritas = HashMap<String, ArrayList<Song>>()
    val artistasSeguidos = HashMap<String, ArrayList<User>>()
    val playlistSeguidos = HashMap<String, ArrayList<Playlist>>()

    val recomendaciones = HashMap<String, ArrayList<Recommendation>>()
    val trends = ArrayList<Song>()

    val generos = ArrayList<Pair<String, List<Recommendation>>>()

    init {
        // TODO: HACER
        val autor1 = User("Kendrick", "kendrick", "Right", "/resources/imgs/albumkendr.jpg")
        autor1.twitterAccount = "https://twitter.com/kendricklamar?lang=es"
        autor1.facebookAccount = "https://es-la.facebook.com/kendricklamar/"
        autor1.instagramAccount = "https://www.instagram.com/kendricklamar/?hl=es"
        val autor2 = User("Silent", "Silent", "Partner", "/resources/imgs/artistasap.jpeg")
        val autor3 = User("abelcht", "Abel ChT", "Lion", "http://storage.googleapis.com/automotive-media/album_art.jpg")
        val autor4 = User("Prueba", "PRU", "sdfdsfd", "http://storage.googleapis.com/automotive-media/album_art.jpg")

        val album1 = Album(1,"Jazz", autor1, Date(2018, 3, 22), "http://storage.googleapis.com/automotive-media/album_art.jpg")
        val album2 = Album(2,"Blues", autor2, Date(2017, 6, 27), "http://storage.googleapis.com/automotive-media/album_art_2.jpg")

        val cancion1 = Song(album = album1, id = 1, name = "Jazz in Paris",duration = 103000L, locationUri = "http://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3", lyricsPath = null, genere = null)
        val cancion2 = Song(album = album2, id = 2, name = "The Messenger",  duration = 132000L, locationUri = "http://storage.googleapis.com/automotive-media/The_Messenger.mp3", lyricsPath = null, genere = null)

        /************************************************************************************************************************/
        val album3 = Album(3,"good kid, m.A.A.d city", autor1, Date(2018, 3, 22), "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/70/95/78/7095785b-ddae-fa56-cd1e-b263345e2e3b/UMG_cvrart_00602537362769_01_RGB72_1426x1426_12UMGIM52990.jpg/268x0w.jpg")
        val album4 = Album(4,"Enter the 36 chamber", autor1, Date(2018, 3, 22), "/resources/imgs/wu.jpg")
        val album5 = Album(5,"Beerbongs & Bentleys", autor1, Date(2018, 3, 22), "/resources/imgs/albumpost.jpg")

        val cancion3 = Song(album = album3, id = 3, name = "4 AM",  duration = 132000L, locationUri = "/resources/music/4AM.mp3", lyricsPath = "/resources/example.srt", genere = null)
        val cancion4 = Song(album = album3, id = 4, name = "Sherane a.k.a Master Splinter’s Daughter",  duration = 132000L, locationUri = "/resources/music/4AM.mp3", lyricsPath = "/resources/example.srt", genere = null)
        val cancion5 = Song(album = album3, id = 5, name = "Bitch, Don't Kill My Vibe",  duration = 132000L, locationUri = "/resources/music/4AM.mp3", lyricsPath = "/resources/example.srt", genere = null)
        val cancion6 = Song(album = album3, id = 6, name = "Backseat Freestyle",  duration = 132000L, locationUri = "/resources/music/4AM.mp3", lyricsPath = "/resources/example.srt", genere = null)
        val cancion7 = Song(album = album3, id = 7, name = "The Art of Peer Pressure",  duration = 132000L, locationUri = "/resources/music/4AM.mp3", lyricsPath = "/resources/example.srt", genere = null)

        songList2.add( cancion1 )
        songList2.add( cancion2 )
        songList2.add( cancion3 )
        songList2.add( cancion4 )
        songList2.add( cancion5 )
        songList2.add( cancion6 )
        songList2.add( cancion7 )

        albumaux.add( cancion3 )
        albumaux.add( cancion4 )
        albumaux.add( cancion5 )
        albumaux.add( cancion6 )
        albumaux.add( cancion7 )

        albumes.add( album3 )
        albumes.add( album4 )
        albumes.add( album5 )

        artistas.add( autor1 )
        artistas.add( autor2 )
        artistas.add( autor3 )
        artistas.add( autor4 )

        songsVarious.add( cancion3 )
        songsVarious.add( cancion1 )
        songsVarious.add( cancion5 )
        songsVarious.add( cancion2 )
        songsVarious.add( cancion6 )

        albumList.add(album1)
        albumList.add(album2)
        albumList.add(album3)
        albumList.add(album4)
        albumList.add(album5)

        artistasSeguidos[autor1.username!!] = ArrayList()
        artistasSeguidos[autor1.username!!]!!.add(autor2)
        artistasSeguidos[autor1.username!!]!!.add(autor3)
        artistasSeguidos[autor1.username!!]!!.add(autor4)


        /************************************************************************************************************************/

        val list1 = ArrayList<Song>()
        list1.add(cancion1)
        list1.add(cancion2)

        val list2 = ArrayList<Song>()
        list2.add(cancion1)

        val playlist1 = Playlist(1, "dfsdfdsfd", autor1, "http://storage.googleapis.com/automotive-media/album_art_2.jpg", list1)
        val playlist2 = Playlist(2, "dfsdfdsfd", autor1, "http://storage.googleapis.com/automotive-media/album_art_2.jpg", list2)
        val playlist3 = Playlist(3, "Playlist User", autor1, "/resources/imgs/albumasap.jpeg", songList2)

        userList[autor1.username!!] = autor1
        userList[autor2.username!!] = autor2
        userList[autor3.username!!] = autor3

        songList[cancion1.id] = cancion1
        songList[cancion2.id] = cancion2

        playlistList[playlist1.id] = playlist1
        playlistList[playlist2.id] = playlist2
        playlistList[playlist3.id] = playlist3


        artistasSeguidos[autor3.username!!] = ArrayList()
        artistasSeguidos[autor3.username!!]!!.add(autor1)
        artistasSeguidos[autor3.username!!]!!.add(autor2)
        artistasSeguidos[autor3.username!!]!!.add(autor3)

        cancionesFavoritas[autor3.username!!] = ArrayList()
        cancionesFavoritas[autor3.username!!]!!.add(cancion1)
        cancionesFavoritas[autor3.username!!]!!.add(cancion2)


        playlistSeguidos[autor3.username!!] = ArrayList()
        playlistSeguidos[autor3.username!!]!!.add(playlist1)
        playlistSeguidos[autor3.username!!]!!.add(playlist2)

        recomendaciones[autor3.username!!] = ArrayList()
        recomendaciones[autor3.username!!]!!.add(playlist1)
        recomendaciones[autor3.username!!]!!.add(playlist2)
        recomendaciones[autor3.username!!]!!.add(autor2)
        recomendaciones[autor3.username!!]!!.add(autor1)
        recomendaciones[autor3.username!!]!!.add(cancion1)
        recomendaciones[autor3.username!!]!!.add(cancion2)

        trends.add(cancion1)
        trends.add(cancion2)
        generos.add(Pair("Rock", trends))

        generesList.add("Rock")
        generesList.add("Rap")
        generesList.add("Trap")



    }

}