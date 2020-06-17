const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground)', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log((err, '数据库连接失败')));

//1. 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
})

// 使用规则创建集合 isPublished: Boolean是否储存发布转肽
const Course = mongoose.model('Course', courseSchema)

//2. 创建文档  创建实例
const course = new Course({
    name: '自学',
    author: '豪哥',
    isPublished: true
})

course.save()
    // 2.1向集合中插入文档
Course.create({
    name: '自学',
    author: '豪哥',
    isPublished: true
}, (err, result) => {
    console.log(err);
    console.log(result);

})