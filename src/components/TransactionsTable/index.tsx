import { useEffect } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

export function TransactionsTable() {
	useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de web site</td>
						<td className='deposit'>R$12.000</td>
						<td>Desenvolvimento</td>
						<td>12/05/2022</td>
					</tr>
					<tr>
						<td>Mercado</td>
						<td className='withdraw'> -R$1.099</td>
						<td>Alimentação</td>
						<td>14/05/2022</td>
					</tr>
					<tr>
						<td>Aluguel</td>
						<td className='withdraw'> -R$1.500</td>
						<td>Casa</td>
						<td>10/05/2022</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
