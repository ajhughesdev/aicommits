import { ProviderDef } from './base.js';

export const LmStudioProvider: ProviderDef = {
	name: 'lmstudio',
	displayName: 'LM Studio (local)',
	baseUrl: 'http://localhost:1234/v1',
	modelsFilter: (models) =>
		models.filter((m: any) => m.id).map((m: any) => m.id),
	defaultModel: '',
	requiresApiKey: false,
};
