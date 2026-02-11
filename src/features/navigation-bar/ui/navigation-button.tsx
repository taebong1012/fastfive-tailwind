type NavigationButtonProps = {
    name: string;
    onClick: () => void;
    onMouseEnter: () => void;
};

export const NavigationButton = ({ name, onClick, onMouseEnter }: NavigationButtonProps) => {
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} className="px-[23px]">
            {name}
        </button>
    );
};
