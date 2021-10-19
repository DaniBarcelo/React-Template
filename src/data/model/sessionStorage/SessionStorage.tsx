import { User } from "../User";


export default class SessionStorage{
    static getToken() {
        const token = localStorage.getItem('token')
        return token || ""
    }

    static setToken(token: string) {
        localStorage.setItem("token", token);
    }

    static getRole() {
        const role = localStorage.getItem('role')
        return role || ""
    }

    static setRole(role: string) {
        localStorage.setItem("role", role);
    }

    static setLocalStorageUser(user: User | null) {
        if (user!=null && user!==undefined) {
            //localStorage.setItem("userId", user!.userId!.toString());
            //localStorage.setItem("name", user!.name!);
        } else {
            localStorage.setItem("userId", "");
            localStorage.setItem("name", "");
        }
    }
    
    static getLocalStorageUser() {
        return [localStorage.getItem("userId"), SessionStorage.getToken()];
    }
    
    static isLoggedIn(){
        const token = localStorage.getItem('token')
        return (token && token.length > 0) ? true : false
    }

    static getCurrentPath(){
        if (!localStorage.getItem('currentPath'))
            localStorage.setItem('currentPath', "/")
        console.log("getCurrentPath",localStorage.getItem('currentPath'))
        return localStorage.getItem('currentPath')!!
    }
    
    static setCurrentPath(path: string) {
        localStorage.setItem('currentPath', path)
    }
 
}