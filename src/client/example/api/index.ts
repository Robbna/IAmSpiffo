/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

import { IsoObject, IsoPlayer, ISUIElement } from '@asledgehammer/pipewrench';

import * as Events from '@asledgehammer/pipewrench-events';
export function isoObjectToString(object: IsoObject): string {
  return `{name: ${object.getObjectName()}, x: ${object.getX()}, y: ${object.getY()}, z: ${object.getZ()}}`;
}

export function addRedSquare() {
  const element = new ISUIElement(512, 256, 256, 256);
  element.initialise();
  element.instantiate();
  element.addToUIManager();
  element.setVisible(true);
  element.render = () => {
    element.drawRect(512, 256, 256, 256, 1, 1.0, 0.0, 0.0);
  };
}

/**
 * @param player The player to greet.
 */
export function greetPlayer(player: IsoPlayer) {
  print(`Hello, ${player.getFullName()}!`);
}
