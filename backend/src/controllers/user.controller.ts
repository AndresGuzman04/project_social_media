import {RequestHandler} from 'express';
import User from '../models/user.models';

export const createUser: RequestHandler = async (req, res) => {
    const user = new User(req.body)
    const savedUser = await user.save()
    res.status(201).json(savedUser) 
}

export const getUsers: RequestHandler = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (error) {
        res.json(error)
    }
}

export const getUser: RequestHandler = async (req, res) => {
    try {
        const userFound = await User.findById(req.params.id)
        res.json(userFound);
    } catch (error) {
        res.json(error)
    }
}

export const deleteUser: RequestHandler = async (req, res) => {
    try {
        const userFound = await User.findByIdAndDelete(req.params.id)
        res.json(userFound);
    } catch (error) {
        res.status(204).json();
    }
}

export const updateUser: RequestHandler = async (req, res) => {
    try {
        const userUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(userUpdate);
    } catch (error) {
        res.status(204).json();
    }
}