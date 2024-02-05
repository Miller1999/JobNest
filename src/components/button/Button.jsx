const Button = ({ children, setFilter, filter, id, setEmpty }) => {
	function add(e) {
		e.preventDefault();
		if (!filter.find((tag) => e.target.textContent === tag)) {
			setFilter([...filter, e.target.textContent]);
			setEmpty(false);
		}
	}
	function cancel(text) {
		const newTags = [...filter];
		const tagIndex = newTags.findIndex((tag) => tag === text);
		newTags.splice(tagIndex, 1);
		setFilter(newTags);
		if (newTags.length === 0) {
			setEmpty(true);
		}
	}
	function clear() {
		setFilter([]);
		setEmpty(true);
	}
	if (id === "cancel") {
		return (
			<button
				onClick={(e) => {
					cancel(e.target.parentElement.id);
				}}
			>
				{children}
			</button>
		);
	}
	if (children === "clear") {
		return (
			<button
				onClick={() => {
					clear();
				}}
			>
				{children}
			</button>
		);
	}
	return (
		<button
			onClick={(e) => {
				add(e);
			}}
		>
			{children}
		</button>
	);
};

export default Button;
