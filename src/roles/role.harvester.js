import CreepWork from "../CreepWork";

const roleHarvester = (creep) => {
  if (creep.memory.working) {
    let target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
      filter: (s) => (s.structureType == STRUCTURE_SPAWN
                   || s.structureType == STRUCTURE_EXTENSION)
                   && s.energy < s.energyCapacity
    });
    CreepWork.transfer(creep, target, RESOURCE_ENERGY);
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      CreepWork.harvest(creep, target);
    } else {
      // 能量足够后进入工作状态
      creep.memory.working = true;
    }
  }
}

export default roleHarvester;