import CreepWork from "../CreepWork";

const roleUpgrader = (creep) => {
  if (creep.memory.working) {
    const constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    CreepWork.build(creep, constructionSite);
    if (!constructionSite) {
      CreepWork.upgrade(creep, creep.room.controller);
    }
    if (creep.store[RESOURCE_ENERGY] == 0) {
      // 能量存放完毕后退出工作状态
      creep.memory.working = false;
    }
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