const notesModel = require('../models/notes');

const create = async(req, res) => {
    try {
        const newNote = await notesModel.create(req.body);
        res.status(201).json({ new_note: newNote });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}
const update = async(req, res) => {
    try {
        const newNote = await notesModel.findByPk(req.params.id);
        await newNote.update(req.body);
        res.status(200).json({ msg: "note updated" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}
const getAll = async(req, res) => {
    try {
        const allNotes = await notesModel.findAll();
        res.status(200).json({ data: allNotes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}

const remove = async(req, res) => {
    try {
        const newNote = await notesModel.findByPk(req.params.id);
        await newNote.destroy();
        res.status(200).json({ msg: "note deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong!' });
    }
}
module.exports = {
    create,
    getAll,
    update,
    remove
}