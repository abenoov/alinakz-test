export type Application = {
	id: number;
	applicationName: string;
	price: string;
	additionalInfo: [] | null;
	phoneNumber: string;
	applicationType: string;
	applicationDate: string;
	city: string;
	needCall: boolean;
	applicantsAmount: number;
};
