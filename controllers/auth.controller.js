const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const User = require('../models/user.model');

const generateTokens = user => {
    const accessToken = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN });
    const refreshToken = uuid();
    return { accessToken, refreshToken };
};

const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({ status: 'InvalidData' });
        }

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ status: 'InvalidData', error: 'User not found' });
        }
        if (!await user.isPasswordCorrect(req.body.password)) {
            return res.status(400).json({ status: 'InvalidData', error: 'Password not correct' });
        }

        const { accessToken, refreshToken } = generateTokens(user);
        user.refreshToken = refreshToken;
        await user.save();
        res.json({ user, accessToken: 'Bearer ' + accessToken, refreshToken: 'Bearer ' + refreshToken });
    } catch (e) {
        res.status(400).json({ status: 'Unknown error', error: e })
    }
};

const signup = async (req, res) => {
    if (!req.body.email || !req.body.password || !req.body.passwordConfirm) {
        return res.status(400).json({ status: 'InvalidData' });
    }

    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ status: 'InvalidData', error: error.message })
    }
};

const authenticate = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ status: 'Unauthorized', error: 'TokenNotFound' });
    }

    const payload = jwt.decode(token, process.env.JWT_SECRET);
    if (!payload) {
        return res.status(401).json({ status: 'Unauthorized', error: 'TokenInvalid' });
    }

    const userId = req.params.userId || req.body.userId;
    if (userId && userId !== payload.userId) {
        return res.status(401).json({ status: 'Unauthorized', error: 'UserIdDoesNotMatch' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (e) {
        if (e.message === 'jwt expired') {
            return res.status(401).json({ status: 'Unauthorized', error: 'TokenExpired' });
        }
        else {
            res.status(401).json({ status: 'Unauthorized', error: 'TokenInvalid' });
        }
    }

};

const refresh = async (req, res) => {
    try {
        const refreshToken = req.headers.refresh && req.headers.refresh.split(' ')[1];
        if (!refreshToken) {
            return res.status(401).json({ status: 'Unauthorized', error: 'RefreshTokenNotFound' });
        }
        if (!req.params.userId) {
            return res.status(400).json({ status: 'Unauthorized', error: 'UserIdNotFound' })
        }
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ status: 'Unauthorized', error: 'UserNotFound' });
        }
        if (user.refreshToken !== refreshToken) {
            return res.status(401).json({ status: 'Unauthorized', error: 'RefreshTokenInvalid' });
        }

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = generateTokens(user);
        user.refreshToken = newRefreshToken;
        await user.save();
        res.json({ user, newAccessToken, newRefreshToken });
    } catch (e) {
        res.status(400).json({ status: 'Unknown error', error: e });
    }
};

const pass = (req, res) => res.json({ status: 'Success' });

module.exports = {
    login,
    signup,
    authenticate,
    refresh,
    pass
};
