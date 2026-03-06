function Display({ value }) {
    return (
        <div className="bg-white border-2 border-slate-200 rounded-xl p-4 text-right mb-6 shadow-inner min-h-[80px] flex items-center justify-end">
            <span className="text-4xl font-mono font-bold text-slate-800">{value}</span>
        </div>
    );
}

export default Display;
