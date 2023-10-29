import { Drawer } from "antd";
import { ReactNode } from "react";

interface BurgerMenu {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<BurgerMenu> = ({
	children,
	isOpen,
	setIsOpen,
}) => {
	return (
		<Drawer
			placement="left"
			width={500}
			open={isOpen}
			onClose={() => setIsOpen((isOpen) => !isOpen)}
		>
			{children}
		</Drawer>
	);
};
