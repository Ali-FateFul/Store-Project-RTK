import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Icons
//Style
import styles from "./ProductsPage.module.css";
//Components
import Card from "../components/Card";
import Loader from "../components/Loader";
import { fetchProducs } from "../features/product/productslice";
import {
	filterProducts,
	getInitialQuery,
	searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
	const dispatch = useDispatch();
	const { products  , loading} = useSelector((store) => store.product);
	const store = useSelector((store) => store.product);
	console.log(store);


	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState({});

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(fetchProducs());
	}, []);

	useEffect(() => {
		setDisplayed(products);
		setQuery(getInitialQuery(searchParams));
	}, [products]);

	useEffect(() => {
		setSearchParams(query);
		setSearch(query.search || "");
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query]);

	return (
		<>
			<SearchBox
				search={search}
				setSearch={setSearch}
				setQuery={setQuery}
			/>
			<div className={styles.container}>
				<div className={styles.products}>
					{loading && <Loader />}
					{displayed.map((p) => (
						<Card
							key={p.id}
							data={p}
						/>
					))}
				</div>
				<SideBar
					query={query}
					setQuery={setQuery}
				/>
			</div>
		</>
	);
}

export default ProductsPage;
