import React from 'react'
import style from './footer.module.scss'

export default function Footer() {
	return (
		<footer>
			<div className={style.links}>
				<a href="YOUTUBE">YOUTUBE</a>
				<a href="TELEGRAM">TELEGRAM</a>
				<a href="VK">VK</a>
			</div>
			<div className={style.description}>
			ArtPlace Blog © 2024<br/>
			Политика конфеденциальности
			</div>
		</footer>
	)
}
