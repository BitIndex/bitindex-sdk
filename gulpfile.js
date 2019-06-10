var gulp = require("gulp");
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
let uglify = require('gulp-uglify-es').default;
// var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var paths = {
    pages: ['lib/examples/*.html']
};
var header = require('gulp-header');
// using data from package.json
var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' *',
  ' * Copyright (c) 2019 MatterCloud (Matter Web Services Inc.)',
  ' *',
  ' * Open BSV License',
  ' * Permission is hereby granted, free of charge, to any person obtaining a copy',
  ' * of this software and associated documentation files (the "Software"), to deal',
  ' * in the Software without restriction, including without limitation the rights',
  ' * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell',
  ' * copies of the Software, and to permit persons to whom the Software is',
  ' * furnished to do so, subject to the following conditions:',
  ' *',
  ' * 1 - The above copyright notice and this permission notice shall be included in',
  ' * all copies or substantial portions of the Software.',
  ' * 2 - The Software, and any software that is derived from the Software or parts thereof,',
  ' * can only be used on the Bitcoin SV blockchains. The Bitcoin SV blockchains are defined,',
  ' * for purposes of this license, as the Bitcoin blockchain containing block height #556767',
  ' * with the hash "000000000000000001d956714215d96ffc00e0afda4cd0a96c96f8d802b1662b" and',
  ' * the test blockchains that are supported by the un-modified Software.',
  ' *',
  ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',
  ' * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,',
  ' * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE',
  ' * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER',
  ' * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,',
  ' * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN',
  ' * THE SOFTWARE.',
  ' */',
  ''].join('\n');

gulp.task("copy-html", function () {
  return gulp.src(paths.pages)
      .pipe(gulp.dest("dist"));
});

gulp.task("build", ['copy-html'], function () {
  return browserify({
      basedir: '.',
      debug: true,
      entries: ['lib/index.ts'],
      cache: {},
      packageCache: {}
  })
  .plugin(tsify)
  .bundle()
  .pipe(source('bundle.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest("dist"));
});
