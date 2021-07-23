import CreepWork from "../CreepWork";

const roleRepairer = (creep: Creep) => {
  const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
  });

  if (creep.memory.working && target) {
    CreepWork.repair(creep, target);
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
  } else if (creep.memory.working && !target) {
    CreepWork.upgrade(creep, creep.room.controller);
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let newTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN
      })
      CreepWork.withDraw(creep, newTarget, RESOURCE_ENERGY);
    } else {
      creep.memory.working = true;
    }
  }
}

export default roleRepairer;