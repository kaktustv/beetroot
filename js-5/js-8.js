function eightTask() {
  let day = `Понедельник`;
	for (let i = 1; i > 0; i++){
		let act = confirm(`Следующий день?`);

		if (act === true) {
			alert(day);
			for (let i = 1; i > 0; i++) {
				switch (day) {
					case `Понедельник`:
						day = `Вторник`;
						break;
					case `Вторник`:
						day = `Среда`;
						break;
					case `Среда`:
						day = `Четверг`;
						break;
					case `Четверг`:
						day = `Пятница`;
						break;
					case `Пятница`:
						day = `Суббота`;
						break;
					case `Суббота`:
						day = `Воскресенье`;
						break;
					case `Воскресенье`:
						day = `Понедельник`;
						break;
				}
				continue;
			}
		} else {
			break;
		}
	}
}
