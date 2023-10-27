export type Application = {
	id: number;
	key: number;
	applicantName: string;
	price: number;
	additionalInfo: {
		isSendEmail: string; // todo
		isSendSMS: string; // todo
	};
	phoneNumber: string;
	applicationType: string;
	date: string;
	city: string;
	needCall: boolean;
};
