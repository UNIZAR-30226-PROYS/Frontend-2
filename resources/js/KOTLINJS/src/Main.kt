import kotlin.browser.*
import apis.*
import models.User
import kotlin.js.Json
data class Data2(val A: String)
data class Data(val a: Data2, val b: Int)


fun test_signup() {
var user = User("test1", "1234567")
    user.name= "Test1"
    user.email = "test@test.com"
    var result = doSignUpServer(user)
    println(result)

}

fun test_login(){
    var result = doLoginServer("test1","1234567")
    println(result)
}

fun test_detelete(){
    var result = doDeleteAccountServer("test1", "w2cigv17h2q6w6ly")
    println(result)
}
fun main(args: Array<String>) {
    /*
    var mapa = hashMapOf<String, Int?>("a" to 1, "b" to 2, "c" to 3)
    mapa.put("d", null)
    for (i in mapa){
        println(i.value)
    }
    */
    //test_signup()
    //test_login()
    test_detelete()

    /*
    if(isServerOnline()){
        println("server online")
        var result = doLoginServer("lAngelP","123456")
        println(result)
        obtainUserDataServer("lAngelP","0svskl6burhffiai")
    }else{
        println("server offline")
    }
    */
}