import CreepWork from "../CreepWork";

const roleUpgrader = (creep) => {
  if (creep.memory.working) {
    let target = creep.room.controller;
    CreepWork.upgrade(creep, target);
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