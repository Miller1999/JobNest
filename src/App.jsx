import Header from "./components/header/Header";
import { Fragment, useState } from "react";
import "./style.scss";
import Card from "./components/card/Card";
import Data from "./data.json";
function App() {
	const [filter, setFilter] = useState([]);
	const [isEmpty, setEmpty] = useState(true);

	const dataFiltered = Data.filter(
		(item) =>
			filter.includes(item.level) ||
			filter.includes(item.role) ||
			filter.includes(item.languages[0]) ||
			filter.includes(item.languages[1]) ||
			filter.includes(item.languages[2]) ||
			filter.includes(item.tools[0]) ||
			filter.includes(item.tools[1])
	);
	if (!isEmpty) {
		return (
			<Fragment>
				<Header
					setFilter={setFilter}
					filter={filter}
					isEmpty={isEmpty}
					setEmpty={setEmpty}
				/>
				<main>
					{dataFiltered.map((item) => {
						return (
							<Card
								key={item.id}
								logo={item.logo}
								company={item.company}
								featured={item.featured}
								old={item.new}
								position={item.position}
								postedAt={item.postedAt}
								contract={item.contract}
								location={item.location}
								role={item.role}
								level={item.level}
								languages={item.languages}
								tools={item.tools}
								filter={filter}
								setFilter={setFilter}
								setEmpty={setEmpty}
							/>
						);
					})}
				</main>
			</Fragment>
		);
	}
	return (
		<Fragment>
			<Header
				setFilter={setFilter}
				filter={filter}
				isEmpty={isEmpty}
				setEmpty={setEmpty}
			/>
			<main>
				{Data.map((item) => {
					return (
						<Card
							key={item.id}
							logo={item.logo}
							company={item.company}
							featured={item.featured}
							old={item.new}
							position={item.position}
							postedAt={item.postedAt}
							contract={item.contract}
							location={item.location}
							role={item.role}
							level={item.level}
							languages={item.languages}
							tools={item.tools}
							filter={filter}
							setFilter={setFilter}
							setEmpty={setEmpty}
						/>
					);
				})}
			</main>
		</Fragment>
	);
}

export default App;
