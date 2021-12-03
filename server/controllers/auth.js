import User from '../models/user.js'

export const login = async (req, res) => {
    try {
        console.log(req.body.email)
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
    } catch (error) {
        console.log(error)
    }
}

export const register = async (req, res) => {
    try {
        console.log(req.body)

        const user = { 
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        }

        await User.create(user, function(err) {
            if(err) {
                console.log(err);
                res.status(500).send();
            }
        });

        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}

export const fbLogin = async (req, res) => {
    try {
        var fullNameSplitted = req.body.name.split(' ');
        const name = fullNameSplitted[0];
        const surname = fullNameSplitted[1];

        const user = { 
            name: name,
            surname: surname,
            email: req.body.email,
            picture: req.body.picture,
            userId: req.body.userID
        }

        await User.create(user, function(err) {
            if(err) {
                console.log(err);
                res.status(500).send();
            }
        });

        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}
