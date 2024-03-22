import axios from "axios"
import toast from "react-hot-toast"

export const signUp = async (name, username, email, password, profileURL,bio) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/add`, {
            name, username, email, password, profileURL,bio
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const logIn = async (email,password)  => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`,{
            email,
            password
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const verifyUser = async () => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/verify`,{},{
            withCredentials:true
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const logOut = async () => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/logout`,{},{
            withCredentials : true
        })
        console.log(data)
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error("Something went wrong!")
    }
}

export const getUser = async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateBio = async (id,bio) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/update/${id}`,{
            bio
        },{
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

// For handling sign up with google
export const signupGoogle = async (name,email,profileURL) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/create/google`, {
            name, email, profileURL
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

// For handling login with google
export const googleLogin = async (email)  => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login/google`,{
            email
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}