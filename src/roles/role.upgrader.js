import CreepWork from "../CreepWork";

const roleUpgrader = (creep) => {
  if (creep.memory.working) {
    let target = creep.room.controller;
    CreepWork.upgrade(creep, target);
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      CreepWork.harvest(creep, target);
    } else {
      creep.memory.working = true;
    }
  }
}

export default roleUpgrader;