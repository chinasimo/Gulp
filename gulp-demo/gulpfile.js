const gulp = require('gulp');
// 使用gulp.task建立任务,('名字',毁掉函数)
gulp.task('first', () => {
    console.log('first time');
    gulp.src('./scr/css/base.css')
        .pipe(gulp.dest('dist.css'));
});

// htmlmin压缩
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});