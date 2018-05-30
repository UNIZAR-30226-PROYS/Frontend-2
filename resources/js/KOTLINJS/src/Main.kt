import apis.*
import models.User

fun test_user(): Boolean{
    try {
        var user = User("testJS", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token = doSignUpServer(user)
        var token2 = doLoginServer("testJS", "1234567")
        println("Check if equals " + (token == token2).toString())
        println("Check if deleted " + doDeleteAccountServer("testJS", token))
        return true
    } catch (e: Exception) {
        println(e)
        return false
    }

}

fun test_logout(): Boolean{
    try {
        var user = User("testJS", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token = doSignUpServer(user)
        doLogoutServer("testJS", token)
        try {
            if (doDeleteAccountServer("testJS", token)) {
                println("Test Error")
            }

        } catch (e: Exception) {
            println(e)
            println("Test "+(e.message =="invalidToken").toString())
        }
        var token2 = doLoginServer("testJS", "1234567")
        if (doDeleteAccountServer("testJS", token2)){
            println("PASSED")
            return true
        }else{
            return false
        }
    } catch (e: Exception) {
        var token = doLoginServer("testJS","1234567")
        doDeleteAccountServer("testJS", token)
        return false
    }
}

fun test_following():Boolean {
    try {
        var user = User("testJS", "1234567")
        user.name = "Test1"
        user.email = "test@test.com"
        var token1 = doSignUpServer(user)
        var following = getFollowedUsersServer("testJS")
        if (following.isNotEmpty()) {
            return false
        }
        var user2 = User("testJS2", "1234567")
        user2.name = "Test2"
        user2.email = "test2@test.com"
        var token = doSignUpServer(user2)
        if (!addFollowerToUserServer("testJS", "", "testJS2")) {
            return false
        }
        following = getFollowedUsersServer("testJS")
        var number : Long = getNumberOfFollowersOfUserServer("testJS")
        if (number.toInt() != 1) {
            return false
        }
        if (following.size != 1 || following[0].username != "testJS2") {
            return false
        }
        following = getFollowersOfUserServer("testJS2")
        if (following.size != 1 || following[0].username != "testJS") {
            return false
        }
        if (!deleteFollowerToUserServer("testJS", "", "testJS2")) {
            return false
        }
        following = getFollowedUsersServer("testJS")
        if (following.isNotEmpty()) {
            return false
        }
        token = doLoginServer("testJS", "1234567")
        doDeleteAccountServer("testJS", token)
        token = doLoginServer("testJS2", "1234567")
        doDeleteAccountServer("testJS2", token)
        return true

    } catch (e: Exception) {
        println(e)
        var token = doLoginServer("testJS", "1234567")
        doDeleteAccountServer("testJS", token)
        token = doLoginServer("testJS2", "1234567")
        doDeleteAccountServer("testJS2", token)
        return false
    }
}


fun main(args: Array<String>) {

    try{
        //test_user()
        //test_logout()
        test_following()
    }catch (e: Exception){
        print(e)
    }

}