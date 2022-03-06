import { DateTime } from "luxon";

export const calculateRemainingStamina = (hero: any) => {
	const secondsPerStaminaPoint = 1200;
	const currentTime = DateTime.fromJSDate(new Date());
	const staminaFullAt =
		hero.staminaFullAt && DateTime.fromJSDate(new Date(hero.staminaFullAt));

	if (!staminaFullAt || staminaFullAt <= currentTime) {
		return hero.stats.stamina;
	}

	const diffInSeconds = staminaFullAt.diff(currentTime, ["seconds"]);
	const finalDiff = diffInSeconds.toObject().seconds;

	if (finalDiff) {
		return hero.stats.stamina - Math.ceil(finalDiff / secondsPerStaminaPoint);
	} else {
		return hero.stats.stamina;
	}
};

export const updatedStaminaCooldown = (
	hero: any,
	staminaSubtracted: number
) => {
	const secondsPerStaminaPoint = 1200;
	const staminaFullAt =
		hero.staminaFullAt.ts === 0 || hero.staminaFullAt <= DateTime.now()
			? DateTime.fromJSDate(new Date())
			: DateTime.fromJSDate(new Date(hero.staminaFullAt));
	return staminaFullAt.plus({
		seconds: secondsPerStaminaPoint * staminaSubtracted,
	});
};
