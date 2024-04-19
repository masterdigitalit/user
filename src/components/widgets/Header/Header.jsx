import React from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<header>
			<div className={style.container}>
				<div className={style.title}>Блог про творчество и не только.</div>
				<div className={style.logo}>
					<img
						src={require("../../../icons/logo.svg").default}
						alt=""
						srcset=""
					/>
				</div>
				<nav>
					<Link>
						<img
							src={require("../../../icons/three-points.svg").default}
							alt=""
							srcset=""
						/>
					</Link>
					<Link>
						<img
							src={require("../../../icons/question.svg").default}
							alt=""
							srcset=""
						/>
					</Link>
					<Link>
						<img
							src={require("../../../icons/user.svg").default}
							alt=""
							srcset=""
						/>
					</Link>
				</nav>
			</div>
			<hr/>
			<div className={style["mini-header"]}>
				<nav>
					<Link><div className={style.title}>МОДА</div></Link>
					<Link><div className={style.title}>ИСТОРИИ</div></Link>
					<Link><div className={style.title}>ИДЕИ</div></Link>
					<Link><div className={style.title}>СОВЕТЫ</div></Link>
					<Link><div className={style.title}>ДРУГОЕ</div></Link>
				</nav>
			</div>
			<hr/>
		</header>
	);
}
