import { Fragment } from "react";
import Button from "../button/Button";

const Card = (props) => {
	const {
		logo,
		company,
		featured,
		old,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
		filter,
		setFilter,
		setEmpty,
	} = props;
	return (
		<article className="card">
			<div className="card__image">
				<img src={logo} />
			</div>
			<div className="card__container--description">
				<div className="card__container--title">
					<div className="card__title">
						<p className="title--business">{company}</p>
						<div>
							{old ? <span className="new">NEW!</span> : <Fragment></Fragment>}
							{featured ? (
								<span className="featured">FEATURED</span>
							) : (
								<Fragment></Fragment>
							)}
						</div>
					</div>
					<h1 className="title--job">{position}</h1>
					<div className="card__description">
						<p>{postedAt}</p>
						<p>·</p>
						<p>{contract}</p>
						<p>·</p>
						<p>{location}</p>
					</div>
				</div>

				<div className="container--tags">
					<Button setEmpty={setEmpty} filter={filter} setFilter={setFilter}>
						{role}
					</Button>
					<Button setEmpty={setEmpty} filter={filter} setFilter={setFilter}>
						{level}
					</Button>
					{languages.map((language) => {
						return (
							<Button
								setEmpty={setEmpty}
								filter={filter}
								setFilter={setFilter}
								key={language}
							>
								{language}
							</Button>
						);
					})}
					{tools.map((tool) => {
						return (
							<Button
								setEmpty={setEmpty}
								filter={filter}
								setFilter={setFilter}
								key={tool}
							>
								{tool}
							</Button>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default Card;
