import { errorMapper } from '../modules/errorMapper';
import roleHarvester from './role.harvester';
import roleUpgrader from './role.upgrader';
import roleBuilder from './role.builder';
import Spawn from './spawn';

export const loop = errorMapper(() => {
  let minHavesterNumber = 10;
  const harvesterNumber = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');

  let minUpgraderNumber = 1;
  const upgraderNumber = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');

  let minBuilderNumber = 10;
  const builderNumber = _.sum(Game.creeps, (c) => c.memory.role == 'builder');

  console.log(JSON.stringify(Memory.creeps));

  for (let name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
    }
    if (harvesterNumber < minHavesterNumber) {
      Spawn.spawnCreep(Game.spawns['Spawn1'], [WORK, CARRY, MOVE], `havester_${Game.time}`, {
        memory: {role: 'harvester', working: false}
      });
    }else if (upgraderNumber < minUpgraderNumber) {
      Spawn.spawnCreep(Game.spawns['Spawn1'], [WORK, CARRY, MOVE], `upgrader_${Game.time}`, {
        memory: {role: 'upgrader', working: false}
      });
    }else if (builderNumber < minBuilderNumber) {
      Spawn.spawnCreep(Game.spawns['Spawn1'], [WORK, CARRY, MOVE], `builder_${Game.time}`, {
        memory: {role: 'builder', working: false}
      });
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
  }
});
