/**
 * The window becoming Mangaba Bot after a Start.
 *
 * `show_openbot` sends the window to Mangaba Bot's own page, and the setup page stays on screen until
 * that page replaces it: a second or two, more after an update, when Mangaba Bot's page loads for the
 * first time on its new release. Starting stays on screen meanwhile, as it was. On Windows I the
 * window said "Mangaba Bot is running", with Show Mangaba Bot and Stop Mangaba Bot, for about five seconds
 * between Starting and Mangaba Bot's home.
 *
 * `holdMs`: how long Starting stays once the window was sent to Mangaba Bot. A page that is still here
 * after that was never replaced, and the running screen says so, with Show Mangaba Bot to try again.
 * Tests that are about the running screen itself shorten it.
 */
export const handover = { holdMs: 20_000 };
