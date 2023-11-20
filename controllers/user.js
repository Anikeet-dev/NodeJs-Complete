const User = require('../models/user');

exports.addUser = async (req, res, next) => {

    try {

        if(!req.body.contact){
            throw new Error('Phone Number is mandatory!')
        }
        const username = req.body.userName;
        const contact = req.body.contact;
        const email = req.body.emailId;

        const data = await User.create({ username: username, contact: contact, email: email });
        res.status(201).json({ newUserDetails: data });

    } catch(err) {
        res.status(500).json({
            error: err
        })
    }

}

exports.deleteUser = async(req, res, next) => {
    try{
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if(!user) {
            return res.status(404).json({error: 'User not found!'});
        }

        await user.destroy();
        res.status(200).json({message: 'User deleted successfully'});
    }
    catch(err){
        console.err('Error deleting user:', err);
        res.status(500).json({error: err});
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log('All Users:', users); 
        res.status(200).json({ allUsers: users });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({
            error: err
        });
    }
}