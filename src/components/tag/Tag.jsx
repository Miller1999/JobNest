import Button from "../button/Button";

const Tag = ({ title, filter, setFilter, setEmpty }) => {
	return (
		<div className="tag" id={title}>
			<div className="tag__title">
				<p>{title}</p>
			</div>
			<Button
				setEmpty={setEmpty}
				setFilter={setFilter}
				filter={filter}
				id="cancel"
				className="tag__cancel"
			></Button>
		</div>
	);
};

export default Tag;
