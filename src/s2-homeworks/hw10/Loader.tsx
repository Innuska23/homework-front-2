import s from './Loader.module.css'

export const Loader = () => (
    <div className={s.loader}>
        <svg viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="spinnerGradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="rgb(147, 51, 234)" />
                    <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
                </linearGradient>
            </defs>
            <circle
                className={s.circle}
                cx="54"
                cy="54"
                r="45"
                fill="none"
                strokeWidth="12"
                stroke="url(#spinnerGradient)"
            />
        </svg>
    </div>
)