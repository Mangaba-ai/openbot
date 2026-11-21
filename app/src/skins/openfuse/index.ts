import type { Skin } from "../types";
import { OpenFuseFrame } from "./frame";
import { ActivityScreen } from "./screens/activity";
import { GoalsScreen } from "./screens/goals";
import { IdeasScreen } from "./screens/ideas";

/**
 * OpenFuse's look: one Bot at the centre of a single phone-shaped column and five tabs in a floating
 * pill. Its identity is the deployment's: the brand.yaml name and each Bot's own Mangaba Bot avatar.
 * Chat is Mangaba Bot's own conversation, and Apps is Mangaba Bot's own Connections page. Activity, Ideas
 * and Goals put Mangaba Bot's own sections for the centre Bot under OpenFuse's titles.
 */
export const openfuse: Skin = {
  // The id predates the name OpenFuse. It is what accounts have saved and what `data-skin` keys on,
  // so it stays.
  id: "openfuse",
  name: "OpenFuse",
  description:
    "One Bot at the centre of a phone-shaped column, with five tabs.",
  Frame: OpenFuseFrame,
  screens: {
    activity: ActivityScreen,
    ideas: IdeasScreen,
    goals: GoalsScreen,
  },
};
