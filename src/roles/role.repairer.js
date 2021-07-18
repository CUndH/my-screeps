import CreepWork from "../CreepWork";

const roleRepairer = (creep) => {
  const walls = creep.room.find(FIND_STRUCTURES, {
    filter: { structureType: STRUCTURE_WALL },
  });

  let target = null;

  for (let wall of walls) {
    if ((wall.hits / wall.hitsMax) < 0.3) {
      target = wall;
      break;
    }
  }

  if (creep.memory.working && target) {
    if(creep.repair(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
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