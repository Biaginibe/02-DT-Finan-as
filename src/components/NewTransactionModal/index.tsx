import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';
interface NewTransactionModalProps {
	isOpen: boolean;
	onCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({
	isOpen,
	onCloseNewTransactionModal,
}: NewTransactionModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseNewTransactionModal}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<button
				type='button'
				onClick={onCloseNewTransactionModal}
				className='react-modal-close'
			>
        <img src={closeImg} alt={'Fechar modal'} />
      </button>
			<Container>
				<h2>Cadastrar transação</h2>

				<input placeholder='Título' />

				<input placeholder='Valor' type='number' />

				<input placeholder='Categoria' />

				<button type='submit'>Cadastrar</button>
			</Container>
		</Modal>
	);
}
