import { errorMapper } from '../modules/errorMapper';
import {roleHarvester, roleBuilder, roleUpgrader, roleWallRepairer, roleRepairer} from './roles/index';
import Spawn from './spawn';

export const loop = errorMapper(() => {

  // 创造creep
  Spawn.spawnCreep(Game.spawns['Spawn1']);

  // 让creep去工作
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
    if (creep.memory.role == 'repairer') {
      roleRepairer(creep);
    }
  }

  // 防御塔工作
  // const towers: any = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
  // for (let t of towers) {
  //   var target = t.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
  //   if (target) {
  //     t.attack(target);
  //   }
  // }
});
