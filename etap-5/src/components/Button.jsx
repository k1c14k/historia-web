function Button({ onClick, children, className = '' }) {
    return (
        <button
            onClick={onClick}
            className={`calc-btn ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
