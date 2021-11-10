import { useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { addProduct } from './redux/productSlice';
import { useDispatch } from 'react-redux';

type productData = {
	id: number;
	image: string;
	amount: string;
	title: string;
	items: {
		id: number;
		image: string;
		amount: string;
		title: string;
	};
};

function Items(props: productData) {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();

	const handleQuantity = (type: string) => {
		if (type === 'dec') {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleClick = (e: any) => {
		e.preventDefault();
		dispatch(addProduct({ ...props.items, quantity }));
	};

	return (
		<StyledItems>
			<div className='items_image'>
				<img src={props.image} alt='bri' />
			</div>

			<div className='items_content'>
				<div className='items_content_title'>
					<p>{props.title}</p>
				</div>

				<div className='items_content_cover'>
					<div className='items_content_cover_left'>
						<h4>${props.amount}</h4>
					</div>

					<div className='items_content_cover_right'>
						<div className='adede'>
							<div
								style={{ pointerEvents: quantity === 1 ? 'none' : 'auto' }}
								className='removeicon'
								onClick={() => handleQuantity('dec')}>
								<RemoveIcon />
							</div>

							<div className='quantitynum'>{quantity}</div>

							<div className='addicon' onClick={() => handleQuantity('inc')}>
								<AddIcon />
							</div>
						</div>

						<div className='adede-botton'>
							<button onClick={handleClick}>ADD TO CART</button>
						</div>
					</div>
				</div>
			</div>
		</StyledItems>
	);
}
const StyledItems = styled.div`
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	background-color: white;
	outline: none;
	border: none;
	border-radius: 0.8rem;
	padding: 1rem;
	margin-bottom: 1rem;
	margin-right: 1rem;
	margin-left: 1rem;

	.items_image {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.items_content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		height: 23rem;
		padding-left: 1rem;
		.items_content_title {
			font-size: 2.5rem;
			font-family: 'Inconsolata', monospace;
			font-weight: bold;
			p {
				margin-bottom: 1rem;
			}
			.truncate {
				font-style: italic;
			}
		}

		.items_content_cover {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			.items_content_cover_left {
				h4 {
					font-size: 2rem;
					font-weight: bold;
					color: #000;
				}
			}
			.items_content_cover_right {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				align-items: flex-start;
				width: 100%;

				.adede {
					display: flex;
					/* justify-content: space-between; */
					margin: 1rem 0rem;
				}

				.adede-botton {
					button {
						padding: 1rem;
						cursor: pointer;
					}
				}

				.removeicon {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.5rem;
					padding: 0.5rem;
					background-color: #d3d8da;
					cursor: pointer;
					color: white;
					background-color: red;
				}

				.addicon {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 0.5rem;
					padding: 0.5rem;
					background-color: #d3d8da;
					cursor: pointer;
					color: white;
					background-color: green;
				}
				.quantitynum {
					margin: 1rem;
					font-size: 1.3rem;
					font-weight: bold;
				}
			}
		}
	}
`;

export default Items;
