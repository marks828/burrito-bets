import { useState } from 'react';
import BetData from './BetData';
import NewBet from './NewBet';

function BetSheet() {
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
						<tr>
							<td>
								{BetData.map((bet) => (
									<p>{bet.betDescription}</p>
								))}
							</td>
							<td>
								{BetData.map((bet) => (
									<p>{bet.bettor1}</p>
								))}
							</td>
							<td>
								{BetData.map((bet) => (
									<p>{bet.bettor2}</p>
								))}
							</td>
							<td>
								{BetData.map((bet) => (
									<p>{bet.winner}</p>
								))}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='new-bet'>
				<h1>New Bet</h1>
				<button>Add New Bet</button>
				<NewBet />
			</div>
		</>
	);
}

export default BetSheet;
