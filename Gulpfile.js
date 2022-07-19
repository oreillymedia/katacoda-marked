const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const preserveFirstComment = () => {
  let set = false;

  return () => {
    if (set) {
      return false;
    }
    set = true;
    return true;
  };
};

exports.default = () => {
  return src('lib/marked.js')
    .pipe(uglify({
      output: {
        comments: preserveFirstComment(),
      },
    }))
    .pipe(concat('marked.min.js'))
    .pipe(dest('.'))
};

