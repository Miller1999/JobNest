import Header from "./components/header/Header";
import { Fragment } from "react";
import "./style.scss";
import Card from "./components/card/Card";
import Data from "./data.json";
function App() {
	console.log(Data[0].company);
	return (
		<Fragment>
			<Header />
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
						/>
					);
				})}
			</main>
		</Fragment>
	);
}

export default App;
