import { errorMapper } from '../modules/errorMapper';
import {roleHarvester, roleBuilder, roleUpgrader, roleWallRepairer} from './roles/index';
import Spawn from './spawn';

export const loop = errorMapper(() => {

  // 创造creep
  Spawn.spawnCreep(Game.spawns['Spawn1']);

  for (let name in Game.creeps) {
    let creep = Game.creeps[name];
    if (creep.memory.role == 'harvester') {
      roleHarvester(creep);
    }
    if (creep.memory.role == 'upgrader') {
      roleUpgrader(creep);
    }
    if (creep.memory.role == 'builder') {
      roleBuilder(creep);
    }
    if (creep.memory.role == 'wallRepairer') {
      roleWallRepairer(creep);
    }
  }
});
