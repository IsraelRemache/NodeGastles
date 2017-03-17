const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
	//wat willen we dat onze album bevat?
	// toevoegen of het required is of niet, en van welke type dus hier String
	titel: { type: String, required: true},
	artist: { type: String, required: true },
	imageUrl: { type: String }
});

//maak model en noem het Album en gebruik dat schema om met de applicatie te kunnen werken.
const AlbumModel = mongoose.model('Album', AlbumSchema);
module.exports = AlbumModel;
