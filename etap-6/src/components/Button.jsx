function Button({ onClick, children, className = '', variant = 'number' }) {
    const baseStyles = "h-14 rounded-lg font-bold text-lg transition-all active:scale-95 shadow-sm";
    const variants = {
        number: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200",
        operator: "bg-amber-500 text-white hover:bg-amber-600",
        clear: "bg-rose-500 text-white hover:bg-rose-600",
        equal: "bg-emerald-500 text-white hover:bg-emerald-600"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
