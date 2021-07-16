import { errorMapper } from '../modules/errorMapper';
import {roleHarvester, roleBuilder, roleUpgrader, roleWallRepairer} from './roles/index';
import Spawn from './spawn';
import { minumMap } from '../constant/index';

export const loop = errorMapper(() => {

  for (let role in minumMap) {
    const creepsNumber = _.sum(Game.creeps, (c) => c.memory.role == role);
    for (let name in Memory.creeps) {
      // creep 死亡后清除内存
      if (!Game.creeps[name]) {
        delete Memory.creeps[name];
      }
      // creep 低于限定值后重新创造相应角色
      if (creepsNumber < minumMap[role]) {
        Spawn.spawnCreep(Game.spawns['Spawn1'], [WORK, CARRY, MOVE], `${role}_${Game.time}`, {
          memory: {
            role,
            working: false,
          }
        });
      }
    }
  }

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
