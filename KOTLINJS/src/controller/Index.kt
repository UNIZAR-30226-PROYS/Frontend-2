package com.spreadyourmusic.spreadyourmusic.controller

import com.spreadyourmusic.spreadyourmusic.apis.obtainUserDataServer
import kotlin.browser.document

fun main(args :Array<String>){
    val user = obtainUserDataServer("abelcht","fdf")
    document.getElementById("prueba")!!.innerHTML = "pru"// user!!.username!!
}