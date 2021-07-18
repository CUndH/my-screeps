import CreepWork from "../CreepWork";

const roleHarvester = (creep) => {
  if (creep.memory.working) {
    let target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
      filter: (s) => (s.structureType == STRUCTURE_SPAWN
                   || s.structureType == STRUCTURE_EXTENSION)
                   && s.energy < s.energyCapacity
    });
    CreepWork.transfer(creep, target, RESOURCE_ENERGY);
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
      CreepWork.harvest(creep, target);
    } else {
      creep.memory.working = true;
    }
  }
}

export default roleHarvester;