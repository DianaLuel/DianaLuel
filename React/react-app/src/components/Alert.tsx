interface Props {
    // message: string;
    children: React.ReactNode;
}

const Alert = ({children}: Props) => {
    return (
        <div className="alert alert-primary">
            {children}
        </div>
    )
}

export default Alert;