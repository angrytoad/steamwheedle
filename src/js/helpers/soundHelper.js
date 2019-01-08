// @flow
import { Howl, Howler } from 'howler';
import { rootSounds } from './soundCollections';

export const playSound = (sound: string) => {
  const keys = sound.split('/');
  let traversal = rootSounds;
  keys.forEach((key) => {
    if (traversal[key] !== undefined) {
      traversal = traversal[key];
    }
  });

  if (Array.isArray(traversal)) {
    traversal = _.sample(traversal);
  }

  const howl = new Howl({
    src: [`/sounds/${traversal}`],
  });

  howl.play();
};
