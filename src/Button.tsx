export interface ButtonProps {
  label?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export default function Button({ label = 'Click me', disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        padding: '8px 16px',
        borderRadius: 6,
        border: 'none',
        fontWeight: 500,
        cursor: disabled ? 'default' : 'pointer',
        background: variant === 'primary' ? '#4f46e5' : '#e5e7eb',
        color: variant === 'primary' ? '#fff' : '#111',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  )
}
