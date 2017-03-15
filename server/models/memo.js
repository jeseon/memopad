import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Memo = new Schema({
    writer: String,
    contents: String,
    starred: [String],
    is_updated: { type: Boolean, default: false },
    date: {
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    }
});

export default mongoose.model('memo', Memo);