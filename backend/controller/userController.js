const { user } = require("../model/userSchema");

const userSignUp= async(req,res) =>{
 try{
    const User=req.body;
    const exist = await user.findOne({ username: req.body.username });
    if(exist) {
        return res.status(401).json({ message: 'User already exist'});
    }
    const newUser= new user(User) ;
    await newUser.save();
    res.status(200).json({ mesage: user });
 }catch(err){
    res.status(500).json({ message: err.message });
 }
}

const userLogIn = async (request, response) => {
    try {
        let User = await user.findOne({ username: request.body.username, password: request.body.password });
        if(User) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.status('Error: ', error.message);        
    }
}


module.exports= {
    userSignUp ,userLogIn
}