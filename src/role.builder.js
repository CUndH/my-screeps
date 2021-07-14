const roleUpgrader = (creep) => {
  const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
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

export default roleUpgrader;