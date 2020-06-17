// 例子
// 用户集合
const User = mongoose.model('User', new mongoose.Schema({
    name: { type: String }
}));
const Post = mongoose.model('Post', new mongoose.Schema({
    title: { type: Strin },
    author: { type: mongoose.Schema.Types.ObjectID, ref: 'User' }
}))