import User from '../models/UserModel.js';
import { errorList, validateName, validateLastname, validateEmail, validatePassword } from '../validators/userValidator.js';


const index = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        return res.json(users);
    } catch {
        return res.json([]);
    }
}

const store = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        validateName(name);
        validateLastname(lastname);
        validateEmail(email);
        validatePassword(password);

        if (errorList.length > 0){
            res.status(400).json(errorList);
            errorList.splice(0,errorList.length);
        }

        await User.create(req.body);
        return res.json({ 'Success': 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ errors: error.errors });
    }
}

export default { index, store };