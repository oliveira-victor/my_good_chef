type Props = {
    type: 'submit'
    onClick: () => void
    disabled?: boolean
    content: string
}

const PaymentBtn = ({ type, onClick, disabled, content }: Props) => {
    return (
        <button
            className="checkoutBtn"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    )
}

export default PaymentBtn