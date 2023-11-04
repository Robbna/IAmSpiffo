/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

import { getPlayer } from '@asledgehammer/pipewrench';
import * as Events from '@asledgehammer/pipewrench-events';

Events.everyOneMinute.addListener(() => {
  getPlayer().Say(getPlayer().getFullName());
});
