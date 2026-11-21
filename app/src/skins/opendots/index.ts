import type { Skin } from "../types";
import { OpenDotsFrame } from "./frame";
import { MemoriesScreen, RoutinesScreen } from "./screens";

/*
 * OpenDots over Mangaba Bot. The frame is OpenDots' rail, Dots sidebar, top bar and computer pane; the
 * pages inside it are Mangaba Bot's, chat included, in OpenDots' colours. Left out because Mangaba Bot has
 * nothing behind them: Spaces and their pages, page chats, the Brief, and the pause-everything
 * switch (Mangaba Bot pauses one Bot at a time, which the top bar offers for the Bot on screen).
 */
export const opendots: Skin = {
  id: "opendots",
  name: "OpenDots",
  description:
    "A compact sidebar of your Bots, with each Bot's computer beside the conversation.",
  Frame: OpenDotsFrame,
  screens: {
    routines: RoutinesScreen,
    memories: MemoriesScreen,
  },
};
