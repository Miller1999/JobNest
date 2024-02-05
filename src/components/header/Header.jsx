import Button from "../button/Button";
import Tag from "../tag/Tag";

const Header = ({ filter, setFilter, isEmpty, setEmpty }) => {
	if (isEmpty) {
		return <header></header>;
	}
	return (
		<header>
			<nav>
				<div className="tags">
					{filter.map((tag) => {
						return (
							<Tag
								setEmpty={setEmpty}
								title={tag}
								setFilter={setFilter}
								filter={filter}
								key={tag}
							/>
						);
					})}
				</div>
				<Button setFilter={setFilter} setEmpty={setEmpty}>
					clear
				</Button>
			</nav>
		</header>
	);
};

export default Header;
