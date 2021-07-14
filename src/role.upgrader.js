const roleUpgrader = (creep) => {
  if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    let target = creep.room.controller;
    if (creep.upgradeController(target) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
}

export default roleUpgrader;