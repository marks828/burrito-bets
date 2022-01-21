import { useState } from 'react';
import { nanoid } from 'nanoid';

function NewBet(props) {
	const bettors = ['mark', 'nick', 'mike', 'geo', 'david'];
	const [betDescrtiptionInput, setBetDescrtiptionInput] = useState('');
	const [bettorOne, setBettorOne] = useState('');
	const [bettorTwo, setBettorTwo] = useState('');

	

	function checkState(e){
		e.preventDefault();
		console.log(betDescrtiptionInput, bettorOne, bettorTwo);
	}
	

	return (
		<>
			<div className='newBet'>
				<h1>New Bet</h1>
				<form>
					<label htmlFor=''>
						<input
							type='text'
							placeholder='Bet Description'
							value={betDescrtiptionInput}
							onChange={(e) => setBetDescrtiptionInput(e.target.value)}
						/>
					</label>
					{/* bettor 1 */}
					<label htmlFor=''>
						<select
							onChange={(e) => setBettorOne(e.target.value)}
						>
							{bettors.map((bettor) => (
								<option
									key={nanoid()}
									value={bettor}
								>
									{bettor}
								</option>
							))}
						</select>
					</label>
					{/* bettor 2 */}
					<label htmlFor=''>
						<select
							onChange={(e) => setBettorTwo(e.target.value)}
						>
							{bettors.map((bettor) => (
								<option
								key={nanoid()}
								value={bettor}
								>
									{bettor}
								</option>
							))}
						</select>
					</label>
				</form>
			</div>
			<button
				className='
                text-slate-900
                bg-blue-300
                shadow-xl
                hover:bg-blue-500
                '
				onClick={() => props.setBetData([...props.betData, { 
					id: nanoid(), 
					betDescription: betDescrtiptionInput,
					bettor1: bettorOne,
					bettor2: bettorTwo
				}])}
				>
				Add Bet
			</button>
			{betDescrtiptionInput}
			<button
			onClick={checkState}
			>Check Bettor</button>
		</>
	);
}

export default NewBet;
