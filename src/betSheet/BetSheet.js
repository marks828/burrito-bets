import { useState } from 'react';
import BetData from './BetData';
import NewBet from './NewBet';

function BetSheet() {
	const [betData, setBetData] = useState(BetData);
	return (
		<>
			<div className='bet-table'>
				<h1>Burrito Bets</h1>
				<table>
					<thead>
						<tr>
							<th>Bet</th>
							<th>Bettor 1</th>
							<th>Bettor 2</th>
							<th>Winner</th>
						</tr>
					</thead>
					<tbody>
						{betData.map((bet) => (
							<tr key={bet.id}>
								<td>{bet.betDescription}</td>
								<td>{bet.bettor1}</td>
								<td>{bet.bettor2}</td>
								<td>{bet.winner}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='new-bet'>
				<h1>New Bet</h1>
				<button>Add New Bet</button>
				<NewBet 
					betData={betData} 
					setBetData={setBetData}
				/>
			</div>
		</>
	);
}

export default BetSheet;
