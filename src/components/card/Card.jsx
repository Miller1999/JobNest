import { Fragment } from "react";

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
	} = props;
	return (
		<article className="card">
			<div className="card__image">
				<img src={logo} />
			</div>
			<div>
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
				<div className="container--tags">
					<button>{role}</button>
					<button>{level}</button>
					{languages.map((language) => {
						return <button key={language}>{language}</button>;
					})}
					{tools.map((tool) => {
						return <button key={tool}>{tool}</button>;
					})}
				</div>
			</div>
		</article>
	);
};

export default Card;
