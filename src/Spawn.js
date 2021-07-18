import { minumMap } from '../constant/index';
export default class Spawn {
  static spawn(target, body, name, memory) {
    target.spawnCreep(body, name, memory);
  }

  static needSpawnCreep(role) {
    const creepNumber = _.sum(Game.creeps, (c) => c.memory.role == role);
    if (creepNumber < minumMap[role]) {
      return true;
    }
    return false;
  }

  static spawnCreep (room) {
    if (this.needSpawnCreep('harvester')) {
      this.spawn(room, [WORK, CARRY, MOVE], `harvester_${Game.time}`, {
        memory: {role: 'harvester', working: false}
      });
    } else if (this.needSpawnCreep('upgrader')) {
      this.spawn(room, [WORK, CARRY, MOVE], `upgrader_${Game.time}`, {
        memory: {role: 'upgrader', working: false}
      });
    } else if (this.needSpawnCreep('builder')) {
      this.spawn(room, [WORK, CARRY, MOVE], `builder_${Game.time}`, {
        memory: {role: 'builder', working: false}
      });
    } else if (this.needSpawnCreep('wallRepairer')) {
      this.spawn(room, [WORK, CARRY, MOVE], `wallRepairer_${Game.time}`, {
        memory: {role: 'wallRepairer', working: false}
      });
    }
  }
}