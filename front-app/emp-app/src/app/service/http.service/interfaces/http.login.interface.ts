export interface HttpLoginInterface<User> {
    login(loginOnj: User) 
    logout()
    signUp(formData: User)


}