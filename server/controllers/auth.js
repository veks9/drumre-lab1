import User from '../models/user.js'

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user.password === req.body.password) {
            res.status(200).send(user);
        } else {
            res.status(401).send('Error: user not found!');
        }
    } catch (error) {
        console.log(error)
    }
}

export const register = async (req, res) => {
    try {
        const user = { 
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        }

        const existingUser = await User.findOne({ email: user.email });
        if(!existingUser) {
            await User.create(user, function(err) {
                if(err) {
                    console.log(err);
                    res.status(500).send();
                }
            });
    
            res.status(200).send(user);
        } else {
            res.status(400).send("User already exists!");
        }

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
        const existingUser = await User.findOne({ email: user.email });
        if(!existingUser) {
            await User.create(user, function(err) {
                if(err) {
                    console.log(err);
                    res.status(500).send();
                }
            });
        }
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}
