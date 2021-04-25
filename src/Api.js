export const AllTemtemApi =
	'https://temtem-api.mael.tech/api/temtems?fields=number,name,types,portraitWikiUrl';

export const SpecificTemApi = (number) =>
	`https://temtem-api.mael.tech/api/temtems/${number}?fields=name,types,portraitWikiUrl,stats,traits`;
