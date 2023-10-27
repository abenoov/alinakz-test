export type Application = {
	id: number;
	key: number;
	applicantName: string;
	price: number;
	additionalInfo: [] | null;
	phoneNumber: string;
	applicationType: string;
	applicationDate: string;
	city: string;
	needCall: boolean;
	applicantsAmount: number;
};
