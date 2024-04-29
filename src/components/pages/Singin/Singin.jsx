import { useEffect, useState } from "react";
import style from "./singin.module.scss";
import { Link } from "react-router-dom";

export default function Singin() {
	const [mail, setMail] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [fullDataFilled, SetFullDataFilled] = useState(false);
	useEffect(() => {
		return () => {
			if (
				mail !== "" &&
				name !== "" &&
				surname !== "" &&
				password !== "" &&
				passwordConfirmation !== ""
			) {
				if (password === passwordConfirmation) {
					SetFullDataFilled(true);
				}
			}
		};
	}, [mail, name, surname, password, passwordConfirmation]);

	return (
		<div className={style.singin}>
			<div className={style.title}>РЕГИСТРАЦИЯ</div>
			<div className={style.form}>
				<div className={style.group}>
					<input required={true} type="text" className={style.input} />
					<span className={style.highlight}></span>

					<label>имя</label>
				</div>
				<div className={style.group}>
					<input required={true} type="text" className={style.input} />
					<span className={style.highlight}></span>

					<label>фамилия</label>
				</div>
				<div className={style.group}>
					<input required={true} type="text" className={style.input} />
					<span className={style.highlight}></span>

					<label>email</label>
				</div>
				<div className={style.group}>
					<input required={true} type="text" className={style.input} />
					<span className={style.highlight}></span>

					<label>пароль</label>
				</div>
				<div className={style.group}>
					<input required={true} type="text" className={style.input} />
					<span className={style.highlight}></span>

					<label>подтвердите пароль</label>
				</div>

				<div className={style['confirm-radio']}>
				<input type="checkbox" className={style['custom-checkbox']} />
	<div className={style.text}>Я согласен с условиями и политикой конфеденциальности</div>
				</div>

				<button>Создать</button>
			</div>
		</div>
	);
}
