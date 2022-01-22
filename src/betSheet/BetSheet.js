import { useState } from 'react';
import BetData from './BetData';
import NewBet from './NewBet';

function BetSheet() {
	const [betData, setBetData] = useState(BetData);
	return (
		<>
			<div className='bet-table'>
				<h1>Burrito Bets</h1>
				<table className='table-auto border-collapse border border-slate-400'>
					<thead>
						<tr>
							<th className='border border-slate-300'>Bet</th>
							<th className='border border-slate-300'>Bettor 1</th>
							<th className='border border-slate-300'>Bettor 2</th>
							<th className='border border-slate-300'>Winner</th>
						</tr>
					</thead>
					<tbody>
						{betData.map((bet) => (
							<tr key={bet.id}>
								<td className='border border-slate-300'>{bet.betDescription}</td>
								<td className='border border-slate-300'>{bet.bettor1}</td>
								<td className='border border-slate-300'>{bet.bettor2}</td>
								<td className='border border-slate-300'>{bet.winner}</td>
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
