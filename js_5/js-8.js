function eightTask() {
	let day = `Понедельник`;
	for (let i = 0; i < Infinity; i++) {
		let act = confirm(`Следующий день?`);

		if (act === true) {
			alert(day);
			switch (day) {
				case `Понедельник`:
					day = `Вторник`;
					continue;
				case `Вторник`:
					day = `Среда`;
					continue;
				case `Среда`:
					day = `Четверг`;
					continue;
				case `Четверг`:
					day = `Пятница`;
					continue;
				case `Пятница`:
					day = `Суббота`;
					continue;
				case `Суббота`:
					day = `Воскресенье`;
					continue;
				case `Воскресенье`:
					day = `Понедельник`;
					continue;
			}
		} else {
			break;
		}
	}
}