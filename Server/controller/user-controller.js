import User from "../model/user-schema.js";

export const usersSignup = async (request, response) => {
    try {

        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return response.status(401).json({ message: 'Username already exists' })
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: user })
        // console.log(request.body);
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }

}

export const userLogin = async (request, response) => {
    try {
        const LoginUsername = request.body.LoginUsername;
        const LoginPassword = request.body.LoginPassword;

        let user = await User.findOne({ username: LoginUsername, password: LoginPassword });
        if (user) {
            return response.status(200).json({ data: user });
        } else {
            return response.status(401).json("Invalid Login")
        }

    }
    catch (error) {
        response.status(500).json("Error", error.message)
    }
}