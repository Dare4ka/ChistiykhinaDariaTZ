var gulp         = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	jade         = require('gulp-jade'),
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('jade', function(){
  gulp.src('DeltaPlan/jade/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('DeltaPlan/'))
});

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('DeltaPlan/sass/**/*.scss') // Берем источник
		.pipe(sass({outputStyle: 'expanded'})) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('DeltaPlan/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'DeltaPlan/libs/jquery-3.3.1.min.js'
		])
		.pipe(gulp.dest('DeltaPlan/js')); // Выгружаем в папку app/js
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'DeltaPlan' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('watch', ['browser-sync', 'scripts'], function() {
	gulp.watch('DeltaPlan/jade/*.jade',['jade']);
	gulp.watch('DeltaPlan/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
	gulp.watch('DeltaPlan/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('DeltaPlan/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});


gulp.task('default', ['watch']);
