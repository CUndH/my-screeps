import CreepWork from "../CreepWork";

const roleUpgrader = (creep) => {
  if (creep.memory.working) {
    const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    CreepWork.build(creep, constructionSite);
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: (s) => (s.structureType == STRUCTURE_SPAWN
                     || s.structureType == STRUCTURE_EXTENSION)
                     && s.energy < s.energyCapacity
      });
      CreepWork.withDraw(creep, target, RESOURCE_ENERGY);
    } else {
      creep.memory.working = true;
    }
  }
}

export default roleUpgrader;