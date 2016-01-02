# Gulp bundle for frontend in fullstudio.ru

## For development
### Install
#### Установка пакетов для разработки и быстрого старта в windows:
```
npm install browser-sync gulp gulp-sftp gulp-inject gulp-jade gulp-load-plugins gulp-newer gulp-plumber postcss gulp-postcss gulp-rename run-sequence gulp-sass gulp-stylus gulp-util autoprefixer require-dir gulp-webp async-each-series gulp-rimraf gulp-cached gulp-changed gulp-filter gulp-if gulp-jade-inheritance

bower install
```
npm install ```--force``` (переустановка всех пакетов для build ОБЯЗАТЕЛЬНО!!!)

#### Для других OS:
```
npm install --development установка для разработки пакетов
```

## For production (+concat, minify, etc)
npm install --production - установка gulp пакетов для build
```

### Start
gulp - старт проекта с default задачами
gulp --open - старт проекта с открытием localhost в браузере
gulp --live - старт проекта с livereload(автоматическое обновление при изменении файла)
gulp --prefix - старт проекта с автопрефиксом (gulp build - запускается с автопрефиксом)
gulp build - старт билдовой части
gulp danger

##Сборщик имеет следующую файловую структуру:

└── assets/                   	# Таски и хелперы для gulp
    └── app/            		# Папка с используемыми скриптами и стилями
    	├── _sticky-footer.styl # sticky-footer
    	├── _vars.styl 			# Глобальные переменные по цвету и разрешению экрана
    	├── app.styl 			# Глобальные стили
    	├── common.js 			# Инициализация скриптов
    	└── svg.js 				# Для подключения SVG
    ├── blocks/					# Папка с блоками страниц
    		└── header/
    			└── header.jade
    				header.styl
    ├── doc/         			# Документация которая запускается только в build
    ├── font/          	 		# Папка с шрифтами
    ├── img/					# Папка с картинками
    ├──_foot.jade 				# Шаблон футера (смотри функции препроцессора jade)
    ├──_heed.jade
    ├──i.jade 					# Список страниц
    └── index.jade
├── gulp/						# Таски и хелперы для gulp
		├── build/				# task build prodakchen
		├── dangar/				# task danger вспомогательные модули не участвующие в разработке
		├── default/			# task default основные модули учавствующие в разработке
		└── utils/				# папка с вспомогательными модулями
			├── config.js    	# Конфигурационный файл для подключение библиотек скриптов
			├── errorHendler.js # Обработчик ошибок
			└── sftp.js 		# Заливает сделаный проект на сервер
├── public      				# Папка в куда компилируются файлы и запускается server
├── .gitignore
├── .bowerrc
├── bower.json
├── gulpfile.js
├── package.json
└── readme.md/              	# Документация

```