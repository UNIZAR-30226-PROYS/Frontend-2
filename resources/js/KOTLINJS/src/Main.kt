import kotlin.browser.*
import apis.*
import kotlin.js.Json
data class Data2(val A: String)
data class Data(val a: Data2, val b: Int)

fun main(args: Array<String>) {
    obtainUserDataServer("lAngelP","0svskl6burhffiai")
}