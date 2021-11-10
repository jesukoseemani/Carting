import { useState } from 'react';
import styled from 'styled-components';
import Items from './Items';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import GlobalStyles from './GlobalState';
import type { RootState } from './redux/store';

const data = [
	{
		id: 1,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 2,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 3,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 4,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 5,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 6,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 7,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 8,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 9,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
	{
		id: 10,
		image: 'https://picsum.photos/200/',
		title: 'cart',
		amount: '100',
	},
];
function App() {
	const { quantity } = useSelector((state: RootState) => state.products);

	const [product, setProduct] = useState(data);

	return (
		<Wrap>
			<GlobalStyles />

			<MenuItem>
				<Badge badgeContent={quantity} color='primary'>
					<ShoppingCartOutlined style={{ fontSize: 40 }} />
				</Badge>
			</MenuItem>

			<Grid container>
				{product.map((data) => (
					<Grid item xs={12} sm={6} md={4} key={data.id}>
						<Items
							id={data.id}
							title={data.title}
							amount={data.amount}
							image={data.image}
							items={data}
						/>
					</Grid>
				))}
			</Grid>
		</Wrap>
	);
}

const Wrap = styled.div`
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

// const Wrapper = styled.div`
// 	display: grid;
// 	width: 100%;
// 	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
// 	grid-gap: 2rem;
// `;

const MenuItem = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin: 3rem 6rem 3rem 0rem;
`;
export default App;
