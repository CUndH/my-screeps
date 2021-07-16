const roleUpgrader = (creep) => {
  const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
  if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    let target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
    if (creep.withdraw(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  } else {
    if (constructionSite) {
      if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
        creep.moveTo(constructionSite);
      }
    } else {
      let target = creep.room.controller;
      if (creep.upgradeController(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    }
  }
}

export default roleUpgrader;